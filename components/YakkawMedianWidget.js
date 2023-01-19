import useYakkaw from "./useYakkaw";
import {
  calculateMedian,
  calculateUSAQI_pm25,
  getUSAQIColorCode,
} from "./helpers";

const YakkawMedianWidget = () => {
  const { data, isError, isLoading } = useYakkaw();

  if (isLoading)
    return (
      <>
        <span>...</span>
      </>
    );
  if (isError)
    return (
      <>
        <span>???</span>
      </>
    );

  // data filtering for yakkaw, plus excluding any last 1hr value that is 0
  let rawdata = data.response;
  let activenodes = rawdata.filter((station) => {
    return (
      station.status === "Active" && station.address.indexOf("เชียงราย") != -1
    );
  });
  let freshnodes = activenodes.filter((station) => {
    let fresh = true;
    if (
      station.pm25 == null ||
      station.updatetime < station.servertime ||
      station.av1h === 0
    ) {
      fresh = false;
    }
    return fresh;
  });

  let allDustValue = [];

  freshnodes.forEach((element) => {
    // console.log(element.av1h)
    allDustValue.push(element.av1h);
  });

  let median = calculateMedian(allDustValue);

  return (
    <>
      <span
        className={
          "p-1 rounded-md " +
          `aqi-bg-${getUSAQIColorCode(calculateUSAQI_pm25(median))}`
        }
      >
        {median}
      </span>
    </>
  );
};

export default YakkawMedianWidget;

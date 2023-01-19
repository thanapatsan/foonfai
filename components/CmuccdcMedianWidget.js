import useCmuccdc from "./useCmuccdc";
import {
  calculateMedian,
  calculateUSAQI_pm25,
  getUSAQIColorCode,
} from "./helpers";

const CmuccdcMedianWidget = () => {
  const { data, isError, isLoading } = useCmuccdc();

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

  let rawdata = data.stations;

  let allDustValue = [];

  rawdata.forEach((element) => {
    allDustValue.push(element.pm25);
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
      </span>{" "}
    </>
  );
};

export default CmuccdcMedianWidget;

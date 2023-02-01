import { calculateUSAQI_pm25, getUSAQIColorCode } from "./helpers";
import { CommonDataBoxSmall, CommonValueBoxSmall } from "./common";

const YakkawSmallWidget = ({ station }) => {
  return (
    <>
      <div className="flex flex-row max-w-full border border-gray-400 rounded-md">
        <CommonDataBoxSmall
          place={station.place}
          address={station.address}
          date={station.ddate}
          time={station.dtime}
        />
        <CommonValueBoxSmall pm25={station.av6h} />
      </div>
    </>
  );
};

export default YakkawSmallWidget;

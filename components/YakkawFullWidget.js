import { CommonDataBox, CommonDataWatermark, CommonValueBox } from "./common";
import { calculateUSAQI_pm25, getUSAQIColorCode } from "../components/helpers";

const YakkawHistory = ({ station, hidden = false }) => {
  return (
    <>
      <div
        className={
          "grid grid-rows-1 grid-cols-5 grid-flow-col gap-1 justify-items-center text-center mb-1 mx-2 " +
          (hidden && `hidden `)
        }
      >
        <YakkawHistoryPill data={station.av24h} />
        <YakkawHistoryPill data={station.av12h} />
        <YakkawHistoryPill data={station.av6h} />
        <YakkawHistoryPill data={station.av3h} />
        <YakkawHistoryPill data={station.av1h} />
      </div>
    </>
  );
};

const YakkawHistoryPill = ({ data }) => {
  return (
    <span
      className={
        `w-full rounded-md text-sm ` +
        `aqi-bg-${getUSAQIColorCode(calculateUSAQI_pm25(data))}`
      }
    >
      {data}
    </span>
  );
};

const YakkawFullWidget = ({ station }) => {
  return (
    <>
      <div className="flex flex-row max-w-full border border-gray-400 rounded-md">
        <div className="flex-1">
          <CommonDataBox
            place={station.place}
            address={station.address}
            date={station.ddate}
            time={station.dtime}
            temperature={station.temperature}
            humidity={station.humidity}
          />
          <YakkawHistory station={station} />
          <CommonDataWatermark name={"yakkaw.mfu.ac.th"} id={station.dvid} />
          <p>PM10: </p>
        </div>
        <CommonValueBox pm25={station.pm25} />
      </div>
    </>
  );
};

export default YakkawFullWidget;

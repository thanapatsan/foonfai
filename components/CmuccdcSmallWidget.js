import { CommonDataBoxSmall, CommonValueBoxSmall } from "./common";
import { splitLocationName } from "../components/helpers";

const CmuccdcSmallWidget = ({ station }) => {
  return (
    <>
      <div className="flex flex-row max-w-full border border-gray-400 rounded-md">
        <CommonDataBoxSmall
          place={
            splitLocationName(station.dustboy_name)["name"] +
            " " +
            splitLocationName(station.dustboy_name)["note"]
          }
          address={splitLocationName(station.dustboy_name)["address"]}
          timestamp={station.log_datetime}
        />
        <CommonValueBoxSmall pm25={station.pm25} />
      </div>
    </>
  );
};

export default CmuccdcSmallWidget;

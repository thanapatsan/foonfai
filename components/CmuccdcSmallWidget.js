import { CommonDataBoxSmall, CommonValueBoxSmall } from "./common";

const CmuccdcSmallWidget = ({ station }) => {
  return (
    <>
      <div className="flex flex-row max-w-full border border-gray-400 rounded-md">
        <CommonDataBoxSmall
          place={station.dustboy_name}
          address={station.address}
          timestamp={station.log_datetime}
        />
        <CommonValueBoxSmall pm25={station.pm25} />
      </div>
    </>
  );
};

export default CmuccdcSmallWidget;

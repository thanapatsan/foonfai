import { calculateUSAQI_pm25, getUSAQIColorCode } from "../components/helpers";
import { CommonDataBox, CommonDataWatermark, CommonValueBox } from "./common";

const CmuccdcFullWidget = ({ station }) => {
  return (
    <>
      <div className="flex flex-row max-w-full border border-gray-400 rounded-md">
        <div className="flex-1">
          <CommonDataBox
            place={station.dustboy_name}
            address={station.address}
            timestamp={station.log_datetime}
            temperature={station.temp}
            humidity={station.humid}
          />
          <CommonDataWatermark name={"cmuccdc.org"} id={station.dustboy_uri} />
        </div>

        <CommonValueBox pm25={station.pm25} />
      </div>
    </>
  );
};

export default CmuccdcFullWidget;

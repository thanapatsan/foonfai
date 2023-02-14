import {
  calculateUSAQI_pm25,
  getUSAQIColorCode,
  calculateTHAQI_pm25,
  getTHAQIColorCode,
} from "./helpers";

export const CommonDataBox = ({
  place,
  address,
  timestamp,
  date,
  time,
  temperature,
  humidity,
}) => {
  let timeString = timestamp ? `${timestamp}` : `${date} ${time}`;

  // const timeFormatted = "";
  const timeFormatted = new Intl.DateTimeFormat("th", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(timeString));

  return (
    <div className="flex-1">
      <div className="m-2">
        <h1 className="text-xl font-medium my-1">{place}</h1>
        <h2 className="text-base my-1">{address}</h2>
        <h3 className="text-sm">{`📅 ${timeFormatted}`}</h3>
        {(temperature == null && humidity == null) ||
        (temperature === "0.00" && humidity === "0.00") ? (
          <></>
        ) : (
          <h4 className="text-sm">{`🌡️: ${Math.round(
            temperature
          )}℃ 💧:${Math.round(humidity)}%`}</h4>
        )}
      </div>
    </div>
  );
};

export const CommonDataBoxSmall = ({ place, address }) => {
  return (
    <div className="flex-1">
      <div className="m-2">
        <h1 className="text-base font-medium">{place}</h1>
        {address && <h2 className="text-sm">{address}</h2>}
      </div>
    </div>
  );
};

export const CommonValueBox = ({ pm25 }) => {
  return (
    <>
      <div
        className={
          "flex flex-col justify-center text-center w-1/3 rounded-r-md " +
          `aqi-bg-${getUSAQIColorCode(calculateUSAQI_pm25(pm25))}`
        }
      >
        <p className="text-sm">
          PM2.5: <p className="text-4xl font-bold">{pm25}</p>μg/m
          <sup>3</sup>
        </p>
      </div>
    </>
  );
};

export const CommonValueBoxSmall = ({ pm25 }) => {
  return (
    <>
      <div
        className={
          "flex flex-col justify-center text-center w-1/6 rounded-r-md " +
          `aqi-bg-${getUSAQIColorCode(calculateUSAQI_pm25(pm25))}`
        }
      >
        <p className="text-xl font-bold">{pm25}</p>
      </div>
    </>
  );
};

export const CommonValueBoxTHSmall = ({ pm25 }) => {
  return (
    <>
      <div
        className={
          "flex flex-col justify-center text-center w-1/6 rounded-r-md " +
          `aqi-bg-${getTHAQIColorCode(calculateTHAQI_pm25(pm25))}`
        }
      >
        <p className="text-xl font-bold">{pm25}</p>
      </div>
    </>
  );
};

export const CommonValueBoxUSSmall = ({ pm25 }) => {
  return (
    <>
      <div
        className={
          "flex flex-col justify-center text-center w-1/6 rounded-r-md " +
          `aqi-bg-${getUSAQIColorCode(calculateUSAQI_pm25(pm25))}`
        }
      >
        <p className="text-xl font-bold">{pm25}</p>
      </div>
    </>
  );
};

export const CommonDataWatermark = ({ name, id }) => {
  return (
    <div className="mx-2 mb-1">
      <p className="text-xs text-gray-500">{`${name} (${id})`}</p>
    </div>
  );
};

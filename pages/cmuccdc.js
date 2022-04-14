import useCmuccdc from "../components/useCmuccdc";
import { calculateUSAQI_pm25, getUSAQIColorCode } from "../components/helpers";

const Cmuccdc = () => {
  const { data, isError, isLoading } = useCmuccdc();
  const datasourcestring = "cmuccdc.org";

  if (isLoading) return <>loading cmuccdc</>;
  if (isError) return <>{isError}</>;

  let rawdata = data.stations;

  return (
    <>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 lg:grid-cols-3">
        {rawdata &&
          rawdata.map((station) => (
            <div
              key={station.id}
              className="flex flex-row max-w-full border border-gray-400 rounded-md"
            >
              <div className="flex-1">
                <div className="m-2">
                  <h1 className="text-xl font-medium my-1">
                    {station.dustboy_name}
                  </h1>
                  <h2 className="text-base my-1">{station.address}</h2>
                  <h3 className="text-sm">{`📅 ${station.log_datetime}`}</h3>
                  <h4 className="text-sm">
                    {`🌡️: ${station.temp}℃ 💧:${station.humid}%`}
                  </h4>
                </div>

                <div className="mx-2 mb-1">
                  <p className="text-xs text-gray-500">
                    {`${datasourcestring} (${station.id})`}
                  </p>
                </div>
              </div>
              <div
                className={
                  "flex flex-col justify-center text-center w-1/3 " +
                  `aqi-bg-${getUSAQIColorCode(
                    calculateUSAQI_pm25(station.pm25)
                  )}`
                }
              >
                <p className="text-4xl font-bold">{station.pm25}</p>
                <p className="text-sm mt-1">
                  PM<sub>2.5</sub>:
                  <span className="font-bold">{` ${station.pm25}`}</span> μg/m
                  <sup>3</sup>
                </p>
                <p className="text-sm mb-1">
                  PM<sub>10</sub>:
                  <span className="font-bold">{` ${station.pm10}`}</span> μg/m
                  <sup>3</sup>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cmuccdc;

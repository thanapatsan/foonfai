import useYakkaw from "../components/useYakkaw";
import { calculateUSAQI_pm25, getUSAQIColorCode } from "../components/helpers";

const Yakkaw = () => {
  const { data, isError, isLoading } = useYakkaw();
  const datasourcestring = "yakkaw.mfu.ac.th";

  if (isLoading) return <>Loading yakkaw</>;
  if (isError) return <>{isError}</>;

  // just a bunch of data filtering
  let rawdata = data.response;
  let activenodes = rawdata.filter((station) => {
    return (
      station.status === "Active" && station.address.indexOf("เชียงราย") != -1
    );
  });
  let freshnodes = activenodes.filter((station) => {
    let fresh = true;
    if (station.pm25 == null || station.updatetime < station.servertime) {
      fresh = false;
    }
    return fresh;
  });

  return (
    <>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 lg:grid-cols-3">
        {freshnodes &&
          freshnodes.map((station) => (
            <div
              key={station.dvid}
              className="flex flex-row max-w-full border border-gray-400 rounded-md"
            >
              <div className="flex-1">
                <div className="m-2">
                  <h1 className="text-xl font-medium my-1">{station.place}</h1>
                  <h2 className="text-base my-1">{station.address}</h2>
                  <h3 className="text-sm">
                    {`📅 ${station.ddate} ${station.dtime}`}
                  </h3>
                  <h4 className="text-sm">
                    {`🌡️: ${station.temperature}℃ 💧:${station.humidity}%`}
                  </h4>
                </div>
                <div className="grid grid-rows-1 grid-cols-5 grid-flow-col justify-items-center text-center mb-1 px-1">
                  <p
                    className={
                      "w-11/12 rounded-md text-sm " +
                      `aqi-bg-${getUSAQIColorCode(
                        calculateUSAQI_pm25(station.av24h)
                      )}`
                    }
                  >
                    {station.av24h}
                  </p>
                  <p
                    className={
                      "w-11/12 rounded-md text-sm " +
                      `aqi-bg-${getUSAQIColorCode(
                        calculateUSAQI_pm25(station.av12h)
                      )}`
                    }
                  >
                    {station.av12h}
                  </p>
                  <p
                    className={
                      "w-11/12 rounded-md text-sm " +
                      `aqi-bg-${getUSAQIColorCode(
                        calculateUSAQI_pm25(station.av6h)
                      )}`
                    }
                  >
                    {station.av6h}
                  </p>
                  <p
                    className={
                      "w-11/12 rounded-md text-sm " +
                      `aqi-bg-${getUSAQIColorCode(
                        calculateUSAQI_pm25(station.av3h)
                      )}`
                    }
                  >
                    {station.av3h}
                  </p>
                  <p
                    className={
                      "w-11/12 rounded-md text-sm " +
                      `aqi-bg-${getUSAQIColorCode(
                        calculateUSAQI_pm25(station.av1h)
                      )}`
                    }
                  >
                    {station.av1h}
                  </p>
                </div>
                <div className="mx-2 mb-1">
                  <p className="text-xs text-gray-500">
                    {" "}
                    {`${datasourcestring} (${station.dvid})`}{" "}
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
                  <span className="font-bold">{` ${station.pm100}`}</span> μg/m
                  <sup>3</sup>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Yakkaw;

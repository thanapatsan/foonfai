import { getDistance } from "../components/helpers";
import useCmuccdc from "../components/useCmuccdc";
import useLocation from "../components/useLocation";

import LocationHandler from "../components/LocationHandler";
const coordTest = () => {
  let targetLat, targetLon;

  if (typeof window !== "undefined") {
    if (localStorage.getItem("lat") && localStorage.getItem("lon")) {
      targetLat = localStorage.getItem("lat");
      targetLon = localStorage.getItem("lon");
      console.log(`pulled user location from localstorage`);
    }
  }

  const { data, isError, isLoading } = useCmuccdc();

  if (isLoading) return <>loading cmuccdc</>;
  if (isError) return <>{isError}</>;

  let rawdata = data.stations;

  let nodedistance = rawdata.filter((station) => {
    let distance = getDistance(
      station.dustboy_lat,
      station.dustboy_lon,
      targetLat,
      targetLon
    );
    station.distance = distance;
    return station;
  });

  let distancesort = nodedistance.sort((a, b) => {
    let x = a.distance;
    let y = b.distance;
    return x < y ? -1 : x > y ? 1 : 0;
  });


  return (
    <>
    <LocationHandler/>
      <div className="">
        {distancesort &&
          distancesort.map((station) => (
            <div key={station.dvid}>
            {/* {JSON.stringify(station)} */}
              <p>{station.place}</p>
              <p>
                {`[${station.dustboy_lat}, ${station.dustboy_lon}]`} distance:
                {station.distance}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default coordTest;

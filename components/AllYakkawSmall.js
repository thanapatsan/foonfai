import useYakkaw from "./useYakkaw";
import { getDistance } from "../components/helpers";

import YakkawSmallWidget from "../components/YakkawSmallWidget";

const AllYakkawSmall = () => {

  let targetLat, targetLon;

  if (typeof window !== "undefined") {
    if (localStorage.getItem("lat") && localStorage.getItem("lon")) {
      targetLat = localStorage.getItem("lat");
      targetLon = localStorage.getItem("lon");
      console.log(`pulled user location from localstorage`);
    }
  }


  const { data, isError, isLoading } = useYakkaw();

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

  let nodedistance = freshnodes.filter((station) => {
    let distance = getDistance(
      station.latitude,
      station.longitude,
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
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {distancesort &&
          distancesort.map((station) => (
            <YakkawSmallWidget station={station} key={station.dvid} />
          ))}
      </div>
    </>
  );
};

export default AllYakkawSmall;

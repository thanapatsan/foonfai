import useCmuccdc from "./useCmuccdc";
import { getDistance } from "../components/helpers";

import CmuccdcSmallWidget from "./CmuccdcSmallWidget";

const AllCmuccdcSmall = () => {
  const { data, mutate, isError, isLoading } = useCmuccdc();

  let displayData = {};
  let targetLat, targetLon;
  let locationOn = false;

  if (typeof window !== "undefined") {
    if (localStorage.getItem("lat") && localStorage.getItem("lon")) {
      locationOn = true;
      targetLat = localStorage.getItem("lat");
      targetLon = localStorage.getItem("lon");
      console.log(`pulled user location from localstorage`);
    }
  }

  if (isLoading) return <>loading cmuccdc</>;
  if (isError) return <>{isError}</>;

  let rawdata = data.stations;
  displayData = rawdata;

  if (locationOn) {
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

    displayData = distancesort;
  }

  return (
    <>
      <div>{locationOn && `ข้อมูลเรียงตามตำแหน่งแล้ว`}</div>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded"
        onClick={() => {
          console.log(`mutate`);
          mutate();
        }}
      >
        refresh
      </button>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {displayData &&
          displayData.map((station) => (
            <CmuccdcSmallWidget key={station.id} station={station} />
          ))}
      </div>
    </>
  );
};

export default AllCmuccdcSmall;

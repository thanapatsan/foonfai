import useYakkaw from "./useYakkaw";
import { getDistance } from "../components/helpers";

import YakkawSmallWidget from "../components/YakkawSmallWidget";

import { useState, useEffect } from "react";

const AllYakkawSmall = () => {
  // data prep
  const { data, mutate, isError, isLoading } = useYakkaw();


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
  displayData = freshnodes;

  // for when location is saved
  if (locationOn) {
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

    let distancesorted = nodedistance.sort((a, b) => {
      let x = a.distance;
      let y = b.distance;
      return x < y ? -1 : x > y ? 1 : 0;
    });

    displayData = distancesorted;
  }

  return (
    <>
      <div>
        {locationOn && `ข้อมูลเรียงตามตำแหน่งแล้ว`}
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded"
        onClick={() => {
          setManualRefreshTimestamp(`${new Date().toLocaleString("th-TH")}`);
          mutate();
        }}
      >
        refresh
      </button>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {displayData &&
          displayData.map((station) => (
            <YakkawSmallWidget station={station} key={station.dvid} />
          ))}
      </div>
    </>
  );
};

export default AllYakkawSmall;

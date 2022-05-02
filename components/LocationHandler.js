import { useState } from "react";

const LocationHandler = () => {
  const [locGetterState, setLocGetterState] = useState("");
  const [gettingLocationState, setGettingLocationState] = useState(false);

  function getUserLocation() {
    if (navigator.geolocation) {
      setLocGetterState("getting location");
      setGettingLocationState(true);
      navigator.geolocation.getCurrentPosition(
        setUserLocation,
        locationErrorHandler
      );
    }
  }

  function setUserLocation(position) {
    console.log(`got user location`);

    if (typeof window !== "undefined") {
      localStorage.setItem("lat", position.coords.latitude);
      localStorage.setItem("lon", position.coords.longitude);
      console.log(`successfully save user location`);
    }

    setLocGetterState("got location, refresh page to take effect");
    setGettingLocationState(false);
  }

  function clearUserLocation() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("lat");
      localStorage.removeItem("lon");
      console.log(`successfully remove user location`);
    }
    setLocGetterState("location cleared, refresh page to take effect");
  }

  function locationErrorHandler(error) {
    switch (error.code) {
      case 1:
        setLocGetterState(`ผู้ใช้ไม่อนุญาติให้ดึงตำแหน่ง`);
        setGettingLocationState(false);
        break;
      default:
        console.error(error);
        setGettingLocationState(false);
        break;
    }
  }

  function hasLocation() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lat") && localStorage.getItem("lon");
    }
  }

  function gettingLocation() {
    return gettingLocationState;
  }

  return (
    <div>
      {hasLocation() ? (
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
          onClick={clearUserLocation}
        >
          ล้างตำแหน่งปัจจุบัน
        </button>
      ) : gettingLocation() ? (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={getUserLocation}
        >
          กำลังดึงตำแหน่งปัจจุบัน
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={getUserLocation}
        >
          ดึงตำแหน่งปัจจุบัน
        </button>
      )}
      <span>{locGetterState}</span>
    </div>
  );
};

export default LocationHandler;

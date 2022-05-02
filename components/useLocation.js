import useState from "react";

const useLocation = () => {
  const defaultLocationLat = 20.0411684;
  const defaultLocationLon = 99.8906438;


  function checkDefaultLocation() {
    if (
      localStorage.getItem("lat") === null &&
      localStorage.getItem("lon") === null
    ) {
      console.log(`location data not found. adding default.`);
      localStorage.setItem("lat", defaultLocationLat);
      localStorage.setItem("lon", defaultLocationLon);
    }
  }


  function getUserLocation() {
    if (navigator.geolocation) {
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
  }

  function locationErrorHandler(error) {
    switch (error.code) {
      case 1:
        console.log(`user denied location access`);
        break;
      default:
        console.error(error);
        break;
    }
  }

  return {
    getUserLocation,
    setUserLocation,
    checkDefaultLocation,
  };
};

export default useLocation;

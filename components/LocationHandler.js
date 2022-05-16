import { useState, useEffect } from "react";

const LocationHandler = () => {
  const [alertText, setAlertText] = useState("");

  const [gettingLocationState, setGettingLocationState] = useState(false);

  const [hasUserLocation, setHasUserLocation] = useState(false);

  const LOCALETEXT = {
    th: {
      responses: {
        pulling:`กำลังดึงตำแหน่ง...`,
        denied: `ผู้ใช้ไม่อนุญาติให้ดึงตำแหน่ง`,
        success: `ดึงตำแหน่งสำเร็จ`,
        cleared: `ล้างตำแหน่งสำเร็จ`,
      },
      button: {
        clear: `ล้างตำแหน่ง`,
        pulling: `กำลังดึงตำแหน่ง`,
        available: `ดึงตำแหน่ง`,
      },
    },
  };

  useEffect(() => {
    if (hasLocation()) {
      console.log(`have user location`);
      setHasUserLocation(true);
    }
  }, []);

  function displayAlertText(text){
    setAlertText(text)
    setTimeout(() => {
      setAlertText("")
    }, 5000);
  }

  function hasLocation() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lat") && localStorage.getItem("lon");
    }
  }

  function getUserLocation() {
    if (navigator.geolocation) {
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

    displayAlertText(LOCALETEXT.th.responses.success);
    setGettingLocationState(false);
    setHasUserLocation(true);

  }

  function clearUserLocation() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("lat");
      localStorage.removeItem("lon");
      console.log(`successfully remove user location`);
    }
    displayAlertText(LOCALETEXT.th.responses.cleared);
    setHasUserLocation(false);

  }

  function locationErrorHandler(error) {
    switch (error.code) {
      case 1:
        displayAlertText(LOCALETEXT.th.responses.denied);
        setGettingLocationState(false);
        break;
      default:
        console.error(error);
        setGettingLocationState(false);
        break;
    }
  }

  return (
    <div>
      {hasUserLocation ? (
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
          onClick={clearUserLocation}
        >
          {LOCALETEXT.th.button.clear}
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={getUserLocation}
          disabled={gettingLocationState}
        >
          {gettingLocationState
            ? LOCALETEXT.th.button.pulling
            : LOCALETEXT.th.button.available}
        </button>
      )}
      <span>{alertText}</span>
    </div>
  );
};

export default LocationHandler;

export const calculateTHAQI_pm25 = (value) => {
  let cHigh;
  let cLow;
  let iHigh;
  let iLow;
  if (value > 0 && value <= 25) {
    iLow = 0;
    iHigh = 25;
    cLow = 0;
    cHigh = 25;
  } else if (value >= 26 && value <= 37) {
    iLow = 26;
    iHigh = 50;
    cLow = 26;
    cHigh = 37;
  } else if (value >= 38 && value <= 50) {
    iLow = 51;
    iHigh = 100;
    cLow = 38;
    cHigh = 50;
  } else if (value >= 51 && value <= 90) {
    iLow = 101;
    iHigh = 200;
    cLow = 51;
    cHigh = 90;
  } else if (value >= 91) {
    return 200 + (value - 90);
  } else return "???";
  let result = ((iHigh - iLow) / (cHigh - cLow)) * (value - cLow) + iLow;
  return Math.floor(result);
};

export const calculateTHAQI_pm100 = (value) => {
  let cHigh;
  let cLow;
  let iHigh;
  let iLow;
  if (value > 0 && value <= 50) {
    iLow = 0;
    iHigh = 25;
    cLow = 0;
    cHigh = 50;
  } else if (value >= 51 && value <= 80) {
    iLow = 26;
    iHigh = 50;
    cLow = 51;
    cHigh = 80;
  } else if (value >= 81 && value <= 120) {
    iLow = 51;
    iHigh = 100;
    cLow = 81;
    cHigh = 120;
  } else if (value >= 121 && value <= 180) {
    iLow = 101;
    iHigh = 200;
    cLow = 121;
    cHigh = 180;
  } else if (value >= 181) {
    return 200 + (value - 180);
  } else return "???";
  let result = ((iHigh - iLow) / (cHigh - cLow)) * (value - cLow) + iLow;
  return Math.floor(result);
};

export const getTHAQIColorCode = (value) => {
  if (value > 0 && value <= 25) {
    return "blue";
  } else if (value >= 26 && value <= 50) {
    return "green";
  } else if (value >= 51 && value <= 100) {
    return "yellow";
  } else if (value >= 101 && value <= 200) {
    return "orange";
  } else if (value >= 201) {
    return "red";
  } else return "gray";
};

export const calculateUSAQI_pm25 = (value) => {
  let cHigh;
  let cLow;
  let iHigh;
  let iLow;
  if (value >= 0 && value <= 12.0) {
    iLow = 0;
    iHigh = 50;
    cLow = 0.0;
    cHigh = 12.0;
  } else if (value >= 12.1 && value <= 35.4) {
    iLow = 51;
    iHigh = 100;
    cLow = 12.1;
    cHigh = 35.4;
  } else if (value >= 35.5 && value <= 55.4) {
    iLow = 101;
    iHigh = 150;
    cLow = 35.5;
    cHigh = 55.4;
  } else if (value >= 55.5 && value <= 150.4) {
    iLow = 151;
    iHigh = 200;
    cLow = 55.5;
    cHigh = 150.4;
  } else if (value >= 150.5 && value <= 250.4) {
    iLow = 201;
    iHigh = 300;
    cLow = 150.5;
    cHigh = 250.4;
  } else if (value >= 250.5 && value <= 350.4) {
    iLow = 301;
    iHigh = 400;
    cLow = 250.5;
    cHigh = 350.4;
  } else if (value >= 350.5 && value <= 500.4) {
    iLow = 401;
    iHigh = 500;
    cLow = 350.5;
    cHigh = 500.4;
  } else if (value >= 500.5) {
    return 500 + (value - 500.5);
  } else return "???";
  let result = ((iHigh - iLow) / (cHigh - cLow)) * (value - cLow) + iLow;
  return Math.floor(result);
};
export const calculateUSAQI_pm100 = (value) => {
  let cHigh;
  let cLow;
  let iHigh;
  let iLow;
  if (value > 0 && value <= 54) {
    iLow = 0;
    iHigh = 50;
    cLow = 0;
    cHigh = 54;
  } else if (value >= 55 && value <= 154) {
    iLow = 51;
    iHigh = 100;
    cLow = 55;
    cHigh = 154;
  } else if (value >= 155 && value <= 254) {
    iLow = 101;
    iHigh = 150;
    cLow = 155;
    cHigh = 254;
  } else if (value >= 255 && value <= 354) {
    iLow = 151;
    iHigh = 200;
    cLow = 255;
    cHigh = 354;
  } else if (value >= 355 && value <= 424) {
    iLow = 201;
    iHigh = 300;
    cLow = 355;
    cHigh = 424;
  } else if (value >= 425 && value <= 504) {
    iLow = 301;
    iHigh = 400;
    cLow = 425;
    cHigh = 504;
  } else if (value >= 505 && value <= 604) {
    iLow = 401;
    iHigh = 500;
    cLow = 505;
    cHigh = 604;
  } else if (value > 605) {
    return 500 + (value - 604);
  } else return "???";
  let result = ((iHigh - iLow) / (cHigh - cLow)) * (value - cLow) + iLow;
  return Math.floor(result);
};
export const getUSAQIColorCode = (value) => {
  if (value > 0 && value <= 50) {
    return "green";
  } else if (value >= 51 && value <= 100) {
    return "yellow";
  } else if (value >= 101 && value <= 150) {
    return "orange";
  } else if (value >= 151 && value <= 200) {
    return "red";
  } else if (value >= 201 && value <= 300) {
    return "purple";
  } else if (value > 301) {
    return "brown";
  } else return "gray";
};

export const clockEmoji = (value) => {
  let timestring = value;
  let hours = timestring.substring(0, 2);
  let minutes = timestring.substring(timestring.length, 3);
  let halfhour = minutes >= 16 && minutes <= 45;
  if (hours % 12 == 0) {
    if (halfhour) {
      return "🕧";
    } else return "🕛";
  } else if (hours % 12 == 1) {
    if (halfhour) {
      return "🕜";
    } else return "🕐";
  } else if (hours % 12 == 2) {
    if (halfhour) {
      return "🕝";
    } else return "🕑";
  } else if (hours % 12 == 3) {
    if (halfhour) {
      return "🕞";
    } else return "🕒";
  } else if (hours % 12 == 4) {
    if (halfhour) {
      return "🕟";
    } else return "🕓";
  } else if (hours % 12 == 5) {
    if (halfhour) {
      return "🕠";
    } else return "🕔";
  } else if (hours % 12 == 6) {
    if (halfhour) {
      return "🕡";
    } else return "🕕";
  } else if (hours % 12 == 7) {
    if (halfhour) {
      return "🕢";
    } else return "🕖";
  } else if (hours % 12 == 8) {
    if (halfhour) {
      return "🕣";
    } else return "🕗";
  } else if (hours % 12 == 9) {
    if (halfhour) {
      return "🕤";
    } else return "🕘";
  } else if (hours % 12 == 10) {
    if (halfhour) {
      return "🕥";
    } else return "🕙";
  } else if (hours % 12 == 11) {
    if (halfhour) {
      return "🕦";
    } else return "🕚";
  }
};

// modified from https://www.geodatasource.com/developers/javascript

export const getDistance = (lat1, lon1, lat2, lon2) => {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;

    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344; //convert miles to km

    dist = Math.round(dist*1000)/1000; // round down a bit

    return dist;
  }
};

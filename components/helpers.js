export const calculateTHAQI_pm25 = (value) => {
  let cHigh;
  let cLow;
  let iHigh;
  let iLow;
  if (value >= 0 && value <= 25) {
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
  if (value >= 0 && value <= 50) {
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
  } else if (value >= 301) {
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

export const calculateMedian = (numbers) => {
  const sorted = Array.from(numbers).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return Math.floor((sorted[middle - 1] + sorted[middle]) / 2);
  }

  return sorted[middle];
};

export const splitLocationName = (location) => {
  // regex for split the subdist/dist/prov name, split notes in parentheses
  let regex_subdistrict = /\s(ต\s?\..+)/;
  let regex_district = /\s(อ\s?\..+)/;
  let regex_province = /\s(จ\s?\..+)/;
  let regex_parentheses = /\s?(\([^\)]+\))/;

  // if want to capture just the name, use below
  // let regex_subdistrict = new RegExp("\\sต\\s?\\.(\\S+)");
  // let regex_district = new RegExp("\\sอ\\s?\\.(\\S+)");
  // let regex_province = new RegExp("\\sจ\\s?\\.(\\S+)");

  let obj = {
    name: location,
    address: "",
    note: "",
  };

  // if (regex_parentheses.test(location)) {
  //   let splitName = location.split(regex_parentheses, 2);
  //   obj.note = splitName[1];
  //   location = splitName[0];
  // }

  if (regex_subdistrict.test(location)) {
    let splitName = location.split(regex_subdistrict, 2);
    obj.name = splitName[0];
    obj.address = splitName[1];
    return obj;
  }

  if (regex_district.test(location)) {
    let splitName = location.split(regex_district, 2);
    obj.name = splitName[0];
    obj.address = splitName[1];
    return obj;
  }

  // override the address to note since just province is too short
  if (regex_province.test(location)) {
    let splitName = location.split(regex_province, 2);
    obj.name = splitName[0];
    obj.note = splitName[1];
    return obj;
  }

  // if all else failed, just return the name of location
  return obj;
};

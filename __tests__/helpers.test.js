import {
  calculateTHAQI_pm25,
  calculateTHAQI_pm100,
  getTHAQIColorCode,
  calculateUSAQI_pm25,
  calculateUSAQI_pm100,
  getUSAQIColorCode,
  clockEmoji,
  calculateMedian,
  splitLocationName,
} from "../components/helpers";

describe("calculateTHAQI_pm25", () => {
  test("returns ??? for negative values", () => {
    expect(calculateTHAQI_pm25(-1)).toBe("???");
  });

  test("calculates correctly for range 0-25", () => {
    expect(calculateTHAQI_pm25(0)).toBe(0);
    expect(calculateTHAQI_pm25(12.5)).toBe(12);
    expect(calculateTHAQI_pm25(25)).toBe(25);
  });

  test("calculates correctly for range 26-37", () => {
    expect(calculateTHAQI_pm25(26)).toBe(26);
    expect(calculateTHAQI_pm25(31)).toBe(36);
    expect(calculateTHAQI_pm25(37)).toBe(50);
  });

  test("calculates correctly for range 38-50", () => {
    expect(calculateTHAQI_pm25(38)).toBe(51);
    expect(calculateTHAQI_pm25(44)).toBe(75);
    expect(calculateTHAQI_pm25(50)).toBe(100);
  });

  test("calculates correctly for range 51-90", () => {
    expect(calculateTHAQI_pm25(51)).toBe(101);
    expect(calculateTHAQI_pm25(70)).toBe(149);
    expect(calculateTHAQI_pm25(90)).toBe(200);
  });

  test("calculates correctly for values above 90", () => {
    expect(calculateTHAQI_pm25(91)).toBe(201);
    expect(calculateTHAQI_pm25(100)).toBe(210);
  });
});

describe("calculateTHAQI_pm100", () => {
  test("returns ??? for negative values", () => {
    expect(calculateTHAQI_pm100(-1)).toBe("???");
  });

  test("calculates correctly for range 0-50", () => {
    expect(calculateTHAQI_pm100(0)).toBe(0);
    expect(calculateTHAQI_pm100(25)).toBe(12);
    expect(calculateTHAQI_pm100(50)).toBe(25);
  });

  test("calculates correctly for range 51-80", () => {
    expect(calculateTHAQI_pm100(51)).toBe(26);
    expect(calculateTHAQI_pm100(65)).toBe(37);
    expect(calculateTHAQI_pm100(80)).toBe(50);
  });

  test("calculates correctly for range 81-120", () => {
    expect(calculateTHAQI_pm100(81)).toBe(51);
    expect(calculateTHAQI_pm100(100)).toBe(74);
    expect(calculateTHAQI_pm100(120)).toBe(100);
  });

  test("calculates correctly for range 121-180", () => {
    expect(calculateTHAQI_pm100(121)).toBe(101);
    expect(calculateTHAQI_pm100(150)).toBe(149);
    expect(calculateTHAQI_pm100(180)).toBe(200);
  });

  test("calculates correctly for values above 180", () => {
    expect(calculateTHAQI_pm100(181)).toBe(201);
    expect(calculateTHAQI_pm100(200)).toBe(220);
  });
});

describe("getTHAQIColorCode", () => {
  test("returns gray for non-positive values", () => {
    expect(getTHAQIColorCode(0)).toBe("gray");
    expect(getTHAQIColorCode(-1)).toBe("gray");
  });

  test("returns blue for range 1-25", () => {
    expect(getTHAQIColorCode(1)).toBe("blue");
    expect(getTHAQIColorCode(25)).toBe("blue");
  });

  test("returns green for range 26-50", () => {
    expect(getTHAQIColorCode(26)).toBe("green");
    expect(getTHAQIColorCode(50)).toBe("green");
  });

  test("returns yellow for range 51-100", () => {
    expect(getTHAQIColorCode(51)).toBe("yellow");
    expect(getTHAQIColorCode(100)).toBe("yellow");
  });

  test("returns orange for range 101-200", () => {
    expect(getTHAQIColorCode(101)).toBe("orange");
    expect(getTHAQIColorCode(200)).toBe("orange");
  });

  test("returns red for values above 200", () => {
    expect(getTHAQIColorCode(201)).toBe("red");
    expect(getTHAQIColorCode(300)).toBe("red");
  });
});

describe("calculateUSAQI_pm25", () => {
  test("returns ??? for negative values", () => {
    expect(calculateUSAQI_pm25(-1)).toBe("???");
  });

  test("calculates correctly for range 0-12.0", () => {
    expect(calculateUSAQI_pm25(0)).toBe(0);
    expect(calculateUSAQI_pm25(6)).toBe(25);
    expect(calculateUSAQI_pm25(12.0)).toBe(50);
  });

  test("calculates correctly for range 12.1-35.4", () => {
    expect(calculateUSAQI_pm25(12.1)).toBe(51);
    expect(calculateUSAQI_pm25(23)).toBe(73);
    expect(calculateUSAQI_pm25(35.4)).toBe(100);
  });

  test("calculates correctly for range 35.5-55.4", () => {
    expect(calculateUSAQI_pm25(35.5)).toBe(101);
    expect(calculateUSAQI_pm25(45)).toBe(124);
    expect(calculateUSAQI_pm25(55.4)).toBe(150);
  });

  test("calculates correctly for range 55.5-150.4", () => {
    expect(calculateUSAQI_pm25(55.5)).toBe(151);
    expect(calculateUSAQI_pm25(100)).toBe(173);
    expect(calculateUSAQI_pm25(150.4)).toBe(200);
  });

  test("calculates correctly for range 150.5-250.4", () => {
    expect(calculateUSAQI_pm25(150.5)).toBe(201);
    expect(calculateUSAQI_pm25(200)).toBe(250);
    expect(calculateUSAQI_pm25(250.4)).toBe(300);
  });

  test("calculates correctly for range 250.5-350.4", () => {
    expect(calculateUSAQI_pm25(250.5)).toBe(301);
    expect(calculateUSAQI_pm25(300)).toBe(350);
    expect(calculateUSAQI_pm25(350.4)).toBe(400);
  });

  test("calculates correctly for range 350.5-500.4", () => {
    expect(calculateUSAQI_pm25(350.5)).toBe(401);
    expect(calculateUSAQI_pm25(425)).toBe(450);
    expect(calculateUSAQI_pm25(500.4)).toBe(500);
  });

  test("calculates correctly for values above 500.4", () => {
    expect(calculateUSAQI_pm25(500.5)).toBe(500);
    expect(calculateUSAQI_pm25(600)).toBe(599.5);
  });
});

describe("calculateUSAQI_pm100", () => {
  test("returns ??? for zero and negative values", () => {
    expect(calculateUSAQI_pm100(0)).toBe("???");
    expect(calculateUSAQI_pm100(-1)).toBe("???");
  });

  test("calculates correctly for range 1-54", () => {
    expect(calculateUSAQI_pm100(1)).toBe(0);
    expect(calculateUSAQI_pm100(27)).toBe(25);
    expect(calculateUSAQI_pm100(54)).toBe(50);
  });

  test("calculates correctly for range 55-154", () => {
    expect(calculateUSAQI_pm100(55)).toBe(51);
    expect(calculateUSAQI_pm100(100)).toBe(73);
    expect(calculateUSAQI_pm100(154)).toBe(100);
  });

  test("calculates correctly for range 155-254", () => {
    expect(calculateUSAQI_pm100(155)).toBe(101);
    expect(calculateUSAQI_pm100(200)).toBe(123);
    expect(calculateUSAQI_pm100(254)).toBe(150);
  });

  test("calculates correctly for range 255-354", () => {
    expect(calculateUSAQI_pm100(255)).toBe(151);
    expect(calculateUSAQI_pm100(300)).toBe(173);
    expect(calculateUSAQI_pm100(354)).toBe(200);
  });

  test("calculates correctly for range 355-424", () => {
    expect(calculateUSAQI_pm100(355)).toBe(201);
    expect(calculateUSAQI_pm100(400)).toBe(265);
    expect(calculateUSAQI_pm100(424)).toBe(300);
  });

  test("calculates correctly for range 425-504", () => {
    expect(calculateUSAQI_pm100(425)).toBe(301);
    expect(calculateUSAQI_pm100(450)).toBe(332);
    expect(calculateUSAQI_pm100(504)).toBe(400);
  });

  test("calculates correctly for range 505-604", () => {
    expect(calculateUSAQI_pm100(505)).toBe(401);
    expect(calculateUSAQI_pm100(550)).toBe(446);
    expect(calculateUSAQI_pm100(604)).toBe(500);
  });

  test("returns ??? for value 605 (edge case)", () => {
    expect(calculateUSAQI_pm100(605)).toBe("???");
  });

  test("calculates correctly for values above 605", () => {
    expect(calculateUSAQI_pm100(606)).toBe(502);
    expect(calculateUSAQI_pm100(700)).toBe(596);
  });
});

describe("getUSAQIColorCode", () => {
  test("returns gray for non-positive values", () => {
    expect(getUSAQIColorCode(0)).toBe("gray");
    expect(getUSAQIColorCode(-1)).toBe("gray");
  });

  test("returns green for range 1-50", () => {
    expect(getUSAQIColorCode(1)).toBe("green");
    expect(getUSAQIColorCode(50)).toBe("green");
  });

  test("returns yellow for range 51-100", () => {
    expect(getUSAQIColorCode(51)).toBe("yellow");
    expect(getUSAQIColorCode(100)).toBe("yellow");
  });

  test("returns orange for range 101-150", () => {
    expect(getUSAQIColorCode(101)).toBe("orange");
    expect(getUSAQIColorCode(150)).toBe("orange");
  });

  test("returns red for range 151-200", () => {
    expect(getUSAQIColorCode(151)).toBe("red");
    expect(getUSAQIColorCode(200)).toBe("red");
  });

  test("returns purple for range 201-300", () => {
    expect(getUSAQIColorCode(201)).toBe("purple");
    expect(getUSAQIColorCode(300)).toBe("purple");
  });

  test("returns brown for values above 300", () => {
    expect(getUSAQIColorCode(301)).toBe("brown");
    expect(getUSAQIColorCode(500)).toBe("brown");
  });
});

describe("clockEmoji", () => {
  test("returns correct clock emoji for full hours", () => {
    expect(clockEmoji("00:00")).toBe("🕛");
    expect(clockEmoji("12:00")).toBe("🕛");
    expect(clockEmoji("01:00")).toBe("🕐");
    expect(clockEmoji("13:00")).toBe("🕐");
    expect(clockEmoji("06:00")).toBe("🕕");
    expect(clockEmoji("18:00")).toBe("🕕");
    expect(clockEmoji("11:00")).toBe("🕚");
    expect(clockEmoji("23:00")).toBe("🕚");
  });

  test("returns correct half-hour emoji for minutes 16-45", () => {
    expect(clockEmoji("00:30")).toBe("🕧");
    expect(clockEmoji("12:30")).toBe("🕧");
    expect(clockEmoji("01:30")).toBe("🕜");
    expect(clockEmoji("06:30")).toBe("🕡");
    expect(clockEmoji("11:30")).toBe("🕦");
  });

  test("returns full hour emoji for minutes outside 16-45", () => {
    expect(clockEmoji("00:15")).toBe("🕛");
    expect(clockEmoji("00:46")).toBe("🕛");
    expect(clockEmoji("01:15")).toBe("🕐");
    expect(clockEmoji("01:46")).toBe("🕐");
  });
});

describe("calculateMedian", () => {
  test("calculates median for odd-length array", () => {
    expect(calculateMedian([1, 3, 2])).toBe(2);
    expect(calculateMedian([5, 1, 3, 7, 9])).toBe(5);
  });

  test("calculates median for even-length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toBe(2);
    expect(calculateMedian([10, 20, 30, 40])).toBe(25);
  });

  test("calculates median for single element", () => {
    expect(calculateMedian([42])).toBe(42);
  });

  test("works with iterables", () => {
    expect(calculateMedian(new Set([3, 1, 2]))).toBe(2);
  });
});

describe("splitLocationName", () => {
  test("splits subdistrict correctly", () => {
    const result = splitLocationName("แม่สาย ต.แม่สาย");
    expect(result.name).toBe("แม่สาย");
    expect(result.address).toBe("ต.แม่สาย");
    expect(result.note).toBe("");
  });

  test("splits district correctly", () => {
    const result = splitLocationName("แม่สาย อ.แม่สาย");
    expect(result.name).toBe("แม่สาย");
    expect(result.address).toBe("อ.แม่สาย");
    expect(result.note).toBe("");
  });

  test("splits province correctly (note field)", () => {
    const result = splitLocationName("แม่สาย จ.เชียงราย");
    expect(result.name).toBe("แม่สาย");
    expect(result.address).toBe("");
    expect(result.note).toBe("จ.เชียงราย");
  });

  test("returns original name when no match", () => {
    const result = splitLocationName("แม่สาย");
    expect(result.name).toBe("แม่สาย");
    expect(result.address).toBe("");
    expect(result.note).toBe("");
  });

  test("handles empty string", () => {
    const result = splitLocationName("");
    expect(result.name).toBe("");
    expect(result.address).toBe("");
    expect(result.note).toBe("");
  });
});
import { createMocks } from "node-mocks-http";
import helloHandler from "../pages/api/hello";
import yakkawHandler from "../pages/api/data_yakkaw";
import cmuccdcHandler from "../pages/api/data_cmuccdc";

describe("/api/hello", () => {
  test("returns 200 status and correct JSON", () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    helloHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ name: "John Doe" });
  });
});

describe("/api/data_yakkaw", () => {
  test("returns 200 status and object with response array", () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    yakkawHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toHaveProperty("status", 200);
    expect(data).toHaveProperty("response");
    expect(Array.isArray(data.response)).toBe(true);
  });
});

describe("/api/data_cmuccdc", () => {
  test("returns 200 status and object with stations array", () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    cmuccdcHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toHaveProperty("province_name");
    expect(data).toHaveProperty("stations");
    expect(Array.isArray(data.stations)).toBe(true);
  });
});
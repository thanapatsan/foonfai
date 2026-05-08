import { render, screen } from "@testing-library/react";
import {
  CommonDataBox,
  CommonDataBoxSmall,
  CommonValueBox,
  CommonValueBoxSmall,
  CommonValueBoxTHSmall,
  CommonValueBoxUSSmall,
  CommonDataWatermark,
} from "../components/common";

describe("CommonDataBox", () => {
  test("renders place and address", () => {
    render(
      <CommonDataBox
        place="Test Station"
        address="Test Address"
        timestamp="2024-01-01T12:00:00"
      />
    );
    expect(screen.getByText("Test Station")).toBeInTheDocument();
    expect(screen.getByText("Test Address")).toBeInTheDocument();
  });

  test("renders with date and time instead of timestamp", () => {
    render(
      <CommonDataBox
        place="Test Station"
        address="Test Address"
        date="2024-01-01"
        time="12:00"
      />
    );
    expect(screen.getByText("Test Station")).toBeInTheDocument();
  });

  test("renders temperature and humidity when provided", () => {
    render(
      <CommonDataBox
        place="Test Station"
        address="Test Address"
        timestamp="2024-01-01T12:00:00"
        temperature={25.5}
        humidity={60.3}
      />
    );
    expect(screen.getByText(/26℃/)).toBeInTheDocument();
    expect(screen.getByText(/60%/)).toBeInTheDocument();
  });

  test("does not render temperature/humidity when both are null", () => {
    render(
      <CommonDataBox
        place="Test Station"
        address="Test Address"
        timestamp="2024-01-01T12:00:00"
        temperature={null}
        humidity={null}
      />
    );
    expect(screen.queryByText(/🌡️/)).not.toBeInTheDocument();
  });

  test("does not render temperature/humidity when both are 0.00", () => {
    render(
      <CommonDataBox
        place="Test Station"
        address="Test Address"
        timestamp="2024-01-01T12:00:00"
        temperature="0.00"
        humidity="0.00"
      />
    );
    expect(screen.queryByText(/🌡️/)).not.toBeInTheDocument();
  });
});

describe("CommonDataBoxSmall", () => {
  test("renders place and address", () => {
    render(<CommonDataBoxSmall place="Small Station" address="Small Address" />);
    expect(screen.getByText("Small Station")).toBeInTheDocument();
    expect(screen.getByText("Small Address")).toBeInTheDocument();
  });

  test("renders place without address when address is not provided", () => {
    render(<CommonDataBoxSmall place="Small Station" />);
    expect(screen.getByText("Small Station")).toBeInTheDocument();
    expect(screen.queryByText("Small Address")).not.toBeInTheDocument();
  });
});

describe("CommonValueBox", () => {
  test("renders PM2.5 value", () => {
    render(<CommonValueBox pm25={35} />);
    expect(screen.getByText("35")).toBeInTheDocument();
  });
});

describe("CommonValueBoxSmall", () => {
  test("renders small PM2.5 value", () => {
    render(<CommonValueBoxSmall pm25={50} />);
    expect(screen.getByText("50")).toBeInTheDocument();
  });
});

describe("CommonValueBoxTHSmall", () => {
  test("renders TH AQI small value", () => {
    render(<CommonValueBoxTHSmall pm25={40} />);
    expect(screen.getByText("40")).toBeInTheDocument();
  });
});

describe("CommonValueBoxUSSmall", () => {
  test("renders US AQI small value", () => {
    render(<CommonValueBoxUSSmall pm25={75} />);
    expect(screen.getByText("75")).toBeInTheDocument();
  });
});

describe("CommonDataWatermark", () => {
  test("renders watermark with name and id", () => {
    render(<CommonDataWatermark name="TestSource" id="TST001" />);
    expect(screen.getByText("TestSource (TST001)")).toBeInTheDocument();
  });
});
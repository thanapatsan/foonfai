import useYakkaw from "./useYakkaw";
import YakkawSmallWidget from "../components/YakkawSmallWidget";

const AllYakkawSmall = () => {
  const { data, isError, isLoading } = useYakkaw();

  if (isLoading) return <>กำลังโหลดข้อมูลจาก Yakkaw</>;
  if (isError)
    return (
      <>
        <p>ไม่สามารถดึงข้อมูลได้</p>
        <a
          href="https://yakkaw.mfu.ac.th/"
          rel="noreferrer"
          className="text-blue-700 hover:text-blue-500"
        >
          <p>สามารถเช็คสภาพอากาศโดยตรงได้ที่ Yakkaw</p>
        </a>
      </>
    );

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
  let finalNodes = freshnodes.sort((a, b) => b.av6h - a.av6h);

  return (
    <>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {finalNodes &&
          finalNodes.map((station) => (
            <YakkawSmallWidget station={station} key={station.dvid} />
          ))}
      </div>
    </>
  );
};

export default AllYakkawSmall;

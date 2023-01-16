import useCmuccdc from "./useCmuccdc";
import CmuccdcSmallWidget from "./CmuccdcSmallWidget";
const AllCmuccdcSmall = () => {
  const { data, isError, isLoading } = useCmuccdc();

  if (isLoading) return <>กำลังโหลดข้อมูลจาก CMU CCDC</>;
  if (isError)
    return (
      <>
        <p>ไม่สามารถดึงข้อมูลได้</p>
        <a
          href="https://www.cmuccdc.org/"
          className="text-blue-700 hover:text-blue-500"
        >
          <p>สามารถเช็คสภาพอากาศโดยตรงได้ที่ CMU CCDC</p>
        </a>
      </>
    );

  let rawdata = data.stations;

  return (
    <>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {rawdata &&
          rawdata.map((station) => (
            <CmuccdcSmallWidget key={station.id} station={station} />
          ))}
      </div>
    </>
  );
};

export default AllCmuccdcSmall;

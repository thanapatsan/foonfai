import useCmuccdc from "./useCmuccdc";
import { calculateMedian } from "./helpers";

const CmuccdcMedianWidget = () => {
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

  let allDustValue = [];

  rawdata.forEach((element) => {
    allDustValue.push(element.pm25);
  });

  return <>
  <span>{calculateMedian(allDustValue)}</span>
  </>;
};

export default CmuccdcMedianWidget;

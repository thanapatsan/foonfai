import AllCmuccdcFull from "../components/AllCmuccdcFull";

const Cmuccdc = () => {
  return (
    <>
      <main className="container px-2 xl:px-0">
        <div className="my-4">
          <h2 className="text-3xl">CMU CCDC</h2>
          <p className="my-1">
            ข้อมูลรายชั่วโมง <wbr />
            แสดงตัวเลขค่าฝุ่น PM2.5 หน่วย{" "}
            <span>
              μg/m<sup>3</sup>
            </span>
          </p>
        </div>
        <div>
          <p>
            แหล่งข้อมูล:{" "}
            <a
              href="https://chiangrai.cmuccdc.org/"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-500"
            >
              <span>CMU CCDC</span>
            </a>
          </p>
        </div>
        <AllCmuccdcFull />
      </main>
    </>
  );
};

export default Cmuccdc;

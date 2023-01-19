import AllYakkawFull from "../components/AllYakkawFull";

const Yakkaw = () => {
  return (
    <>
      <main className="container px-2 xl:px-0">
        <div className="my-4">
          <h2 className="text-3xl">ยักษ์ขาววัดฝุ่น Yakkaw</h2>
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
              href="https://yakkaw.mfu.ac.th/"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-500"
            >
              <span>ยักษ์ขาววัดฝุ่น</span>
            </a>
          </p>
        </div>
        <AllYakkawFull />
      </main>
    </>
  );
};

export default Yakkaw;

import useYakkaw from "./useYakkaw";
import YakkawSmallWidget from "../components/YakkawSmallWidget";

const AllYakkawSmall = () => {
  const { data, isError, isLoading } = useYakkaw();

  if (isLoading) return <>Loading yakkaw</>;
  if (isError) return <>{isError}</>;

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

  return (
    <>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {freshnodes &&
          freshnodes.map((station) => (
            <YakkawSmallWidget station={station} key={station.dvid} />
          ))}
      </div>
    </>
  );
};

export default AllYakkawSmall;

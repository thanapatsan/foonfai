import useCmuccdc from "./useCmuccdc";
import CmuccdcSmallWidget from "./CmuccdcSmallWidget";
const AllCmuccdcSmall = () => {
  const { data, isError, isLoading } = useCmuccdc();

  if (isLoading) return <>loading cmuccdc</>;
  if (isError) return <>{isError}</>;

  let rawdata = data.stations;

  return (
    <>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {rawdata && rawdata.map((station) => <CmuccdcSmallWidget key={station.id} station={station}/>)}
      </div>
    </>
  );
};

export default AllCmuccdcSmall;

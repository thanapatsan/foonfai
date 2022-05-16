import useYakkaw from "./useYakkaw";
import YakkawFullWidget from "./YakkawFullWidget";

const AllYakkawFull = () => {
  const { data, isError, isLoading, mutate } = useYakkaw();

  if (isLoading) return <>Loading yakkaw</>;
  if (isError) return <>{isError}</>;



  return (
    <>
      <div className="mt-2 grid gap-1 lg:gap-2 grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.map((station) => (
            <YakkawFullWidget station={station} key={station.dvid} />
          ))}
      </div>
      <button
        onClick={() => {
          console.log(`mutate`);
          mutate();
        }}
      >
        refresh
      </button>
    </>
  );
};

export default AllYakkawFull;

import useCmuccdc from "../components/useCmuccdc";

const cmuccdc = () => {

    const { data, isError, isLoading } = useCmuccdc();

    if (isLoading) return <>isLoading</>
    if (isError) return <>{isError}</>


    return (<>
        {data && data.stations.map((station) => (<div style={{
            border: "1px solid black",
        }}>
           <>{JSON.stringify(station)}</>
           <p>{station.id}</p>
           <p>{station.dustboy_name}</p> 
           <p>{station.log_datetime}</p> 
           <p>pm25: {station.pm25}</p> 
           <p>pm10: {station.pm10}</p> 
           <p>temp: {station.temp}</p> 
           <p>humid: {station.humid}</p> 
        </div>))}
    </>


    );
}

export default cmuccdc;
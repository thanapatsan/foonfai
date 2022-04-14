import useYakkaw from "../components/useYakkaw";

const Yakkaw = () => {
    const { data, isError, isLoading } = useYakkaw();

    if (isLoading) return <>isLoading</>
    if (isError) return <>{isError}</>

    // just a bunch of data filtering
    let rawdata = data.response
    let activenodes = rawdata.filter((station) => { return station.status === "Active" && station.address.indexOf("เชียงราย") != -1 })
    let freshnodes = activenodes.filter((station) => {
        let fresh = true
        if (station.pm25 == null || station.updatetime < station.servertime) {
            fresh = false;
        }
        return fresh;
    })



    return <>

        {freshnodes && freshnodes.map((station) =>
        (<div style={{
            border: "1px solid black",
        }}>
            <>{JSON.stringify(station, null, '\t')}</>
            <p>{station.dvid}</p>
            <p>{`${station.place} ${station.address}`}</p>
            <p>{`${station.ddate} ${station.dtime}`}</p>

            <p>temp: {station.temperature}</p>
            <p>humid: {station.humidity}</p>
            <p>pm25: {station.pm25}</p>
            <p>pm100: {station.pm100}</p>
            <p>1h: {station.av1h}</p>
            <p>3h: {station.av3h}</p>
            <p>6h: {station.av6h}</p>
            <p>12h: {station.av12h}</p>
            <p>24h: {station.av24h}</p>
        </div>))}
    </>
}

export default Yakkaw;
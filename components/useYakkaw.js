import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://yakkaw.mfu.ac.th/api/yakkaw/devices"


const useYakkaw = () => {
    const { data, error } = useSWR(baseUrl, fetcher)

    
    return {
        isLoading: !error && !data,
        isError: error,
        data,
    }
}

export default useYakkaw;

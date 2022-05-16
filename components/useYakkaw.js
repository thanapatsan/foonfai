import useSWR, { useSWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "https://yakkaw.mfu.ac.th/api/yakkaw/devices";

const useYakkaw = () => {
  const { data, mutate, error } = useSWR(baseUrl, fetcher);
  console.log(`fetched new data from yakkaw at ${new Date().toLocaleString("th-TH")}`);
  return {
    isLoading: !error && !data,
    isError: error,
    data,
    mutate
  };
};

export default useYakkaw;

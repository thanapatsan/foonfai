import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "https://yakkaw.mfu.ac.th/api/yakkaw/devices";
// const baseUrl = "/api/data_yakkaw";

const useYakkaw = () => {
  const { data, error } = useSWR(baseUrl, fetcher);
  if (error) {
    console.log(`[!] error fetching yakkaw:\n`, error);
  }
  if (data) {
    console.log(
      `[.] fetched new data from yakkaw at ${new Date().toUTCString()}`
    );
  }
  return {
    isLoading: !error && !data,
    isError: error,
    data,
  };
};

export default useYakkaw;

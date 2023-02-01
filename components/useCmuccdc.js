import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "https://www-old.cmuccdc.org/api2/dustboy/ranking/1/45?v=1";
// const baseUrl = "/api/data_cmuccdc";

const useCmuccdc = () => {
  const { data, error } = useSWR(baseUrl, fetcher);

  if (error) {
    console.log(`[!] error fetching cmuccdc:\n`, error);
  }
  if (data) {
    console.log(
      `[.] fetched new data from cmuccdc at ${new Date().toUTCString()}`
    );
  }

  return {
    isLoading: !error && !data,
    isError: error,
    data,
  };
};

export default useCmuccdc;

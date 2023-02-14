import {
  CommonValueBoxUSSmall,
  CommonValueBoxTHSmall,
} from "./common";

import useYakkaw from "./useYakkaw";
import useCmuccdc from "./useCmuccdc";

const DoubleDataTest = () => {
  const {
    data: yakkaw_data,
    isError: yakkaw_Error,
    isLoading: yakkaw_Loading,
  } = useYakkaw();
  const {
    data: cmuccdc_data,
    isError: cmuccdc_Error,
    isLoading: cmuccdc_Loading,
  } = useCmuccdc();

  let yakkaw_rawdata = yakkaw_data?.response;

  let yakkaw_activenodes = yakkaw_rawdata?.filter((station) => {
    return (
      station.status === "Active" && station.address.indexOf("เชียงราย") != -1
    );
  });
  let yakkaw_freshnodes = yakkaw_activenodes?.filter((station) => {
    let fresh = true;
    if (station.pm25 == null || station.updatetime < station.servertime) {
      fresh = false;
    }
    return fresh;
  });
  let yakkaw_finalnodes = yakkaw_freshnodes;

  let cmucccdc_rawdata = cmuccdc_data;

  return (
    <div>
      <div>{JSON.stringify(yakkaw_finalnodes)}</div>
      <div>{JSON.stringify(cmucccdc_rawdata)}</div>
    </div>
  );
};

export default DoubleDataTest;

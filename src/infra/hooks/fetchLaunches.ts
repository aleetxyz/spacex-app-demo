import { useQuery } from "@apollo/client"

import { getPastLaunches, PastLaunchesQueryError } from "../queries/getPastLaunches"
import { 
  mapLaunchData,  
  LaunchDataTypeInputs, 
  LaunchDataTypeOutputs 
} from "../types/LaunchDataType"
import { Launch } from "../../types/data/Launch.dto"

type LaunchFetcherHookProps = {
  limit: number
}

const CONSTANTS: LaunchFetcherHookProps = {
  limit: 5
}

function useLaunchesFetcher ({ limit }: LaunchFetcherHookProps) {
  const { loading, error, data } = useQuery<LaunchDataTypeOutputs, LaunchDataTypeInputs>(
    getPastLaunches, { variables: { limit: limit || CONSTANTS.limit } }
  );

  if (loading) {
    return new Array<Launch>();
  }
  
  if (error) { 
    throw new PastLaunchesQueryError();
  }

  return data?.launchesPast.map(mapLaunchData);
}

export default useLaunchesFetcher
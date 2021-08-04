import { useQuery } from "@apollo/client"

import { getPastLaunches, PastLaunchesQueryError } from "../queries/getPastLaunches"

import { 
  mapLaunchData, 
  LaunchDTO, 
  LaunchDataTypeInputs, 
  LaunchDataTypeOutputs 
} from "../types/LaunchDataType"

type LaunchFetcherHookProps = {
  limit: number
}

const CONSTANTS: LaunchFetcherHookProps = {
  limit: 5
}

function useLaunchFecther ({ limit }: LaunchFetcherHookProps) {
  const { loading, error, data } = useQuery<LaunchDataTypeOutputs, LaunchDataTypeInputs>(
    getPastLaunches, { variables: { limit: limit || CONSTANTS.limit } }
  );

  if (loading) {
    return new Array<LaunchDTO>();
  }
  
  if (error) { 
    throw new PastLaunchesQueryError();
  }

  return data?.launchesPast.map(mapLaunchData);
}

export default useLaunchFecther
import { useEffect, useState } from "react";

import { Launch } from "../types/data/Launch.dto";

type LaunchesViewModelProps = {
  launches: Array<Launch>
}

type LaunchesViewModelOperations = {
  orderByRecent: Function,
  orderByOlder: Function
}

export default function useLaunchesViewModel(props: LaunchesViewModelProps): [
  Array<Launch>, LaunchesViewModelOperations
] {
  const [launches, setLaunches] = useState<Array<Launch>>([])

  useEffect(() => {
    setLaunches(props.launches)
  }, [props.launches.length])

  const operations = {
    orderByRecent: () => {
      const sorted = launches.sort((a, b) =>
        Date.parse(String(a.date)) - Date.parse(String(b.date))
      )
      setLaunches([ ...sorted ])
    },
    orderByOlder: () => {
      const sorted = launches.sort((a, b) =>
        Date.parse(String(b.date)) - Date.parse(String(a.date))
      )
      setLaunches([ ...sorted ])
    }
  }

  return [launches, operations]
}
import React, { useEffect } from "react"
import { View } from 'react-native';

import useLaunchesFecther from "../../infra/hooks/fetchLaunches";
import useLaunchesViewModel from "../../hooks/Launches.vm";

import LaunchListItem from "../../components/LaunchListItem";
import ListSorterMenu from "../../components/ListSorterMenu";

export default function LaunchPage() {
  const fetchedLaunches = useLaunchesFecther({ limit: 3 })
  const [ launchesVM, operations ] = useLaunchesViewModel({ 
    launches: fetchedLaunches 
  })

  useEffect(() => {
    operations.orderByRecent()
  }, [launchesVM.length])

  const renderListItem = () => {
    return launchesVM.map((element, idx) => (
      <LaunchListItem key={idx} {...element} />
    ))
  }

  return (
    <View style={{ flexDirection: "column-reverse" }}>
      { renderListItem() }
      <ListSorterMenu {...operations} />
    </View>
  );
};
import { LaunchDTO } from "infra/types/LaunchDataType";
import React from "react"
import { FlatList, Text, View } from 'react-native';


import useLaunchFecther from "../../infra/hooks/useLaunchFetcher";

interface DetaildProps {
  navigation: any;
  route: any;
}

export default function LaunchPage({ navigation, route }: DetaildProps) {
  const launches: Array<LaunchDTO> = [];

  try {
    const result = useLaunchFecther({ limit: 10 })
    launches.push(...result)
  } catch (error) {
    //handleError
  }

  return (
    <View>
      
    </View>
  );
};
import React from "react"
import { View, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Launch } from "../../types/data/Launch.dto";

import fallback from "../../../assets/icon.png"
import style from "./index.style"

export default function LaunchListItem(props: Launch) {
  const navigation = useNavigation();

  return (
    <View style={style["item-wrap"]}>
      <Image
        style={style["item-img"]}
        source={{ uri: props.imageLinks[0] }}
        defaultSource={fallback}
      />
      <View style={style["desc-wrap"]}>
        <Text style={style["desc-prim"]}>{`Mission: ${props.mission}`}</Text>
        <Text style={style["desc-seco"]}>{props.date}</Text>
      </View>
      <View style={style["detail-wrap"]}>
        <Text style={style["detail-link"]}
          onPress={() => navigation.navigate("LaunchDetail", props)}>
          View Details
        </Text>
      </View>
    </View>
  )
}
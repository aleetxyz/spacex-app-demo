import React from 'react';
import { FlatList, Text, Image, View } from 'react-native';

import { Launch } from '../../types/data/Launch.dto';

import fallback from "../../../assets/icon.png"
import styles from './index.style';

export default function LaunchDetail (props) {
  const launch = props.route.params as Launch

  const renderImage = ({ item }) => (
    <Image 
      style={styles["image"]} 
      source={{ uri: item }} 
      defaultSource={fallback}
    />
  )

  return (
    <View style={styles["page-wrap"]}>
      <Text style={styles["title"]}>{launch.mission}</Text>
      <FlatList
        data={launch.imageLinks.slice(0, Math.min(launch.imageLinks.length, 6))}
        style={styles["img-wrap"]}
        keyExtractor={(item, idx) => String(idx)}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={renderImage}
      />
      <Text style={styles["text-bold"]}>
        {`Shuttle name: `}
        <Text style={styles["text-info"]}>{launch.rocketName}</Text>
      </Text>
      <Text style={styles["text-bold"]}>
        {`Launched on: `}
        <Text style={styles["text-info"]}>{launch.date}</Text>
      </Text>
      <Text style={styles["text-bold"]}>
        {`Launched at: `}
        <Text style={styles["text-info"]}>{launch.site}</Text>
      </Text>
    </View>
  );
};
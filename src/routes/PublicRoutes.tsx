import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LaunchPage from '../pages/launches';

const StackRouter = createStackNavigator();

export default function PublicRoutes() {
  return (
    <StackRouter.Navigator>
      <StackRouter.Screen name="Launches" component={LaunchPage} />
    </StackRouter.Navigator>
  )
}
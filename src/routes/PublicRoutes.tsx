import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LaunchPage from '../pages/launches';
import LaunchDetail from '../pages/details';

const StackRouter = createStackNavigator();

export default function PublicRoutes() {
  return (
    <StackRouter.Navigator>
      <StackRouter.Screen name="Launches" component={LaunchPage} />
      <StackRouter.Screen name="LaunchDetail" component={LaunchDetail} />
    </StackRouter.Navigator>
  )
}
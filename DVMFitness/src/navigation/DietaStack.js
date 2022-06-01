import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutMeScreen from '../containers/AboutMeScreen';
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BicepsScreen from "../containers/BicepsScreen";
import TricepsScreen from "../containers/TricepsScreen";
import ChestScreen from "../containers/ChestScreen";
import BackScreen from "../containers/BackScreen";
import LegsScreen from "../containers/LegsScreen";
import ShouldersScreen from "../containers/ShouldersScreen";
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shoulders" component={ShouldersScreen} />
      <Stack.Screen name="Back" component={BackScreen} />
      <Stack.Screen name="Biceps" component={BicepsScreen} />
      <Stack.Screen name="Chest" component={ChestScreen} />
      <Stack.Screen name="Triceps" component={TricepsScreen} />
      <Stack.Screen name="Legs" component={LegsScreen} />
     
    </Stack.Navigator>
  );
}
export default HomeStack;
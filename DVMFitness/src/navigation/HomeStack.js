import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BicepsScreen from "../containers/BicepsScreen";
import TricepsScreen from "../containers/TricepsScreen";
import ChestScreen from "../containers/ChestScreen";
import BackScreen from "../containers/BackScreen";
import LegsScreen from "../containers/LegsScreen";
import ShouldersScreen from "../containers/ShouldersScreen";
const HomeStack = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Biceps" component={BicepsScreen} />
      <HomeStack.Screen name="Triceps" component={TricepsScreen} />
      <HomeStack.Screen name="Chest" component={ChestScreen} />
      <HomeStack.Screen name="Back" component={BackScreen} />
      <HomeStack.Screen name="Legs" component={LegsScreen} />
      <HomeStack.Screen name="Shoulders" component={ShouldersScreen} />
    </HomeStack.Navigator>
  );
}
export default HomeStack;
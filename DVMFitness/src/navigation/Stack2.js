import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import fruitNewScreen from "../containers/FruitNewScreen";
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
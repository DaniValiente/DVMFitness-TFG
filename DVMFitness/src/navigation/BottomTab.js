import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AboutMeScreen from "../containers/AboutMeScreen";
import DietScreen from "../containers/DietScreen";
import GymScreen from "../containers/GymScreen";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
     
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarStyle:{
            backgroundColor:'rgb(46.34.17)',
          },
          tabBarActiveTintColor:'rgb(129,93,39)',
          tabBarActiveBackgroundColor:'rgb(40,30,10)',
          tabBarInactiveTintColor:'rgb(255,181,118)',
          tabBarIcons: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Gym') {
                iconName = focused
                  ? 'barbell'
                  : 'barbell-outline';
              } else if (route.name === 'AboutMe') {
                iconName = focused ? 'accessibility' : 'accessibility-outline';
              }  else if (route.name === 'Diet') {
                iconName = focused ? 'nutrition' : 'nutrition-outline';
              }
              
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
          })}
        >
        <Tab.Screen options={{ headerShown: false }} name="Gym" component={GymScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Diet" component={DietScreen} />
        <Tab.Screen options={{ headerShown: false }} name="AboutMe" component={AboutMeScreen} />
      </Tab.Navigator>  
  
  );
}
export default BottomTabNavigator;
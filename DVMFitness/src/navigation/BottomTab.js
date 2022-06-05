import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AboutMeScreen from "../containers/AboutMeScreen";
import DietScreen from "../containers/DietScreen";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
     
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarStyle:{
            backgroundColor:'rgb(255,45,0)',
          },
          tabBarActiveTintColor:'rgb(129,93,39)',
          tabBarActiveBackgroundColor:'rgb(131,42,33)',
          tabBarInactiveTintColor:'rgb(255,181,118)',
          tabBarIcons: ({color, size,focused }) => {
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
          })}
        >
        <Tab.Screen options={{ headerShown: false }} name="Gym" component={HomeStack} />
        <Tab.Screen options={{ headerShown: true }} name="Diet" component={DietScreen} />
        <Tab.Screen options={{ headerShown: true, backgroundColor:'rgb(46,34,17)' }} name="AboutMe" component={AboutMeScreen} />
      </Tab.Navigator>  
  
  );
}
export default BottomTabNavigator;
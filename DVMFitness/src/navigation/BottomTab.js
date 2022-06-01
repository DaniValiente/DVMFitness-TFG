import AboutMeScreen from "../containers/AboutMeScreen";
import DietScreen from "../containers/DietScreen";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
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
        <Tab.Screen options={{ headerShown: false }} name="Gym" component={HomeStack} />
        <Tab.Screen options={{ headerShown: false }} name="Diet" component={DietScreen} />
        <Tab.Screen options={{ headerShown: false }} name="AboutMe" component={AboutMeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
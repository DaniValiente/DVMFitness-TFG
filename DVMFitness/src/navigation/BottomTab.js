import AboutMeScreen from "../containers/AboutMeScreen";
import HomeStack from "./HomeStack";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'AboutMe') {
                iconName = focused ? 'paw' : 'paw-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
          })}
        >
        <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeStack} />
        <Tab.Screen options={{ headerShown: false }} name="AboutMe" component={AboutMeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
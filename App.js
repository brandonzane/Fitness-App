import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import WorkoutScreens from "./src/Screens/WorkoutScreen";
import TimerScreen from "./src/Screens/TimerScreen";
import CalculationScreen from "./src/Screens/CalculationScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Workout":
                iconName = "dumbbell";
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              case "Timer":
                iconName = "timer-outline";
                return <Ionicons name={iconName} size={size} color={color} />;

              case "Calculation":
                iconName = "calculator-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingVertical: 5,
            height: 70,
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Workout" component={WorkoutScreens} />
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Calculation" component={CalculationScreen} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="TabNav"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

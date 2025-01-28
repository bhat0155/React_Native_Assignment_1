import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; //for the tab icons
import HomeScreen from "./Screens/HomeScreen";
import TheList from "./Screens/TheList";
import DetailPage from "./Screens/DetailPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ListStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="List" component={TheList}></Stack.Screen>
      <Stack.Screen name="DetailPage" component={DetailPage}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          headerShown={true}
          component={HomeScreen}
          options={{
            title: "Home",
            headerShown: true,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialIcons
                  name="home"
                  size={size}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="List"
          component={ListStackNavigator}
          options={{
            title: "List",

            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialIcons
                  name="list"
                  size={size}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

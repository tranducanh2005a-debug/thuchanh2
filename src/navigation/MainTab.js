import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";

function PlaceholderScreen({ title }) {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>{title}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#53B175",
        tabBarInactiveTintColor: "#8B8B8B",
        tabBarStyle: { height: 64, paddingBottom: 8, paddingTop: 8 },
        tabBarIcon: ({ color, size }) => {
          let iconName = "home-outline";

          if (route.name === "Shop") {
            iconName = "home-outline";
          } else if (route.name === "Explore") {
            iconName = "search-outline";
          } else if (route.name === "Cart") {
            iconName = "cart-outline";
          } else if (route.name === "Favourite") {
            iconName = "heart-outline";
          } else if (route.name === "Account") {
            iconName = "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen
        name="Cart"
        component={() => <PlaceholderScreen title="Cart" />}
      />
      <Tab.Screen
        name="Favourite"
        component={() => <PlaceholderScreen title="Favourite" />}
      />
      <Tab.Screen
        name="Account"
        component={() => <PlaceholderScreen title="Account" />}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  placeholderText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4B5563",
  },
});

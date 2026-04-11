import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";


// function HomeScreen() {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// }

function OnOnboardingScreen() {
  return (
    <View>
      <Text>OnOnboarding</Text>
    </View>
  );
}

function SignInScreen() {
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  );
}

function SignUpScreen() {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="OnOnboarding" component={ OnOnboardingScreen} />
      <Tab.Screen name="SignIn" component={SignInScreen} />
      <Tab.Screen name="SignUp" component={SignUpScreen} />
    </Tab.Navigator>
  );
}
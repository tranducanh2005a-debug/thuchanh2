import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/OnboardingScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LocationScreen from "../screens/LocationScreen";
import LoginScreen from "../screens/LoginScreen";
import NumberScreen from "../screens/NumberScreen";
import VerificationScreen from "../screens/VerificationScreen";
import SplashScreen from "../screens/SplashScreen";
import MainTab from "./MainTab";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import BeverageScreen from "../screens/BeverageScreen"; // 👈 thêm

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false, animationEnabled: true }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Phone" component={NumberScreen} />
      <Stack.Screen name="Verify" component={VerificationScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Beverages" component={BeverageScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
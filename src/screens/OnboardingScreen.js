import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnboardingScreen({ navigation }) {
  
  const handleStart = async () => {

    await AsyncStorage.setItem("seenOnboarding", "true");

    navigation.replace("SignIn"); // hoặc "Login"
  };

  return (
    <ImageBackground
      source={require("../../assets/images/8140 1.png")} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Image
          source={require("../../assets/images/Group.png")}
          style={styles.icon}
        />
       
        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>
        <Text style={styles.credit}>Trân Đức Anh - 23810310267</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#ddd",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  credit: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 12,
    opacity: 0.85,
  },
});
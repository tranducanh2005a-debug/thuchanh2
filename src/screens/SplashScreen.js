import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding"); 
    }, 2000); 
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Group.png")}
        style={styles.logo}
      />
      <Text style={styles.brand}>nectar</Text>
      <Text style={styles.subtitle}>online groceries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
  brand: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginTop: 4,
  },
});
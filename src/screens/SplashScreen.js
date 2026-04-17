import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding"); 
    }, 4000); 
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.brandRow}>
          <Image
            source={require("../../assets/images/Group.png")}
            style={styles.logo}
          />
          <Text style={styles.brand}>nectar</Text>
        </View>
        <Text style={styles.subtitle}>online groceriet</Text>
        <Text style={styles.credit}>Trân Đức Anh - 23810310267</Text>
      </View>
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
  content: {
    alignItems: "center",
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
    marginRight: 10,
  },
  brand: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: "none",
    marginBottom: 4,
  },
  credit: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
    opacity: 0.85,
  },
});
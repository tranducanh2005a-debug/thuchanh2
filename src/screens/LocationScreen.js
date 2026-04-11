import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function LocationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/illustration.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what’s happening in your area
      </Text>

      <View style={styles.box}>
        <Text>Your Zone</Text>
        <Text style={styles.value}>Banasree</Text>
      </View>

      <View style={styles.box}>
        <Text>Your Area</Text>
        <Text style={styles.value}>Types of your area</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "gray", marginBottom: 30 },

  box: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 20,
  },

  value: { color: "gray" },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: { color: "#fff", textAlign: "center" },
});
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function OrderSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* ICON */}
      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <Image
            source={require("../../assets/images/Group 6872.png")}
            style={styles.icon}
          />
        </View>
      </View>

      {/* TEXT */}
      <Text style={styles.title}>Your Order has been accepted</Text>

      <Text style={styles.subtitle}>
        Your items has been placed and is on{"\n"}
        it's way to being processed
      </Text>

      {/* BUTTON */}
        <TouchableOpacity
            style={styles.trackBtn}
            onPress={() => navigation.replace("Orders")}
            >
            <Text style={styles.trackText}>Track Order</Text>
        </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.replace("Main")}>
        <Text style={styles.backText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  iconContainer: {
    marginBottom: 40,
  },

  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#53B175",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },

  icon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#181725",
  },

  subtitle: {
    textAlign: "center",
    color: "#7C7C7C",
    marginBottom: 50,
    lineHeight: 20,
  },

  trackBtn: {
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 16,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  trackText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  backText: {
    color: "#181725",
    fontSize: 14,
  },
});
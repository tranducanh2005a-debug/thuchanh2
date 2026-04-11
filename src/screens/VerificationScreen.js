import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function VerificationScreen({ navigation }) {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Enter your 4-digit code</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={4}
        value={code}
        onChangeText={setCode}
      />

      <Text style={styles.resend}>Resend Code</Text>

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate("Location")}
      >
        <Text style={styles.nextText}>→</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 10,
    padding: 10,
  },

  resend: {
    marginTop: 20,
    color: "#53B175",
  },

  nextBtn: {
    position: "absolute",
    right: 20,
    bottom: 50,
    backgroundColor: "#53B175",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontSize: 24,
  },
});
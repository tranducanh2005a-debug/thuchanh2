import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function NumberScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Enter your mobile number</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.code}>+84</Text>

        <TextInput
          placeholder="Phone number"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate("Verify")}
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

  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
  },

  code: {
    marginRight: 10,
    fontSize: 16,
  },

  input: {
    flex: 1,
    padding: 10,
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
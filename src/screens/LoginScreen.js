import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Groupcarot.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        Enter your email and password
      </Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an account?{" "}
        <Text
          style={{ color: "#53B175" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "bold" },
  subtitle: { color: "gray", marginBottom: 20 },

  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 15,
  },

  forgot: {
    textAlign: "right",
    color: "gray",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: { color: "#fff", textAlign: "center" },

  logoContainer: {
    alignSelf: "center",
    width: 90,
    height: 110,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },

  footer: { textAlign: "center", marginTop: 20 },
});
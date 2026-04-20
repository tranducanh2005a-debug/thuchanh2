import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { saveData } from "../utils/storage"; // 🔥 dùng storage mã hóa

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      alert("Nhập đầy đủ thông tin");
      return;
    }

    const fakeToken = "signup123";

    const auth = {
      token: fakeToken,
      user: { username, email },
      expireAt: Date.now() + 60 * 1000, 
    };

    await saveData("auth", auth);

    navigation.replace("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Groupcarot.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        Enter your credentials to continue
      </Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.terms}>
        By continuing you agree to our{" "}
        <Text style={{ color: "#53B175" }}>Terms of Service</Text> and{" "}
        <Text style={{ color: "#53B175" }}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already have an account?{" "}
        <Text
          style={{ color: "#53B175" }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: "bold" },
  subtitle: { color: "gray", marginBottom: 20 },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  terms: { fontSize: 12, color: "gray", marginVertical: 10 },
  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
  },
  logoContainer: {
    alignSelf: "center",
    width: 90,
    height: 110,
    marginTop: 40,
    marginBottom: 40,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  footer: { textAlign: "center", marginTop: 20 },
});
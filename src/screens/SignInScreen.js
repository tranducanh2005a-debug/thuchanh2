import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("../../assets/images/MaskGroup.png")} 
        style={styles.image}
      />

      <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

      <View style={styles.phoneContainer}>
        <Image
          source={require("../../assets/images/Rectangle 11.png")}
          style={styles.flag}
        />

        <Text style={styles.code}>+880</Text>

        <TextInput
          placeholder="Phone number"
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      <Text style={styles.or}>Or connect with social media</Text>

      <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#5383EC" }]}>
        <Text style={styles.btnText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialBtn, { backgroundColor: "#3B5998" }]}>
        <Text style={styles.btnText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { 
    width: "100%", 
    height: 200, 
    resizeMode: "contain",
    marginTop: 20,
  },

  title: { fontSize: 22, fontWeight: "bold", marginVertical: 20 },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  code: { marginRight: 10 },
  input: { flex: 1, padding: 10 },
  or: { textAlign: "center", marginVertical: 20, color: "gray" },
  socialBtn: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  continueBtn: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  continueText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  btnText: { color: "#fff", textAlign: "center" },
});
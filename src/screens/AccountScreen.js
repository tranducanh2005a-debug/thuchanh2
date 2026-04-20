import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { removeData } from "../utils/storage";

export default function AccountScreen({ navigation }) {

  const handleLogout = async () => {
    try {
      await removeData("auth"); 

      await AsyncStorage.multiRemove([
      "cart",
      "orders",
    ]);
    
      navigation.replace("SignIn"); 
    } catch (error) {
      console.log(error);
    }
  };

  const menu = [
    { title: "Orders", icon: "receipt-outline", screen: "Orders" },
    { title: "My Details", icon: "person-outline" },
    { title: "Delivery Address", icon: "location-outline" },
    { title: "Payment Methods", icon: "card-outline" },
    { title: "Promo Code", icon: "pricetag-outline" },
    { title: "Notifications", icon: "notifications-outline" },
    { title: "Help", icon: "help-circle-outline" },
    { title: "About", icon: "information-circle-outline" },
  ];

  return (
    <View style={styles.container}>
      
      {/* PROFILE */}
      <View style={styles.profile}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Afsar Hossen</Text>
          <Text style={styles.email}>imshuvo97@gmail.com</Text>
        </View>

        <Ionicons name="pencil" size={18} color="#53B175" />
      </View>

      {/* MENU */}
      {menu.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.row}
          onPress={() => item.screen && navigation.navigate(item.screen)}
        >
          <Ionicons name={item.icon} size={20} color="#181725" />
          <Text style={styles.rowText}>{item.title}</Text>
          <Ionicons name="chevron-forward" size={18} color="#B3B3B3" />
        </TouchableOpacity>
      ))}

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logout} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#53B175" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  // PROFILE
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
  },

  email: {
    fontSize: 12,
    color: "#7C7C7C",
    marginTop: 4,
  },

  // MENU ITEM
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
  },

  rowText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 14,
    color: "#181725",
    fontWeight: "500",
  },

  // LOGOUT BUTTON
  logout: {
    marginTop: 40,
    backgroundColor: "#EAF7EF",
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    marginLeft: 10,
    color: "#53B175",
    fontWeight: "700",
    fontSize: 16,
  },
});
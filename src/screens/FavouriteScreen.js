import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FAVORITES = [
  { id: "1", name: "Sprite Can", unit: "325ml, Price", price: "$1.50", image: require("../../assets/images/pngfuel 12.png") },
  { id: "2", name: "Diet Coke", unit: "355ml, Price", price: "$1.99", image: require("../../assets/images/pngfuel 11.png") },
  { id: "3", name: "Apple & Grape Juice", unit: "2L, Price", price: "$15.50", image: require("../../assets/images/nuocdo.png") },
  { id: "4", name: "Coca Cola Can", unit: "325ml, Price", price: "$4.99", image: require("../../assets/images/pngfuel 13.png") },
  { id: "5", name: "Pepsi Can", unit: "330ml, Price", price: "$4.99", image: require("../../assets/images/pngfuel 14.png") },
];

export default function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourrite</Text>

      <FlatList
        data={FAVORITES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 100, // 👈 giảm lại cho đúng
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.favRow}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("ProductDetail")}
          >
            <Image
              source={item.image}
              style={styles.favImage}
              resizeMode="contain"
            />
            <View style={styles.favInfo}>
              <Text style={styles.favName}>{item.name}</Text>
              <Text style={styles.favUnit}>{item.unit}</Text>
            </View>
            <Text style={styles.favPrice}>{item.price}</Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color="#B3B3B3"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        )}
      />

      {/* Add All To Cart */}
      <View style={styles.addAllArea}>
        <TouchableOpacity
          style={styles.addAllBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 56 },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 20,
  },
  separator: { height: 1, backgroundColor: "#E2E2E2" },
  favRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  favImage: { width: 60, height: 60, marginRight: 14 },
  favInfo: { flex: 1 },
  favName: { fontSize: 14, fontWeight: "700", color: "#181725" },
  favUnit: { fontSize: 12, color: "#7C7C7C", marginTop: 4 },
  favPrice: { fontSize: 14, fontWeight: "700", color: "#181725" },
  addAllArea: {
    position: "absolute",
    bottom: 72,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
  },
  addAllBtn: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  addAllText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
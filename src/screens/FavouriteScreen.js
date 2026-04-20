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
import { addToCart } from "../utils/cart";

const FAVORITES = [
  { id: "1", title: "Sprite Can", subtitle: "325ml, Price", price: 1.5, image: require("../../assets/images/pngfuel 12.png") },
  { id: "2", title: "Diet Coke", subtitle: "355ml, Price", price: 1.99, image: require("../../assets/images/pngfuel 11.png") },
  { id: "3", title: "Apple & Grape Juice", subtitle: "2L, Price", price: 15.5, image: require("../../assets/images/nuocdo.png") },
  { id: "4", title: "Coca Cola Can", subtitle: "325ml, Price", price: 4.99, image: require("../../assets/images/pngfuel 13.png") },
  { id: "5", title: "Pepsi Can", subtitle: "330ml, Price", price: 4.99, image: require("../../assets/images/pngfuel 14.png") },
];

export default function FavoritesScreen({ navigation }) {

  const handleAddAll = async () => {
    for (let item of FAVORITES) {
      await addToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
    }

    alert("Đã thêm tất cả vào giỏ");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>

      <FlatList
        data={FAVORITES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.favRow}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("ProductDetail", { item })}
          >
            <Image source={item.image} style={styles.favImage} />

            <View style={styles.favInfo}>
              <Text style={styles.favName}>{item.title}</Text>
              <Text style={styles.favUnit}>{item.subtitle}</Text>
            </View>

            <Text style={styles.favPrice}>${item.price}</Text>

            <Ionicons name="chevron-forward" size={18} color="#B3B3B3" />
          </TouchableOpacity>
        )}
      />

      <View style={styles.addAllArea}>
        <TouchableOpacity style={styles.addAllBtn} onPress={handleAddAll}>
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 56,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 20,
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  separator: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },

  favRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  favImage: {
    width: 60,
    height: 60,
    marginRight: 14,
    resizeMode: "contain",
  },

  favInfo: {
    flex: 1,
  },

  favName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
  },

  favUnit: {
    fontSize: 12,
    color: "#7C7C7C",
    marginTop: 4,
  },

  favPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
    marginRight: 8,
  },

  addAllArea: {
    position: "absolute",
    bottom: 0,
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

  addAllText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
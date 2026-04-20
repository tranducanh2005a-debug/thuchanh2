import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { addToCart } from "../utils/cart"; 

const products = [
  {
    id: "1",
    name: "Diet Coke",
    size: "355ml",
    price: 1.99,
    image: require("../../assets/images/pngfuel 11.png"),
  },
  {
    id: "2",
    name: "Sprite Can",
    size: "325ml",
    price: 1.5,
    image: require("../../assets/images/pngfuel 12.png"),
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    size: "2L",
    price: 15.99,
    image: require("../../assets/images/nuocdo.png"),
  },
  {
    id: "4",
    name: "Orange Juice",
    size: "2L",
    price: 15.99,
    image: require("../../assets/images/nuocvanf.png"),
  },
  {
    id: "5",
    name: "Coca Cola Can",
    size: "330ml",
    price: 4.99,
    image: require("../../assets/images/pngfuel 13.png"),
  },
  {
    id: "6",
    name: "Pepsi Can",
    size: "330ml",
    price: 4.99,
    image: require("../../assets/images/pngfuel 14.png"),
  },
];

export default function BeverageScreen() {
  const navigation = useNavigation();

  const handleAdd = async (item) => {
    await addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });

    alert("Đã thêm vào giỏ");
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.size}>{item.size}</Text>

      <View style={styles.bottom}>
        <Text style={styles.price}>${item.price}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleAdd(item)}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.title}>Beverages</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* List */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },

  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 10,
  },

  name: {
    fontWeight: "700",
    fontSize: 14,
    color: "#111827",
  },

  size: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 4,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },

  price: {
    fontWeight: "700",
    fontSize: 14,
    color: "#111827",
  },

  btn: {
    backgroundColor: "#53B175",
    width: 34,
    height: 34,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
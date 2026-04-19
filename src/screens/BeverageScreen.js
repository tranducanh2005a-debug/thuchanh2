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

const products = [
  {
    id: "1",
    name: "Diet Coke",
    size: "355ml",
    price: "$1.99",
    image: require("../../assets/images/pngfuel 11.png"),
  },
  {
    id: "2",
    name: "Sprite Can",
    size: "325ml",
    price: "$1.50",
    image: require("../../assets/images/pngfuel 12.png"),
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    size: "2L",
    price: "$15.99",
    image: require("../../assets/images/nuocdo.png"),
  },
  {
    id: "4",
    name: "Orange Juice",
    size: "2L",
    price: "$15.99",
    image: require("../../assets/images/nuocvanf.png"),
  },
  {
    id: "5",
    name: "Coca Cola Can",
    size: "330ml",
    price: "$4.99",
    image: require("../../assets/images/pngfuel 13.png"),
  },
  {
    id: "6",
    name: "Pepsi Can",
    size: "330ml",
    price: "$4.99",
    image: require("../../assets/images/pngfuel 14.png"),
  },
];

export default function BeverageScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.size}>{item.size}</Text>

      <View style={styles.bottom}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.btn}>
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

        {/* spacer */}
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
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    resizeMode: "contain",
  },
  name: {
    fontWeight: "600",
    marginTop: 10,
    color: "#111827",
  },
  size: {
    color: "#6B7280",
    fontSize: 12,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  price: {
    fontWeight: "700",
    color: "#111827",
  },
  btn: {
    backgroundColor: "#22C55E",
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
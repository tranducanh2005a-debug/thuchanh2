import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const INITIAL_CART = [
  { id: "1", name: "Bell Pepper Red", unit: "1kg, Price", price: 4.99, qty: 1, image: require("../../assets/images/otchuong.png") },
  { id: "2", name: "Egg Chicken Red", unit: "4pcs, Price", price: 1.99, qty: 1, image: require("../../assets/images/pngfuel 16.png") },
  { id: "3", name: "Organic Bananas", unit: "12kg, Price", price: 3.0, qty: 1, image: require("../../assets/images/chuoi.png") },
  { id: "4", name: "Ginger", unit: "250gm, Price", price: 2.99, qty: 1, image: require("../../assets/images/pngfuel 3.png") },
];

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));

  const total = cartItems
    .reduce((sum, i) => sum + i.price * i.qty, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 100,
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.cartRow}>
            <Image
              source={item.image}
              style={styles.itemImage}
              resizeMode="contain"
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemUnit}>{item.unit}</Text>
              <View style={styles.qtyRow}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => updateQty(item.id, -1)}
                >
                  <Text style={styles.qtyBtnText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.qty}</Text>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() => updateQty(item.id, 1)}
                >
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.itemRight}>
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Ionicons name="close" size={18} color="#B3B3B3" />
              </TouchableOpacity>
              <Text style={styles.itemPrice}>
                ${(item.price * item.qty).toFixed(2)}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        }
      />
      <View style={styles.checkoutArea}>
        <TouchableOpacity style={styles.checkoutBtn} activeOpacity={0.85}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${total}</Text>
          </View>
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
  cartRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  separator: { height: 1, backgroundColor: "#E2E2E2" },
  itemImage: { width: 70, height: 70, marginRight: 14 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 14, fontWeight: "700", color: "#181725" },
  itemUnit: { fontSize: 12, color: "#7C7C7C", marginTop: 4 },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 12,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: { fontSize: 18, color: "#181725", lineHeight: 22 },
  qtyText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
    minWidth: 20,
    textAlign: "center",
  },
  itemRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 60,
    marginLeft: 8,
  },
  itemPrice: { fontSize: 14, fontWeight: "700", color: "#181725" },
  emptyText: {
    textAlign: "center",
    marginTop: 60,
    color: "#7C7C7C",
    fontSize: 14,
  },
  checkoutArea: {
    position: "absolute",
    bottom: 72, 
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
  },
  checkoutBtn: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    textAlign: "center",
  },
  totalBadge: {
    backgroundColor: "#489E67",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  totalBadgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
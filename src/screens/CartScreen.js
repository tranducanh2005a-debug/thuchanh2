import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  getCart,
  increaseQty,
  decreaseQty,
  removeItem,
} from "../utils/cart";
import { createOrder } from "../utils/orders";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const loadCart = async () => {
    const data = await getCart();
    setCartItems(data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadCart);
    return unsubscribe;
  }, [navigation]);

  const handleIncrease = async (id) => {
    await increaseQty(id);
    loadCart();
  };

  const handleDecrease = async (id) => {
    await decreaseQty(id);
    loadCart();
  };

  const handleRemove = async (id) => {
    await removeItem(id);
    loadCart();
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;

    await createOrder(cartItems, total);

    await AsyncStorage.removeItem("cart");

    setShowCheckout(false);

    await loadCart(); 

    alert("Đặt hàng thành công!");

    navigation.navigate("OrderSuccess");
  };

  const total = cartItems
    .reduce((sum, i) => sum + i.price * i.quantity, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 120,
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View style={styles.cartRow}>
            <Image source={item.image} style={styles.itemImage} />

            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  onPress={() => handleDecrease(item.id)}
                  style={styles.qtyBtn}
                >
                  <Text style={styles.qtyBtnText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qtyText}>{item.quantity}</Text>

                <TouchableOpacity
                  onPress={() => handleIncrease(item.id)}
                  style={styles.qtyBtn}
                >
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.itemRight}>
              <TouchableOpacity onPress={() => handleRemove(item.id)}>
                <Ionicons name="close" size={18} color="#B3B3B3" />
              </TouchableOpacity>

              <Text style={styles.itemPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        }
      />

      {/* BUTTON */}
      <View style={styles.checkoutArea}>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => setShowCheckout(true)}
        >
          <Text style={styles.checkoutText}>Go to Checkout</Text>

          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* POPUP */}
      {showCheckout && (
        <View style={styles.overlay}>
          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Checkout</Text>
              <TouchableOpacity onPress={() => setShowCheckout(false)}>
                <Ionicons name="close" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text>Delivery</Text>
              <Text style={styles.rowRight}>Select Method ›</Text>
            </View>

            <View style={styles.row}>
              <Text>Payment</Text>
              <Text style={styles.rowRight}>💳 ›</Text>
            </View>

            <View style={styles.row}>
              <Text>Promo Code</Text>
              <Text style={styles.rowRight}>Pick discount ›</Text>
            </View>

            <View style={styles.row}>
              <Text>Total Cost</Text>
              <Text style={styles.rowRight}>${total}</Text>
            </View>

            <Text style={styles.terms}>
              By placing an order you agree to our Terms And Conditions
            </Text>

            <TouchableOpacity style={styles.placeBtn} onPress={handlePlaceOrder}>
              <Text style={styles.placeText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    textAlign: "center",
    marginBottom: 20,
    color: "#181725",
  },

  cartRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },

  separator: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },

  itemImage: {
    width: 70,
    height: 70,
    marginRight: 14,
    resizeMode: "contain",
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
  },

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

  qtyBtnText: {
    fontSize: 18,
    color: "#181725",
  },

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
  },

  itemPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#181725",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 60,
    color: "#7C7C7C",
    fontSize: 14,
  },

  checkoutArea: {
    position: "absolute",
    bottom: 0,
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

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },

  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  sheetTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  rowRight: {
    color: "#6B7280",
  },

  terms: {
    fontSize: 12,
    color: "#6B7280",
    marginVertical: 16,
    lineHeight: 18,
  },

  placeBtn: {
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  placeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
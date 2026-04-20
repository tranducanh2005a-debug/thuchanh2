import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { getOrders } from "../utils/orders";

export default function OrderScreen() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            
            <Text style={styles.time}>{item.time}</Text>

            {item.items.map((i) => (
              <Text key={i.id}>
                • {i.name} x{i.quantity}
              </Text>
            ))}

            <Text style={styles.total}>
              Total: ${item.total}
            </Text>

          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center" }}>
            No orders yet
          </Text>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },

  time: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },

  total: {
    fontWeight: "700",
    marginTop: 10,
  },
});
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { addToCart } from "../utils/cart"; // 🔥 thêm

export default function ProductDetailScreen({ navigation, route }) {
  const { item } = route.params || {};
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => setQuantity((prev) => prev + 1);
  const removeQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  if (!item) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No product selected.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleAddToCart = async () => {
    await addToCart({
      id: item.id || item.title,
      name: item.title,
      price: item.price,
      image: item.image,
      quantity: quantity,
    });

    alert("Đã thêm vào giỏ");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.topButton}>
          <Ionicons name="chevron-back" size={24} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton}>
          <Ionicons name="share-social-outline" size={24} color="#222" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageCard}>
          {item.image && <Image source={item.image} style={styles.productImage} />}
        </View>

        <View style={styles.infoCard}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productSubtitle}>{item.subtitle}</Text>
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
              <Ionicons name="heart-outline" size={22} color="#53B175" />
            </TouchableOpacity>
          </View>

          <View style={styles.quantityRow}>
            <View style={styles.counterGroup}>
              <TouchableOpacity style={styles.counterBtn} onPress={removeQuantity}>
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{quantity}</Text>
              <TouchableOpacity style={styles.counterBtn} onPress={addQuantity}>
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>

          <View style={styles.detailSection}>
            <View style={styles.detailHeader}>
              <Text style={styles.detailTitle}>Product Detail</Text>
              <Ionicons name="chevron-down" size={20} color="#111" />
            </View>
            <Text style={styles.description}>
              Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart.
            </Text>
          </View>

          <TouchableOpacity style={styles.actionButton} onPress={handleAddToCart}>
            <Text style={styles.actionText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },

  topButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  content: { paddingBottom: 30 },

  imageCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    marginTop: 10,
    overflow: "hidden",
  },

  productImage: {
    width: "100%",
    height: 320,
    resizeMode: "cover",
  },

  infoCard: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3,
  },

  productName: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111",
    marginBottom: 6,
  },

  productSubtitle: {
    color: "#6B7280",
    marginBottom: 12,
  },

  productPrice: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  favoriteButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  counterGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  counterBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },

  counterText: {
    fontSize: 20,
    color: "#111",
  },

  counterValue: {
    minWidth: 28,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },

  detailSection: {
    marginBottom: 20,
  },

  detailHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  detailTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  description: {
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 24,
  },

  actionButton: {
    backgroundColor: "#53B175",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 10,
  },

  actionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  emptyText: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 20,
  },

  backButton: {
    backgroundColor: "#53B175",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },

  backButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { addToCart } from "../utils/cart"; // 🔥 thêm

const featuredItems = [
  {
    id: "1",
    title: "Organic Bananas",
    subtitle: "7pcs, Priceg",
    price: 4.99,
    image: require("../../assets/images/chuoi.png"),
  },
  {
    id: "2",
    title: "Red Apple",
    subtitle: "1kg, Priceg",
    price: 4.99,
    image: require("../../assets/images/pngfuel 1.png"),
  },
];

const groceryItems = [
  {
    id: "3",
    title: "Beef Bone",
    subtitle: "1kg, Priceg",
    price: 4.99,
    image: require("../../assets/images/pngfuel 4.png"),
  },
  {
    id: "4",
    title: "Broiler Chicken",
    subtitle: "1kg, Priceg",
    price: 4.99,
    image: require("../../assets/images/pngfuel 5.png"),
  },
];

export default function HomeScreen({ navigation }) {

  const handleAdd = async (item) => {
    await addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
    });

    alert("Đã thêm vào giỏ");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationRow}>
          <Ionicons name="location-sharp" size={20} color="#53B175" />
          <View style={styles.locationText}>
            <Text style={styles.locationLabel}>Home</Text>
            <Text style={styles.locationValue}>Dhaka, Banassre</Text>
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#8B8B8B" />
          <TextInput
            placeholder="Search Store"
            placeholderTextColor="#8B8B8B"
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Banner */}
        <View style={styles.bannerCard}>
          <Image
            source={require("../../assets/images/banner.png")}
            style={styles.bannerImageFull}
          />
        </View>

        {/* Exclusive */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        </View>

        <View style={styles.cardRow}>
          {featuredItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productCard}
              onPress={() => navigation.navigate("ProductDetail", { item })}
            >
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productSubtitle}>{item.subtitle}</Text>

              <View style={styles.productFooter}>
                <Text style={styles.productPrice}>${item.price}</Text>

                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => handleAdd(item)}
                >
                  <Ionicons name="add" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
        </View>

        <View style={styles.bestSellingRow}>
          <View style={styles.bestCard}>
            <Image source={require("../../assets/images/otchuong.png")} style={styles.bestImage} />
            <Text style={styles.bestTitle}>Bell Pepper</Text>
            <Text style={styles.bestSubtitle}>1kg, Priceg</Text>

            <View style={styles.bestFooter}>
              <Text style={styles.productPrice}>$4.99</Text>

              <TouchableOpacity
                style={styles.smallAddBtn}
                onPress={() =>
                  handleAdd({
                    id: "best1",
                    title: "Bell Pepper",
                    price: 4.99,
                    image: require("../../assets/images/otchuong.png"),
                  })
                }
              >
                <Ionicons name="add" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bestCard}>
            <Image source={require("../../assets/images/pngfuel 3.png")} style={styles.bestImage} />
            <Text style={styles.bestTitle}>Broccoli</Text>
            <Text style={styles.bestSubtitle}>1kg, Priceg</Text>

            <View style={styles.bestFooter}>
              <Text style={styles.productPrice}>$4.99</Text>

              <TouchableOpacity
                style={styles.smallAddBtn}
                onPress={() =>
                  handleAdd({
                    id: "best2",
                    title: "Broccoli",
                    price: 4.99,
                    image: require("../../assets/images/pngfuel 3.png"),
                  })
                }
              >
                <Ionicons name="add" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Groceries */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
        </View>

        <View style={styles.groceryRow}>
          {groceryItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.groceryCard}
              onPress={() => navigation.navigate("ProductDetail", { item })}
            >
              <Image source={item.image} style={styles.groceryImage} />
              <View style={styles.groceryInfo}>
                <Text style={styles.groceryTitle}>{item.title}</Text>
                <Text style={styles.grocerySubtitle}>{item.subtitle}</Text>
              </View>

              <TouchableOpacity onPress={() => handleAdd(item)}>
                <Ionicons name="add-circle" size={28} color="#53B175" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },

  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  locationText: { marginLeft: 10 },

  locationLabel: { fontSize: 12, color: "#8B8B8B" },

  locationValue: {
    color: "#1A1C1E",
    fontSize: 16,
    fontWeight: "700",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    borderRadius: 16,
    height: 48,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    height: "100%",
    color: "#1A1C1E",
  },

  scrollContent: { paddingBottom: 40 },

  bannerCard: {
    marginHorizontal: 20,
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,
  },

  bannerImageFull: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1C1E",
  },

  cardRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },

  productImage: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 10,
    resizeMode: "contain",
  },

  productTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1A1C1E",
  },

  productSubtitle: {
    fontSize: 12,
    color: "#8B8B8B",
    marginVertical: 6,
  },

  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1C1E",
  },

  addButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  bestSellingRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  bestCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },

  bestImage: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 12,
    resizeMode: "contain",
  },

  bestTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1A1C1E",
  },

  bestSubtitle: {
    fontSize: 12,
    color: "#8B8B8B",
    marginVertical: 6,
  },

  bestFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallAddBtn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  groceryRow: {
    marginHorizontal: 20,
    marginBottom: 30,
  },

  groceryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },

  groceryImage: {
    width: 60,
    height: 60,
    marginRight: 14,
    resizeMode: "contain",
  },

  groceryInfo: { flex: 1 },

  groceryTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1A1C1E",
  },

  grocerySubtitle: {
    fontSize: 12,
    color: "#8B8B8B",
    marginTop: 4,
  },
});
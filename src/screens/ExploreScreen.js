import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const categories = [
  {
    id: "1",
    title: "Fresh Fruits\n& Vegetable",
    image: require("../../assets/images/raucu.png"),
    icon: <Ionicons name="leaf" size={36} color="#22C55E" />,
    bgColor: "#ECFDF5",
  },
  {
    id: "2",
    title: "Cooking Oil\n& Ghee",
    image: require("../../assets/images/dauan.png"),
    icon: <MaterialCommunityIcons name="oil" size={36} color="#F59E0B" />,
    bgColor: "#FFFBEB",
  },
  {
    id: "3",
    title: "Meat & Fish",
    image: require("../../assets/images/thitca.png"),
    icon: <MaterialCommunityIcons name="fish" size={36} color="#EF4444" />,
    bgColor: "#FEE2E2",
  },
  {
    id: "4",
    title: "Bakery & Snacks",
    image: require("../../assets/images/banhmi.png"),
    icon: <MaterialCommunityIcons name="bread-slice" size={36} color="#A855F7" />,
    bgColor: "#F5F3FF",
  },
  {
    id: "5",
    title: "Dairy & Eggs",
    image: require("../../assets/images/suatrung.png"),
    icon: <Ionicons name="egg" size={36} color="#F59E0B" />,
    bgColor: "#FEF3C7",
  },
  {
    id: "6",
    title: "Beverages",
    image: require("../../assets/images/nuoc.png"),
    icon: <Ionicons name="cart" size={36} color="#0EA5E9" />,
    bgColor: "#EFF6FF",
    screen: "Search",
  },
];

export default function ExploreScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      navigation.navigate("Search", { query: search });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Find Products</Text>

      {/*SEARCH + FILTER */}
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={handleSearch}
            placeholder="Search Store"
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
            returnKeyType="search"
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={18} color="#999" />
            </TouchableOpacity>
          )}
        </View>

        {/* 👉 FILTER BUTTON */}
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => navigation.navigate("Filters")}
        >
          <Ionicons name="options-outline" size={20} color="#181725" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.card, { backgroundColor: category.bgColor }]}
              activeOpacity={0.85}
              onPress={() => {
                if (category.screen) {
                  navigation.navigate(category.screen);
                }
              }}
            >
              {category.image ? (
                <Image source={category.image} style={styles.cardImage} />
              ) : (
                <View style={styles.iconWrapper}>{category.icon}</View>
              )}

              <Text style={styles.cardTitle}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
    color: "#111827",
  },


  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 10,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 48,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: "#111827",
    fontSize: 16,
  },

  filterBtn: {
    width: 48,
    height: 48,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  scrollContent: {
    paddingBottom: 80,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    minHeight: 160,
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWrapper: {
    width: 61,
    height: 61,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  cardImage: {
    width: 61,
    height: 61,
    borderRadius: 20,
    marginBottom: 16,
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 22,
    textAlign: "center",
  },
});
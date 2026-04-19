import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CATEGORIES = ["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"];
const BRANDS = ["Individual Collection", "Cocola", "Ifad", "Kazi Farmas"];

export default function FiltersScreen({ navigation }) {
  const [selectedCategories, setSelectedCategories] = useState(["Eggs"]);
  const [selectedBrands, setSelectedBrands] = useState(["Cocola"]);

  const toggleItem = (list, setList, item) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        {CATEGORIES.map((cat) => {
          const selected = selectedCategories.includes(cat);
          return (
            <TouchableOpacity
              key={cat}
              style={styles.checkRow}
              onPress={() => toggleItem(selectedCategories, setSelectedCategories, cat)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
                {selected && <Ionicons name="checkmark" size={14} color="#fff" />}
              </View>
              <Text style={[styles.checkLabel, selected && styles.checkLabelSelected]}>{cat}</Text>
            </TouchableOpacity>
          );
        })}

        {/* Divider */}
        <View style={styles.divider} />

        {/* Brand */}
        <Text style={styles.sectionTitle}>Brand</Text>
        {BRANDS.map((brand) => {
          const selected = selectedBrands.includes(brand);
          return (
            <TouchableOpacity
              key={brand}
              style={styles.checkRow}
              onPress={() => toggleItem(selectedBrands, setSelectedBrands, brand)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
                {selected && <Ionicons name="checkmark" size={14} color="#fff" />}
              </View>
              <Text style={[styles.checkLabel, selected && styles.checkLabelSelected]}>{brand}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Apply Button */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.applyBtn}
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
<Text style={styles.applyText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 56 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: "#181725" },
  content: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 120 },
  sectionTitle: { fontSize: 18, fontWeight: "700", color: "#181725", marginBottom: 16 },
  checkRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  checkboxSelected: { backgroundColor: "#53B175", borderColor: "#53B175" },
  checkLabel: { fontSize: 15, color: "#7C7C7C" },
  checkLabelSelected: { color: "#53B175", fontWeight: "600" },
  divider: { height: 1, backgroundColor: "#E2E2E2", marginVertical: 20 },
  bottomArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
  },
  applyBtn: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  applyText: { color: "#fff", fontSize: 18, fontWeight: "700" },
});
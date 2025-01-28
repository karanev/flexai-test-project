import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NutrientCard from "./NutrientCard";

const NutrientsSection = ({header, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{header}</Text>
        {value && <Text style={styles.total}>{value}</Text>}
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.nutrientCardContainer}>
          <NutrientCard nutritionType="Proteins" nutritionValue="13g" />
        </View>
        <View style={styles.nutrientCardContainer}>
          <NutrientCard nutritionType="Carbs" nutritionValue="35g" />
        </View>
        <View style={styles.nutrientCardContainer}>
          <NutrientCard nutritionType="Fats" nutritionValue="12g" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  total: {
    fontSize: 14,
    color: "#888",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between'
  },
  nutrientCardContainer: {
    marginVertical: 5,
  },
});

export default NutrientsSection;

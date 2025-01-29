import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NutrientCard from "./NutrientCard";

const NutrientsSection = ({ header, totalValue, nutrients }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{header}</Text>
        {totalValue !== "" && <Text style={styles.totalValue}>{totalValue}</Text>}
      </View>
      <View style={styles.cardsContainer}>
        {nutrients.map((nutrient, index) => (
          <View style={styles.nutrientCardContainer} key={index}>
            <NutrientCard
              nutritionType={nutrient.nutritionType}
              nutritionValue={nutrient.nutritionValue}
            />
          </View>
        ))}
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
    fontSize: 14,
    lineHeight: 16,
    color: "#141414",
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 14,
    lineHeight: 18,
    color: "#565656",
    fontWeight: '400',
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  nutrientCardContainer: {
    marginVertical: 5,
    width: "48%",
  },
});

export default NutrientsSection;

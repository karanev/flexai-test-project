import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BarChart from "./BarChart";
import mockWeeklyMealNutritionData from "../data/mockWeeklyMealNutritionData";

const WeeklyMealNutrition = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Meal Nutrition</Text>
      <BarChart data={mockWeeklyMealNutritionData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    border: "1px solid #EDEDED",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
    color: "#141414",
    marginBottom: 20,
  },
});

export default WeeklyMealNutrition;

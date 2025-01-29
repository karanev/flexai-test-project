import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeeklyMealNutrition = () => {
  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [10, 20, 30, 40, 25, 35, 45],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Meal Nutrition</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

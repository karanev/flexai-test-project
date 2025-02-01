import React from "react";
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import NutrientsSection from "../components/NutrientsSection";
import mockNutrientsData from "../data/mockNutrientsData";
import WeeklyMealNutrition from "../components/WeeklyMealNutrition";
import Button from "../components/Button";
import FoodHeader from "../components/FoodHeader";

const NutritionResultsScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView style={styles.container}>
        <FoodHeader />
        <View style={styles.nutrientsSection}>
          {mockNutrientsData.map((nutrientData, index) => (
            <NutrientsSection
              key={index}
              header={nutrientData.header}
              totalValue={nutrientData.totalValue}
              nutrients={nutrientData.nutrients}
            />
          ))}
          <WeeklyMealNutrition />
          <View style={styles.saveDailyLogButtonContainer}>
            <Button
              text="Save to Daily Log"
              onPress={() => router.push("/Streaks")}
            />
          </View>
          <View style={styles.premiumUpgradeContainer}>
            <Text style={styles.moreInsightsText}>Want more insights? </Text>
            <Text style={styles.premiumUpgradeText}>Upgrade to Premium</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  saveDailyLogButtonContainer: {
    marginTop: 20,
    marginBottom: 12,
  },
  premiumUpgradeContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  premiumUpgradeText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#141414",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  moreInsightsText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    color: "#565656",
  },
  nutrientsSection: {
    margin: 20,
  },
  pizzaImage: {
    width: "100%",
    height: 200,
  },
});

export default NutritionResultsScreen;

import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import NutrientsSection from '../components/NutrientsSection';
import mockNutrientsData from '../data/mockNutrientsData';
import WeeklyMealNutrition from '../components/WeeklyMealNutrition';

const NutritionResultsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }} // Replace with your actual image path
        style={styles.pizzaImage}
      />
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nutrientsSection: {
    margin: 20,
  },
  pizzaImage: {
    width: '100%',
    height: 200,
  },
});

export default NutritionResultsScreen;
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import NutrientCard from '../components/NutrientCard';
import NutrientsSection from '../components/NutrientsSection';

const NutritionResultsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }} // Replace with your actual image path
        style={styles.pizzaImage}
      />
      <View style={styles.nutrientsSection}>
        <NutrientsSection header="Nutritional Overview" />
        <NutrientsSection header="Macronutrients" value="Total: 60g" />
        <NutrientsSection header="Micronutrients" value="Total: 30%" />
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
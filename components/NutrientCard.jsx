import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const NutrientCard = ({nutritionType, nutritionValue}) => {
  return (
    <View style={styles.card}>
      <Feather name="coffee" size={24} color="#8E64FF" style={styles.icon} /> 
      <View style={styles.textContainer}>
        <Text style={styles.title}>{nutritionType}</Text>
        <Text style={styles.value}>{nutritionValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width: 190,
    height: 70,
    backgroundColor: '#F2F2F2', 
  },
  icon: {
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
  },
  title: {
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default NutrientCard;
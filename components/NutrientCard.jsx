import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const NutrientCard = ({nutritionType, nutritionValue}) => {

  return (
    <View style={styles.card}>
      <Feather name="coffee" size={32} color="#8E64FF" style={styles.icon} /> 
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
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 12,
    height: 54,
    backgroundColor: '#F6F6F6', 
  },
  icon: {
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#565656'
  },
  value: {
    marginTop: 2,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#141414'
  },
});

export default NutrientCard;
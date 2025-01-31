import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const FoodHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/pizza.png")}
        style={styles.pizzaImage}
      />
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0)",
          "rgba(255, 255, 255, 0.68)",
          "rgba(255, 255, 255, 1)",
        ]}
        style={styles.gradientContainer}
      >
        <View style={styles.labelContainer}>
          <View style={styles.foodTextContainer}>
            <Text style={styles.foodText}>Food</Text>
          </View>
          <Text style={styles.pizzaName}>Pepperoni Pizza</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  pizzaImage: {
    width: "100%",
  },
  foodTextContainer: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 14,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  foodText: {
    color: "#141414",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 10,
  },
  gradientContainer: {
    position: "absolute",
    height: 108,
    width: "100%",
    bottom: 0,
  },
  labelContainer: {
    position: "absolute",
    bottom: 16,
    left: 20,
  },
  pizzaName: {
    color: "#141414",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
  },
});

export default FoodHeader;

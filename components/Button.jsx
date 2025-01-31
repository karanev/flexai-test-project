import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <LinearGradient
      colors={["#ffbf62", "#ffa726"]}
      style={styles.gradientContainer}
    >
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 10,
    border: '1px solid #e29523',
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#141414",
  },
});

export default Button;

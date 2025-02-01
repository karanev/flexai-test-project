import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Or your preferred icon library
import BronzeMilestone from "../assets/images/bronzeMilestone.svg";

const StreakBadge = ({ streak }) => {
  return (
    <View style={styles.badge}>
      <View style={styles.iconContainer}>
        <BronzeMilestone />
      </View>
      <Text style={styles.text}>{streak}-day streak achiever</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5E5D3",
    borderRadius: 16,
    paddingVertical: 4,
    paddingLeft: 6,
    paddingRight: 12,
    height: 28,
    top: -14,
  },
  iconContainer: {
    backgroundColor: "#FFC107", // Gold icon background
    borderRadius: 15, // Make it circular
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  text: {
    color: "#141414",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
  },
});

export default StreakBadge;

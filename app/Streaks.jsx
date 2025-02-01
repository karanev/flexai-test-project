import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Streaks5 from "../assets/images/streaks5.svg";
import Calendar from "../components/Calendar";
import StreakBadge from "../components/StreakBadge";

const StreaksScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.streakInfoContainer}>
        <Streaks5 style={styles.streaks5} />
        <Text style={styles.onStreakText}>You're on a</Text>
        <Text style={styles.noOfDaysText}>5 days Streak!</Text>
        <Text style={styles.motivationalText}>Keep it up!</Text>
        <Calendar currentStreak={4} />
        <StreakBadge streak={5} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  streakInfoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  streaks5: {
    height: 120,
  },
  onStreakText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#565656",
  },
  noOfDaysText: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "600",
    color: "#141414",
  },
  motivationalText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#565656",
    marginTop: 2,
    marginBottom: 24,
  },
});

export default StreaksScreen;

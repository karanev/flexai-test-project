import React from "react";
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from "react-native";
import Streaks5 from "../assets/images/streaks5.svg";
import Calendar from "../components/Calendar";
import StreakBadge from "../components/StreakBadge";

const StreaksScreen = () => {
  return (
    <SafeAreaView style={styles.parentContainer}>
    <ScrollView style={styles.container}>
      <View style={styles.streakInfoContainer}>
        <View style={styles.streakIconContainer}>
          <Streaks5 style={styles.streaks5} />
        </View>
        <Text style={styles.onStreakText}>You're on a</Text>
        <Text style={styles.noOfDaysText}>5 days Streak!</Text>
        <Text style={styles.motivationalText}>Keep it up!</Text>
        <Calendar currentStreak={5} />
        <StreakBadge streak={5} />
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
    backgroundColor: "#ffffff",
    padding: 20,
  },
  streakInfoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  streakIconContainer: {
    // iOS Shadow Properties
    shadowColor: "rgba(255, 167, 38, 0.3)", // Shadow color
    shadowOffset: { width: 0, height: 8 }, // Shadow offset (x, y)
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 20, // Shadow blur radius
    // Android Shadow Property (elevation)
    elevation: 8, // Android equivalent for shadow
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

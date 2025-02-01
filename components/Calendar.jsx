import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import StreakDate from "../assets/images/streakDate.svg";

const Calendar = ({ currentStreak }) => {
  const [currentDate, setCurrentDate] = useState(moment());

  const startOfMonth = currentDate.clone().startOf("month");
  const firstDayWeek = startOfMonth.day();

  // previous dates from today
  const daysArray = [];
  for (let i = 1; i <= firstDayWeek - 1; i++) {
    const prevDate = currentDate
      .clone()
      .subtract(firstDayWeek - i, "days")
      .date();
    const isStreakDay = firstDayWeek - i <= currentStreak;
    if (isStreakDay) {
      daysArray.push(
        <View key={prevDate} style={styles.day}>
          <StreakDate style={styles.streakDay} />
        </View>
      );
    } else {
      daysArray.push(
        <View key={prevDate} style={styles.day}>
          <Text style={styles.prevDate}>{prevDate}</Text>
        </View>
      );
    }
  }

  // dates from today
  for (let i = 0; i <= 14 - firstDayWeek; i++) {
    const date = currentDate.clone().add(i, "days").date();
    daysArray.push(
      <View key={date} style={[styles.day, i === 0 && styles.todayDate]}>
        <Text style={styles.futureDate}>{date}</Text>
      </View>
    );
  }

  const splitIndex = 7;
  const firstWeek = daysArray.slice(0, splitIndex);
  const secondWeek = daysArray.slice(splitIndex);

  return (
    <View style={styles.calendar}>
      <View style={styles.week}>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <View style={styles.day} key={i}>
            <Text style={styles.dayLabel}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.days}>
        {firstWeek.map((item, index) => (
          <View key={index}>{item}</View>
        ))}
      </View>
      <View style={styles.days}>
        {secondWeek.map((item, index) => (
          <View key={index}>{item}</View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingBottom: 32,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayLabel: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "400",
    color: "#565656",
  },
  futureDate: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400",
    color: "#141414",
  },
  prevDate: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400",
    color: "#D9D9D9",
  },
  todayDate: {
    borderWidth: 1,
    borderColor: "#EDEDED",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  day: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  streakDay: {},
});

export default Calendar;

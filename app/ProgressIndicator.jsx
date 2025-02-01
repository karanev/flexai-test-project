import { useRouter } from "expo-router";
import React, { useState, useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View, Text, Image } from "react-native";
import * as Progress from "react-native-progress";
import NutrakLogo from "../assets/images/nutrak_logo.svg";

const ProgressIndicatorScreen = () => {
  const [progress, setProgress] = useState(0);
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => prevProgress + 0.01);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Rotate animation
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  const router = useRouter();
  useEffect(() => {
    if (progress >= 1) {
      router.replace("/NutritionResults");
      setProgress(0);
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      <NutrakLogo style={styles.logo} />
      <View style={styles.circularProgress}>
        <Animated.Image
          style={{
            transform: [
              {
                rotate: rotateValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          }}
          source={require("../assets/images/loader.png")}
        />
      </View>
      <Text style={styles.progressText}>Scanning in progress...</Text>
      <Progress.Bar
        progress={progress}
        width={304}
        color="#48BB78"
        unfilledColor="#E9ECEF"
        borderWidth={0}
        borderRadius={5}
        style={styles.progressBar}
      />
      <Text style={styles.percentageText}>{Math.round(progress * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  circularProgress: {
    marginTop: 80,
  },
  progressText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "#565656",
    marginTop: 48,
  },
  progressBar: {
    marginTop: 12,
  },
  percentageText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
    color: "#141414",
    marginTop: 14,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
  },
  logo: {
    width: 98,
    height: 32,
    marginTop: 80,
  },
});

export default ProgressIndicatorScreen;

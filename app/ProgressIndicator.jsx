import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Progress from "react-native-progress";

const ProgressIndicatorScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 1) {
        setProgress((prevProgress) => prevProgress + 0.01); // Simulate progress increase
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Update progress every 100ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Indicator</Text>

      <View style={styles.circularProgress}>
        <Progress.Circle
          size={100}
          progress={progress}
          borderWidth={0}
          color="#48BB78"
          unfilledColor="#E9ECEF"
          thickness={5}
        />
      </View>

      <Text style={styles.progressText}>Scanning in progress...</Text>

      <Progress.Bar
        progress={progress}
        width={200}
        color="#48BB78"
        unfilledColor="#E9ECEF"
        borderWidth={0}
        borderRadius={5}
      />

      <Text style={styles.percentageText}>{Math.round(progress * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  circularProgress: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
  },
  logo: {
    width: 100,
    height: 30,
  },
});

export default ProgressIndicatorScreen;

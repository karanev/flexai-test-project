import { useRouter } from "expo-router";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import ScanIcon from "../assets/images/scan.svg";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/pizza.png")}
      style={styles.screenContainer}
    >
      <ScanFoodPrompt />
      <ScanOptions />
    </ImageBackground>
  );
}

const ScanFoodPrompt = () => {
  return (
    <View style={styles.scanPromptContainer}>
      <ScanIcon style={styles.scanImage} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Scan Your Food</Text>
        <Text style={styles.subtitle}>
          Ensure your food is well-lit and in focus for the most accurate scan.
        </Text>
      </View>
    </View>
  );
};

const ScanOptions = () => {
  const router = useRouter();
  const handleFoodScan = () => {
    router.push("/ProgressIndicator");
  };

  return (
    <View style={styles.scanOptionsContainer}>
      <Button text="Camera" onPress={handleFoodScan} style={styles.scanOptionButton} />
      <Button text="Gallery" onPress={handleFoodScan} style={styles.scanOptionButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  scanOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 20,
  },
  scanOptionButton: {
    width: "45%",
  },
  scanPromptContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
    width: "80%",
    flexDirection: "row",
  },
  scanImage: {
    width: 26,
    height: 24,
  },
  innerContainer: {
    paddingHorizontal: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "400",
    flexWrap: "wrap",
    flexShrink: 1,
  },
});

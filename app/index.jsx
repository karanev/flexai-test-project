import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.screenContainer}>
      <ScanFoodPrompt />
      <ScanOptions />
    </View>
  );
}

const ScanFoodPrompt = () => {
  return (
    <View style={styles.scanPromptContainer}>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={styles.scanImage}
      />
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

  return (
    <View style={styles.scanOptionsContainer}>
      <TouchableOpacity
        style={styles.scanOptionButton}
        onPress={() => router.push("/ProgressIndicator")}
      >
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.scanOptionButton}
        onPress={() => router.push("/ProgressIndicator")}
      >
        <Text>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
  },
  scanOptionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  scanOptionButton: {
    marginHorizontal: 10,
    backgroundColor: "orange",
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  scanPromptContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
    borderRadius: 10,
    padding: 15,
    marginVertical: 40,
    width: "80%",
    flexDirection: "row",
  },
  scanImage: {
    width: 40,
    height: 40,
  },
  innerContainer: {
    marginLeft: 10,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
  },
});

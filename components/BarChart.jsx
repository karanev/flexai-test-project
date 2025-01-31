import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const BarChart = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.labels.map((label, index) => (
        <Bar key={index} label={label} data={data.values[index]} />
      ))}
    </View>
  )
};

const Bar = ({ label, data }) => {
  return (
    <View style={styles.barContainer}>
      <LinearGradient colors={['#e29523', '#5ca660']} style={[styles.bar, {height: data}]}></LinearGradient>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  barContainer: {
    justifyContent: "flex-end",
  },
  bar: {
    width: 8,
    backgroundColor: "blue",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  label: {
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 12,
    color: '#7b7b7b'
  }
});

export default BarChart;

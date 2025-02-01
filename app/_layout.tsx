import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="ProgressIndicator" options={{ headerShown: false }} />
      <Stack.Screen name="NutritionResults" options={{ headerShown: false }} />
      <Stack.Screen name="Streaks" options={{ headerShown: false }} />
    </Stack>
  );
}

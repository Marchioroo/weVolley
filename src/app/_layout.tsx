import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {} from "../styles/global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <Stack screenOptions={{ headerShown: false }}>
          {/* Tela de login */}
          <Stack.Screen name="login" />

          {/* Grupo de tabs */}
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // ou a cor global do app
  },
});

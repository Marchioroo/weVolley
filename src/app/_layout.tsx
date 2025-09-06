import { Stack } from "expo-router";
import {} from "../styles/global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tela de login */}
      <Stack.Screen name="login" />

      {/* Grupo de tabs */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

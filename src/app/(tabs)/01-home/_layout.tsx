// app/(tabs)/01-home/_layout.tsx
import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade", // 👈 transição suave entre telas desta aba
        // animationDuration não é exposto aqui; a duração é a padrão do RN
        // Caso precise, dá para ajustar por-navegação usando Reanimated/gestures.
      }}
    />
  );
}

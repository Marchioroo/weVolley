import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {} from "../styles/global.css";

export default function RootLayout() {
  // 👇 Carregando a fonte custom
  const [fontsLoaded] = useFonts({
    CircularStd: require("../../assets/fonts/circular-std-medium-500.ttf"),
    // você pode adicionar outras variações aqui, ex:
    // CircularStdBold: require("../assets/fonts/circular-std-bold-700.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#ff2a66" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
          translucent={false}
        />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen name="login" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "CircularStd",
  },
});

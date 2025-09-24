import Header from "@/components/Molecules/Header";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function AnalyticsStackLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, paddingTop: 60 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        />
      </View>
    </View>
  );
}

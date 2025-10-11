import AppHeader from "@/components/Molecules/AppHeader";
import { Stack } from "expo-router";

const OVERLAY_HEADER = true;

export default function GameCardLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => (
          <AppHeader
            options={{
              title: "Detalhes do Grupo",
              headerTitle: "Detalhes do Grupo",
            }}
            navigation={props.navigation}
            isOverlay={false}
            arrowColor="white"
            titleColor="white"
            style={{ backgroundColor: "transparent" }}
          />
        ),

        headerTransparent: OVERLAY_HEADER,
        headerStyle: {
          backgroundColor: OVERLAY_HEADER ? "transparent" : "#121317",
        },
        headerShadowVisible: !OVERLAY_HEADER,
        contentStyle: { backgroundColor: "#fff" },
        animation: "fade",
      }}
    />
  );
}

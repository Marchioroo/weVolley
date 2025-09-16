import AppHeader from "@/components/Molecules/AppHeader";
import { Stack } from "expo-router";

const OVERLAY_HEADER = true;

export default function ProfileStackLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => (
          <AppHeader
            {...props}
            options={{ ...props.options, title: "Perfil" }}
            isOverlay={OVERLAY_HEADER}
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

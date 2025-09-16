// components/Molecules/AppHeader.tsx
import { Text, TouchableOpacity, View } from "react-native";
import ArrowLeft from "../../../assets/icons/ArrowLeft.svg";

export default function AppHeader({ options, navigation, isOverlay }: any) {
  const title = options.title ?? options.headerTitle ?? "";

  return (
    <View
      style={{
        height: isOverlay ? 88 : 56,
        backgroundColor: isOverlay ? "transparent" : "#121317",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: isOverlay ? 40 : 0,
      }}
    >
      {navigation.canGoBack() && (
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{ marginRight: 12, padding: 8 }}
        >
          <ArrowLeft color={"white"} />
        </TouchableOpacity>
      )}
      <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
        {title}
      </Text>
      {options.headerRight?.({ canGoBack: navigation.canGoBack() })}
    </View>
  );
}

import { Image } from "expo-image";
import { View } from "react-native";

export function GroupBackgroundImage({
  backGroundImage,
}: {
  backGroundImage: string;
}) {
  return (
    <View className="w-full h-220 bg-red-300 z-999">
      <Image
        source={{ uri: backGroundImage }}
        style={{ width: "100%", height: 200 }}
      />
    </View>
  );
}

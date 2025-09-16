import { Image } from "expo-image";
import { View } from "react-native";
type ProfileImageProps = {
  profileImage: string;
  backGroundImage: string;
};

export default function ProfileImage({
  profileImage,
  backGroundImage,
}: ProfileImageProps) {
  return (
    <View className="w-full h-60 bg-red-300 relative z-999">
      <Image
        source={{ uri: backGroundImage }}
        style={{ width: "100%", height: 220 }}
      />

      <View className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-red-400 rounded-full border-4 border-white overflow-hidden z-50">
        <Image
          source={{ uri: profileImage }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </View>
  );
}

import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Localizacao from "../../../assets/icons/Localizacao.svg";

export default function Header() {
  const insets = useSafeAreaInsets();
  const profileImage = "https://i.pravatar.cc/150?img=5";

  return (
    <View
      className="w-full flex-row justify-between items-center px-8 bg-white  "
      style={{
        position: "absolute",
        top: 0,
        height: 30 + insets.top,

        zIndex: 1000,
      }}
    >
      <View className=" relative flex flex-row items-center justify-center w-full gap-2">
        <View className="flex flex-col items-center justify-center w-full">
          <Text className="font-semibold text-xs text-gray-500">
            Localização atual
          </Text>
          <View className="flex flex-row items-center justify-center gap-1 w-full">
            <Localizacao width={12} height={12} />
            <Text className="font-semibold">Bauru, São Paulo</Text>
          </View>
        </View>
        <View className="w-12 h-12 rounded-full bg-[#B9B6FF] border border-white overflow-hidden absolute right-0">
          <Image
            source={{ uri: profileImage }}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        </View>
      </View>
    </View>
  );
}

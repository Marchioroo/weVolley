import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function HomeHeader() {
  const profileImage = "https://i.pravatar.cc/150?img=5";

  return (
    <View className="w-full flex-row items-center justify-between px-4">
      <View className="flex-row items-center">
        <View className="w-16 h-16 rounded-full bg-[#B9B6FF] border-2 border-white overflow-hidden relative">
          <Image
            source={{ uri: profileImage }}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
          <View className="w-3 h-3 rounded-full bg-orange-500 absolute -bottom-0.5 -right-0.5 border-2 border-white" />
        </View>

        <View className="ml-3">
          <Text className="text-gray-400">Bem vindo Maria!</Text>
          <Text className="text-slate-900 font-extrabold text-lg">
            Sexta, 11 de Setembro
          </Text>
        </View>
      </View>

      <View className="w-14 h-14 rounded-full border border-gray-300 items-center justify-center">
        <Ionicons name="calendar-outline" size={22} color="#FF5A1F" />
      </View>
    </View>
  );
}

import { Text, TouchableOpacity, View } from "react-native";
import ArrowRight from "../../../assets/icons/ArrowRight.svg";

type ButtonProps = {
  title: string;
  onPress?: () => void;
};
export default function ButtonTailwind({ title, onPress }: ButtonProps) {
  return (
    <View className="relative">
      <TouchableOpacity
        className="bg-[#5669FF] px-4 py-5 rounded-2xl items-center justify-center"
        onPress={onPress}
      >
        {/* Texto centralizado */}
        <Text className="text-white text-center font-bold text-2xl">
          {title}
        </Text>

        {/* Ícone posicionado à direita */}
        <View className="absolute right-4 top-1/2 bg-[#3D56F0] p-3 rounded-full">
          <ArrowRight width={16} height={16} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

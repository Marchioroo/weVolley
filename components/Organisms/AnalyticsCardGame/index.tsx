import { Image } from "expo-image";
import { Text, View } from "react-native";

type GameCard = {
  id: string;
  title: string;
  nextMatchDate: string;
  duration: string;
  participants: number;
  imageUrl: string;
};

export default function AnalyticsCardGame({
  title,
  nextMatchDate,
  duration,
  participants,
  imageUrl,
}: GameCard) {
  const avatars = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3",
    "https://i.pravatar.cc/100?img=4",
    "https://i.pravatar.cc/100?img=5",
    "https://i.pravatar.cc/100?img=6",
  ];

  return (
    <View className="w-full h-40 bg-[#FCEDE8] rounded-3xl p-0.5 mb-4">
      <View className="flex-row w-full h-full rounded-3xl overflow-hidden bg-white">
        <View className="w-5/12 h-full">
          <Image
            source={{ uri: imageUrl }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>

        <View className="flex-1 p-2 justify-between">
          <Text
            className="text-lg font-bold text-gray-900"
            style={{ fontFamily: "CircularStd" }}
            numberOfLines={1}
          >
            {title}
          </Text>

          <View className="flex-row items-center h-10 mb-2">
            {avatars.map((uri, index) => (
              <View
                key={index}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -ml-2"
                style={index === 0 ? { marginLeft: 0 } : {}}
              >
                <Image
                  source={{ uri }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ))}

            {participants > avatars.length && (
              <View className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center border-2 border-white -ml-2">
                <Text className="text-xs text-gray-700 font-semibold">
                  +{participants - avatars.length}
                </Text>
              </View>
            )}
          </View>

          <View className="gap-1 bg-[#FCEDE8] h-16 py-2 pl-2 rounded-2xl">
            <Text
              className="text-sm font-semibold text-[#F97316]"
              style={{ fontFamily: "CircularStd" }}
            >
              Próximo jogo: <Text className="text-sm">{nextMatchDate}</Text>
            </Text>
            <Text
              className="text-sm text-gray-600"
              style={{ fontFamily: "CircularStd" }}
            >
              • {duration} de jogo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

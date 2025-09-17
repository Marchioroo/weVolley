import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

// Dados mockados
const MOCK_USERS = [
  {
    id: "1",
    name: "Alfred Owen",
    avatarUrl: "https://i.pravatar.cc/100?img=12",
    calories: 40,
    steps: "2.1",
  },
  {
    id: "2",
    name: "Linh Nguyen",
    avatarUrl: "https://i.pravatar.cc/100?img=32",
    calories: 32,
    steps: "4.1",
  },
  {
    id: "3",
    name: "Maria Silva",
    avatarUrl: "https://i.pravatar.cc/100?img=47",
    calories: 27,
    steps: "3.2",
  },
];

export default function HomeActivityUsersList() {
  return (
    <FlatList
      data={MOCK_USERS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-full bg-white border border-gray-200 rounded-full px-4 py-3 flex-row items-center justify-between mb-3"
        >
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 bg-gray-100">
              <Image
                source={{ uri: item.avatarUrl }}
                className="w-full h-full"
              />
            </View>

            <View>
              <Text
                className="text-base text-black"
                style={{ fontFamily: "CircularStd", fontWeight: "700" }}
              >
                {item.name}
              </Text>
              <Text
                className="text-sm text-gray-500"
                style={{ fontFamily: "CircularStd" }}
              >
                {item.calories} Vitórias
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-2">
            <Text
              className="text-sm"
              style={{
                fontFamily: "CircularStd",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              <Text className="text-lg">{item.steps}</Text> V / D
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

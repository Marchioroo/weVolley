import { GroupBackgroundImage } from "@/components/Molecules/GroupBackgroundImage";
import {
  useGetGroupDataById,
  useGroupSelected,
  useLoadingDetails,
} from "@/stores/useGroupStore";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function PageCardGame() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const loadingDetails = useLoadingDetails();
  const getGroupDataById = useGetGroupDataById();
  const groupSelected = useGroupSelected();

  useEffect(() => {
    if (id) getGroupDataById(id);
  }, [id]);

  if (loadingDetails) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#000" />
        <Text className="mt-4 text-gray-600">
          Carregando informação do grupo...
        </Text>
      </View>
    );
  }

  if (!groupSelected || groupSelected.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-gray-600 text-base">Grupo não encontrado 😕</Text>
      </View>
    );
  }

  const group = groupSelected[0];

  return (
    <View className="flex-1 bg-white relative">
      <View>
        <GroupBackgroundImage backGroundImage={group.imageUrl} />
      </View>

      <View className=" p-6 bg-white/90 rounded-t-3xl">
        <Text className="text-2xl font-bold mb-2">{group.title}</Text>
        <Text className="text-gray-700">
          Próxima partida: {group.nextMatchDate}
        </Text>
        <Text className="text-gray-700">Duração: {group.duration}</Text>
        <Text className="text-gray-700">
          Participantes: {group.participants}
        </Text>
      </View>
    </View>
  );
}

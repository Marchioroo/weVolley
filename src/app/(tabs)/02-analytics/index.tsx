import AnalyticsCardGame from "@/components/Organisms/AnalyticsCardGame";
import {
  useFetchMyGroups,
  useFetchOtherGroups,
  useLoadingGroups,
  useMyGroups,
  useOtherGroups,
} from "@/stores/useGroupStore";
import { GroupItem } from "@/types/GroupsType";
import { router } from "expo-router";
import React, { useCallback, useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Analytics() {
  const myGroups = useMyGroups();
  const otherGroups = useOtherGroups();
  const loadingGroups = useLoadingGroups();

  const fetchMyGroups = useFetchMyGroups();
  const fetchOtherGroups = useFetchOtherGroups();

  useEffect(() => {
    (async () => {
      await Promise.all([fetchMyGroups(), fetchOtherGroups()]);
    })();
  }, [fetchMyGroups, fetchOtherGroups]);

  const ITEM_WIDTH = 330;
  const SPACING = 12;
  const SNAP = useMemo(() => ITEM_WIDTH + SPACING, []);
  const keyExtractor = useCallback((item: GroupItem) => String(item.id), []);

  const handlePress = useCallback((id: number) => {
    router.push(`/PageCardGame/${id}`);
  }, []);

  const renderMyGroupItem = useCallback(
    ({ item }: { item: GroupItem }) => (
      <View style={{ width: ITEM_WIDTH }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handlePress(item.id)}
        >
          <AnalyticsCardGame {...item} />
        </TouchableOpacity>
      </View>
    ),
    [handlePress]
  );

  const renderOtherGroupItem = useCallback(
    ({ item }: { item: GroupItem }) => <AnalyticsCardGame {...item} />,
    []
  );

  if (loadingGroups) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#F97316" />
        <Text className="mt-4 text-gray-600">Carregando grupos...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white px-4">
      <FlatList
        ListHeaderComponent={
          <>
            <View className="flex flex-row justify-between items-center mt-4 px-2 mb-4">
              <Text
                className="font-semibold text-2xl"
                style={{ fontFamily: "CircularStd" }}
              >
                Meus grupos ({myGroups.length})
              </Text>
              <Text className="text-sm text-[#F97316]">Ver todos</Text>
            </View>

            <FlatList
              data={myGroups}
              keyExtractor={keyExtractor}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 16 }}
              ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
              decelerationRate="fast"
              snapToInterval={SNAP}
              snapToAlignment="start"
              disableIntervalMomentum
              renderItem={renderMyGroupItem}
              windowSize={3}
              initialNumToRender={3}
              maxToRenderPerBatch={5}
              removeClippedSubviews
            />

            <View className="mt-8 mb-4 px-2">
              <Text
                className="font-semibold text-2xl"
                style={{ fontFamily: "CircularStd" }}
              >
                Conheça outros grupos ({otherGroups.length})
              </Text>
            </View>
          </>
        }
        data={otherGroups}
        keyExtractor={keyExtractor}
        renderItem={renderOtherGroupItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, gap: 12 }}
      />
    </View>
  );
}

import HomeHeader from "@/components/Molecules/HomeHeader";
import HomeSectionHeader from "@/components/Molecules/HomeSectionHeader";
import HomeActivityUsersList from "@/components/Organisms/HomeActivityListItem";
import HomeInformations from "@/components/Organisms/HomeInformations";

import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator
      >
        <View className="flex-1">
          <HomeHeader />
          <HomeSectionHeader title="Seus Jogos" subtitle="Setembro, 2025" />
          <HomeInformations />
          <HomeSectionHeader title="Seus amigos" subtitle="Ranking" />
          <HomeActivityUsersList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

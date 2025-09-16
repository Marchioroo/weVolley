import HomeHeader from "@/components/Molecules/HomeHeader";
import HomeSectionHeader from "@/components/Molecules/HomeSectionHeader";
import HomeActivityUsersList from "@/components/Organisms/HomeActivityListItem";
import HomeInformations from "@/components/Organisms/HomeInformations";

import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView
      className="flex-1  h-[1000px]  bg-white"
      edges={["top", "left", "right"]}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="relative flex-1 flex items-center justify-center font-circular">
          <View className="absolute top-0 left-0 w-full px-4">
            <HomeHeader />
            <HomeSectionHeader title="Seus Jogos" subtitle="Setembro, 2025" />
            <HomeInformations />
            <HomeSectionHeader title="Seus amigos" subtitle="Ranking" />
            <HomeActivityUsersList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

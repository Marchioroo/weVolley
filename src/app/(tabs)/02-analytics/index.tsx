import AnalyticsCardGame from "@/components/Organisms/AnalyticsCardGame";
import { FlatList, ScrollView, Text, View } from "react-native";

export default function Analytics() {
  const cards = [
    {
      id: "1",
      title: "Torneio de Setembro",
      nextMatchDate: "20/09/2025",
      duration: "1h30min",
      participants: 18,
      imageUrl: "https://picsum.photos/800/320?random=1",
    },
    {
      id: "2",
      title: "Campeonato Primavera",
      nextMatchDate: "05/10/2025",
      duration: "2h",
      participants: 24,
      imageUrl: "https://picsum.photos/800/320?random=2",
    },
    {
      id: "3",
      title: "Copa dos Amigos",
      nextMatchDate: "12/11/2025",
      duration: "1h45min",
      participants: 12,
      imageUrl: "https://picsum.photos/800/320?random=3",
    },
  ];

  const ITEM_WIDTH = 330;
  const SPACING = 12;
  const SNAP = ITEM_WIDTH + SPACING;

  return (
    <>
      <View className="flex-1 h-full w-full bg-white px-4">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 16,
          }}
        >
          <View>
            <View className="flex flex-row justify-between items-center">
              <Text
                className="font-semibold text-2xl mb-6 mt-4 px-2"
                style={{ fontFamily: "CircularStd" }}
              >
                Meus grupos
              </Text>
              <Text className="text-sm text-[#F97316]">Ver todos</Text>
            </View>

            <FlatList
              data={cards}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 16 }}
              ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
              decelerationRate="fast"
              snapToInterval={SNAP}
              snapToAlignment="start"
              disableIntervalMomentum
              renderItem={({ item }) => (
                <View style={{ width: ITEM_WIDTH }}>
                  <AnalyticsCardGame {...item} />
                </View>
              )}
              getItemLayout={(_, index) => ({
                length: SNAP,
                offset: SNAP * index,
                index,
              })}
            />
          </View>

          <View>
            <Text
              className="font-semibold text-2xl mb-6 px-2"
              style={{ fontFamily: "CircularStd" }}
            >
              Conheça outros grupos
            </Text>
            <View>
              {cards.map((card) => (
                <AnalyticsCardGame key={card.id} {...card} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

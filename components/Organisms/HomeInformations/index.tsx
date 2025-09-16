import Derrota from "@/assets/icons/Derrota.svg";
import Victory from "@/assets/icons/Victory.svg";

import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeInformations() {
  const [selected, setSelected] = useState<"semana" | "mes">("semana");
  const periodoLabel =
    selected === "semana" ? "na última semana" : "no último mês";

  return (
    <View className="px-3 h-[300px] w-full flex-row gap-2">
      <View className="flex-1 flex-col gap-2">
        <View className="flex-1 border border-gray-100 rounded-2xl">
          <View className="flex flex-row justify-between items-center py-2 px-2">
            <Text
              className="font-semibold text-xl"
              style={{ fontFamily: "CircularStd" }}
            >
              Vitórias
            </Text>
            <Victory width={20} height={20} />
          </View>
          {/* ⬇️ troquei items-between -> justify-between (ou remova) */}
          <View className="pl-2 flex justify-center h-3/5">
            <Text style={{ fontFamily: "CircularStd", fontSize: 32 }}>20</Text>
            <Text
              style={{ fontFamily: "CircularStd", fontSize: 10 }}
              className="text-gray-400"
            >
              {periodoLabel}
            </Text>
          </View>
        </View>

        <View className="flex-1 border border-gray-100 rounded-2xl">
          <View className="flex flex-row justify-between items-center p-2">
            <Text
              className="font-semibold text-xl"
              style={{ fontFamily: "CircularStd" }}
            >
              Derrotas
            </Text>
            <Derrota width={20} height={20} />
          </View>
          <View className="pl-2 flex justify-center h-3/5">
            <Text style={{ fontFamily: "CircularStd", fontSize: 32 }}>13</Text>
            <Text
              style={{ fontFamily: "CircularStd", fontSize: 10 }}
              className="text-gray-400"
            >
              {periodoLabel}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-1 relative">
        <View className="h-full border border-gray-100 rounded-2xl p-2">
          <Text
            style={{ fontFamily: "CircularStd", fontSize: 20 }}
            className="font-semibold text-gray-900"
          >
            Gráfico
          </Text>

          <View className="flex-1" />

          <View className="absolute left-0.5 bottom-1 w-[145px] bg-[#FDEEE9] rounded-2xl">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex-row gap-2 m-0.5 rounded-2xl items-end"
            >
              <TouchableOpacity
                onPress={() => setSelected("semana")}
                hitSlop={8}
              >
                <Text
                  className={`px-4 py-1 rounded-2xl text-center font-semibold ${
                    selected === "semana"
                      ? "bg-white text-[#C85B2C]"
                      : "text-[#C85B2C]"
                  }`}
                >
                  Semana
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelected("mes")} hitSlop={8}>
                <Text
                  className={`px-4 py-1 rounded-2xl text-center font-semibold ${
                    selected === "mes"
                      ? "bg-white text-[#C85B2C]"
                      : "text-[#C85B2C]"
                  }`}
                >
                  Mês
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

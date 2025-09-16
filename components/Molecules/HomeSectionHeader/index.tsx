// components/SectionHeader.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  onMenuPress?: () => void;
  className?: string;
};

export default function HomeSectionHeader({
  title,
  subtitle,
  onMenuPress,
  className = "",
}: Props) {
  return (
    <View
      className={`w-full flex-row items-start justify-between p-4 ${className}`}
    >
      <View className="flex-1 pr-3">
        <Text className="text-slate-900 font-extrabold text-lg">{title}</Text>
        {subtitle ? (
          <Text className="text-gray-400 mt-1">{subtitle}</Text>
        ) : null}
      </View>

      <TouchableOpacity
        onPress={onMenuPress}
        accessibilityRole="button"
        accessibilityLabel="Mais opções"
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        className="w-8 h-8 rounded-full items-center justify-center"
      >
        <View className="mt-2">
          <Ionicons name="ellipsis-vertical" size={18} color="#9CA3AF" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

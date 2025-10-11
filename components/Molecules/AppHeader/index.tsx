import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import ArrowLeft from "../../../assets/icons/ArrowLeft.svg";

// Tipagem das props
type AppHeaderProps = {
  options: {
    title?: string;
    headerTitle?: string;
    headerRight?: (props: { canGoBack: boolean }) => React.ReactNode;
  };
  navigation: {
    canGoBack: () => boolean;
    goBack: () => void;
  };
  isOverlay?: boolean;
  arrowColor?: string; // cor do ícone de voltar
  titleColor?: string; // cor do título
  style?: ViewStyle; // customizações externas opcionais
  titleStyle?: TextStyle; // customizações do texto
};

export default function AppHeader({
  options,
  navigation,
  isOverlay = false,
  arrowColor = "#FFFFFF",
  titleColor = "#FFFFFF",
  style,
  titleStyle,
}: AppHeaderProps) {
  const title = options.title ?? options.headerTitle ?? "";

  return (
    <View
      style={[
        styles.container,
        {
          height: isOverlay ? 88 : 56,
          backgroundColor: isOverlay ? "transparent" : "#121317",
          paddingTop: isOverlay ? 40 : 0,
        },
        style,
      ]}
    >
      {/* Botão de voltar */}
      {navigation.canGoBack() && (
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.backButton}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <ArrowLeft color={arrowColor} />
        </TouchableOpacity>
      )}

      {/* Título */}
      <Text
        style={[styles.title, { color: titleColor }, titleStyle]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>

      {/* Header Right */}
      {options.headerRight?.({ canGoBack: navigation.canGoBack() })}
    </View>
  );
}

// 🎨 Estilos base
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 12,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    flexShrink: 1,
  },
});

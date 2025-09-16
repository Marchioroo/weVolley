import type { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  icon?: ReactNode; // qualquer componente de ícone
  iconPosition?: "left" | "right";
  className?: string; // classes extras do Tailwind
  classNameText?: string; // classes extras do Tailwind para o texto
  type?: "primary" | "secondary";
};

export default function ButtonTailwind({
  title,
  onPress,
  icon,
  iconPosition = "right",
  className = "",
  classNameText = "",
  type = "primary",
}: ButtonProps) {
  const baseClasses =
    "px-4 py-5 rounded-2xl flex-row items-center justify-center";
  const primaryClasses = `bg-[#C85B2C] ${baseClasses}`;
  const secondaryClasses = `border-2 border-[#C85B2C] ${baseClasses}`;

  const textClasses =
    type === "secondary"
      ? `text-[#C85B2C] font-bold text-md ${classNameText}`
      : `text-white font-bold text-md ${classNameText}`;

  return (
    <TouchableOpacity
      className={`${type === "secondary" ? secondaryClasses : primaryClasses} ${className}`}
      onPress={onPress}
    >
      {/* Ícone à esquerda */}
      {icon && iconPosition === "left" && <View className="mr-2">{icon}</View>}

      {/* Texto */}
      {title && <Text className={textClasses}>{title}</Text>}

      {/* Ícone à direita */}
      {icon && iconPosition === "right" && <View className="ml-2">{icon}</View>}
    </TouchableOpacity>
  );
}

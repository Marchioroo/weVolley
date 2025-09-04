import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { SvgProps } from "react-native-svg";

type InputTextProps = {
  Icon: React.FC<SvgProps>;
  placeholder?: string;
  password?: boolean;
} & TextInputProps; // aceita qualquer prop padrão de TextInput

export default function InputText({
  Icon,
  placeholder = "Digite aqui",
  password = false,
  ...textInputProps
}: InputTextProps) {
  const [value, setValue] = useState("");

  return (
    <View
      className="w-full flex-row items-center gap-3 border border-[#E4DFDF] rounded-2xl bg-white"
      style={{ paddingHorizontal: 12 }}
    >
      <Icon width={24} height={24} />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        keyboardType={password ? "default" : "email-address"}
        autoCapitalize="none"
        secureTextEntry={password}
        className="flex-1 text-base text-gray-800"
        style={{ paddingVertical: 18 }}
        {...textInputProps} // espalha outras props caso passe
      />
    </View>
  );
}

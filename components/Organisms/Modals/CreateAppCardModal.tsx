import React, { forwardRef, memo } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

type CreateAppCardModalProps = {
  onClose?: () => void;
  onOpen?: () => void;
};

export const CreateAppCardModal = memo(
  forwardRef<Modalize, CreateAppCardModalProps>(({ onClose, onOpen }, ref) => {
    return (
      <Modalize
        ref={ref}
        onClose={onClose}
        onOpen={onOpen}
        overlayStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        modalStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
      >
        <View className="p-5 bg-white">
          <Text className="text-lg font-bold mb-4">Criar novo Card</Text>

          <TextInput
            placeholder="Título"
            className="border border-gray-300 rounded-lg px-3 py-2 mb-3"
          />
          <TextInput
            placeholder="Descrição"
            className="border border-gray-300 rounded-lg px-3 py-2 mb-3"
          />

          <TouchableOpacity
            onPress={() => {
              if (ref && typeof ref !== "function") {
                ref.current?.close();
              }
            }}
            className="bg-blue-600 py-3 rounded-lg"
          >
            <Text className="text-white text-center font-semibold">Salvar</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    );
  })
);

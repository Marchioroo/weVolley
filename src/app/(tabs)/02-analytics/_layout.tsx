import Header from "@/components/Molecules/Header";
import { CreateAppCardModal } from "@/components/Organisms/Modals/CreateAppCardModal";
import { Stack } from "expo-router";
import React, { useRef } from "react";
import { View } from "react-native";
import { Modalize } from "react-native-modalize";

export default function AnalyticsStackLayout() {
  const modalRef = useRef<Modalize>(null);
  const handleOpen = () => console.log("Modal foi aberto!");
  const handleClose = () => console.log("Modal foi fechado!");

  return (
    <View style={{ flex: 1 }}>
      <Header onPressPlus={() => modalRef.current?.open()} />
      <View style={{ flex: 1, paddingTop: 60 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        />
      </View>
      <CreateAppCardModal
        ref={modalRef}
        onOpen={handleOpen}
        onClose={handleClose}
      />
    </View>
  );
}

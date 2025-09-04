import LoginAuth from "@/components/Molecules/Login";
import Constants from "expo-constants";
import React from "react";
import { View } from "react-native";

const statusBarheight = Constants.statusBarHeight;

export default function Index() {
  return (
    <View>
      <View className="w-full " style={{ marginTop: statusBarheight + 8 }}>
        <LoginAuth />
      </View>
    </View>
  );
}

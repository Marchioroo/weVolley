import LoginAuth from "@/components/Molecules/Login";
import Constants from "expo-constants";
import { View } from "react-native";

const statusBarheight = Constants.statusBarHeight;

export default function Login() {
  return (
    <View style={{ flex: 1, marginTop: statusBarheight + 8 }}>
      <LoginAuth />
    </View>
  );
}

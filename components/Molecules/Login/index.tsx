import MyButton from "@/components/Atoms/MyButton";
import { router } from "expo-router";
import { useState } from "react";
import { Switch, Text, View } from "react-native";
import ArrowRight from "../../../assets/icons/ArrowRight.svg";
import MessageEmail from "../../../assets/icons/MessageEmail.svg";
import PasswordIcon from "../../../assets/icons/PasswordIcon.svg";
import InputText from "../InputText";

export default function LoginAuth() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isForget, setIsForget] = useState(false);
  const toggleSwitch = () => setIsForget((previousState) => !previousState);

  const redirectTo = () => {
    router.push("/01-home");
  };

  return (
    <View className="mt-8 px-8">
      <View className="w-full flex justify-center items-center gap-2 py-8">
        {/* <Image
          source={require("../../../assets/images/Logo.png")}
          className="w-20 h-20 rounded-full"
        /> */}
        <Text className="text-5xl font-semibold text-black">Volley</Text>
      </View>

      {/* E-maIL E SENHA*/}
      <View className="flex justify-center mt-8 gap-5 mb-3">
        <Text className="text-3xl font-semibold text-[#2e222c]">Login</Text>
        <InputText
          placeholder="Digite seu e-mail"
          Icon={MessageEmail}
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          placeholder="Sua senha"
          Icon={PasswordIcon}
          password={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View className="flex-row justify-between items-center w-full ">
        <View className="flex-row items-center">
          <Switch
            value={isForget}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#ccc", true: "#3b82f6" }}
            thumbColor={isForget ? "#ffffff" : "#f4f3f4"}
          />
          <Text className="ml-2 text-black text-lg">Lembrar-me</Text>
        </View>
        <Text className="ml-2 text-black text-lg"> Esqueceu a senha?</Text>
      </View>

      <View className="p-6 ">
        <MyButton
          title="Logar"
          icon={<ArrowRight width={14} height={14} />}
          onPress={() => redirectTo()}
          classNameText="text-2xl"
          type="primary"
        />
      </View>
    </View>
  );
}

import MyButton from "@/components/Atoms/MyButton";
import MyInterests from "@/components/Molecules/MyInterests";
import ProfileImage from "@/components/Molecules/ProfileImage";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import EditProfileIcon from "../../../../assets/icons/EditProfileIcon.svg";
import Rede from "../../../../assets/icons/volleybolIcons/Rede.svg";

export default function ProfileScreen() {
  const profileImage = "https://i.pravatar.cc/150?img=5" as string;
  const backGroundImage = "https://picsum.photos/800/320" as string;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ProfileImage
          profileImage={profileImage}
          backGroundImage={backGroundImage}
        />

        <View style={{ flex: 1, padding: 16, paddingTop: 12, height: 650 }}>
          <View className="w-full h-32  rounded-lg mt-12">
            <Text className="text-[#120D26] font-semibold text-2xl mx-auto">
              Maria Isabella
            </Text>

            <View className="flex flex-row px-4 mt-2 justify-center">
              <MyButton
                title="Editar Perfil"
                type="secondary"
                iconPosition="right"
                icon={<EditProfileIcon />}
                className="w-1/2 mr-2"
              />
            </View>

            <View>
              <Text className="flex items-center justify-center font-semibold text-[#120D26] mt-6 mb-2 text-xl">
                Sobre mim
              </Text>
              <View className="w-full h-120 rounded-lg  flex flex-row items-center justify-between ">
                <Text className="text-[#3C3E56] ">
                  Enjoy your favorite dishes with your friends and family and
                  have a great time. Food from local food trucks will be
                  available for purchase. Read More
                </Text>
              </View>
            </View>

            <View>
              <Text className="flex items-center justify-center font-semibold text-[#120D26] mt-6 mb-2 text-xl">
                Habilidades
              </Text>
              <View className="w-full h-100 rounded-lg  flex flex-row items-center justify-between gap-4">
                <Rede />
              </View>
            </View>

            <MyInterests />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

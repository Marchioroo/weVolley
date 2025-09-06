import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Analytics from "../../../assets/icons/Analytics.svg";
import Home from "../../../assets/icons/Home.svg";
import Profile from "../../../assets/icons/Profile.svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          height: 80,
          backgroundColor: "#1D1F24",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#5393F3", // azul ativo
        tabBarInactiveTintColor: "#888", // cinza inativo
      }}
    >
      <Tabs.Screen
        name="01-home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="02-analytics"
        options={{
          title: "Meus Dados",
          tabBarIcon: ({ color }) => <Analytics color={color} />,
        }}
      />
      <Tabs.Screen
        name="03-ranking"
        options={{
          title: "Ranking",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="04-profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <Profile color={color} />,
        }}
      />
    </Tabs>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import Analytics from "../../../assets/icons/Analytics.svg";
import HomeIcon from "../../../assets/icons/Home.svg";
import Profile from "../../../assets/icons/Profile.svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 16,
          height: 90,
          backgroundColor: "#1D1F24",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#539DF3",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="01-home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#2F4369" : "transparent",
                borderRadius: 50,
                padding: 12,
              }}
            >
              <HomeIcon
                width={25}
                height={24}
                color={focused ? "#60A5FA" : color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="02-analytics"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#2F4369" : "transparent",
                borderRadius: 50,
                padding: 12,
              }}
            >
              <Analytics width={25} height={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="03-ranking"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={{
                backgroundColor: focused ? "#2F4369" : "transparent",
                borderRadius: 50,
                padding: 12,
              }}
            >
              <Ionicons name="trophy-outline" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="04-profile"
        options={{
          tabBarShowLabel: false,
          headerPressOpacity: 1,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#2F4369" : "transparent",
                borderRadius: 50,
                padding: 12,
              }}
            >
              <Profile width={25} height={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

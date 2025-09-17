import { Tabs } from "expo-router";
import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Analytics from "../../../assets/icons/Analytics.svg";
import HomeIcon from "../../../assets/icons/Home.svg";
import Profile from "../../../assets/icons/Profile.svg";
import Search from "../../../assets/icons/Search.svg";

const ACTIVE = "#C85B2C";
const ACTIVE_BG = "#f7c5af";
const INACTIVE = "#888";
const BAR_BG = "#eee";

const IconBadge = memo(function IconBadge({
  focused,
  children,
}: {
  focused: boolean;
  children: React.ReactNode;
}) {
  const style = useMemo(
    () => ({
      backgroundColor: focused ? ACTIVE_BG : "transparent",
      borderRadius: 50,
      padding: 12,
    }),
    [focused]
  );
  return <View style={style}>{children}</View>;
});

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="01-home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: ACTIVE,
        tabBarInactiveTintColor: INACTIVE,
        tabBarStyle: {
          paddingTop: 14,
          paddingBottom: Math.max(10, insets.bottom), // respeita home bar
          height: 66 + Math.max(10, insets.bottom), // evita “pulo”
          backgroundColor: BAR_BG,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="01-home"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconBadge focused={focused}>
              {/* Muitos SVGs usam fill. Troque para stroke se for o caso */}
              <HomeIcon
                width={25}
                height={24}
                fill={focused ? ACTIVE : color}
                color={focused ? ACTIVE : color} // para SVGs que usam stroke
              />
            </IconBadge>
          ),
        }}
      />
      <Tabs.Screen
        name="02-analytics"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconBadge focused={focused}>
              <Analytics
                width={25}
                height={24}
                fill={focused ? ACTIVE : color}
                color={focused ? ACTIVE : color}
              />
            </IconBadge>
          ),
        }}
      />
      <Tabs.Screen
        name="03-ranking"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconBadge focused={focused}>
              <Search
                width={25}
                height={24}
                fill={focused ? ACTIVE : color}
                color={focused ? ACTIVE : color}
              />
            </IconBadge>
          ),
        }}
      />
      <Tabs.Screen
        name="04-profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconBadge focused={focused}>
              <Profile
                width={25}
                height={24}
                fill={focused ? ACTIVE : color}
                color={focused ? ACTIVE : color}
              />
            </IconBadge>
          ),
        }}
      />
    </Tabs>
  );
}

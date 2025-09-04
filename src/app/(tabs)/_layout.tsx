import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            // Ícone padrão, pode customizar
            <svg width={size} height={size} fill={color}>
              <circle cx={size / 2} cy={size / 2} r={size / 2 - 2} />
            </svg>
          ),
        }}
      />
      <Tabs.Screen
        name="menu2"
        options={{
          title: "Menu 2",
          tabBarIcon: ({ color, size }) => (
            <svg width={size} height={size} fill={color}>
              <rect x={4} y={4} width={size - 8} height={size - 8} />
            </svg>
          ),
        }}
      />
      <Tabs.Screen
        name="menu3"
        options={{
          title: "Menu 3",
          tabBarIcon: ({ color, size }) => (
            <svg width={size} height={size} fill={color}>
              <polygon points={`0,${size} ${size / 2},0 ${size},${size}`} />
            </svg>
          ),
        }}
      />
    </Tabs>
  );
}

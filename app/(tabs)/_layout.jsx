import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { House, User } from "lucide-react-native";
const Tabslayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="(home)"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size, focused }) => {
						return <House color={color} size={size} />;
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color, size, focused }) => {
						return <User color={color} size={size} />;
					},
				}}
			/>
		</Tabs>
	);
};

export default Tabslayout;

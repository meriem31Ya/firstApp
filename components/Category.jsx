import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Category = ({ item }) => {
	return (
		<TouchableOpacity className=" rounded px-4 py-2">
			<Text className="font-bold text-gray-700">{item.type}</Text>
		</TouchableOpacity>
	);
};

export default Category;

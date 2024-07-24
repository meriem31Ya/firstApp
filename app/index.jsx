import { Redirect, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	Alert,
	Button,
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function Index() {
	const router = useRouter();
	return (
		<>
			<View className="flex-1">
				<Image
					source={require("../assets/images/ashome.jpg")}
					className=" w-full h-[500] object-cover "
				/>
				<View className=" flex  items-center w-full h-[500] -mt-[50] z-10 rounded-2xl border-1 bg-white flex-col gap-y-4">
					<Text className=" text-lg font-bold">Welcome to my app</Text>
					<TouchableOpacity
						className="bg-blue-700 rounded px-[15] py-[10] "
						onPress={() => {
							router.push("/home");
						}}
					>
						<Text className="text-white">lets get started!</Text>
					</TouchableOpacity>
				</View>
			</View>

			<StatusBar style={"auto"} />
		</>
		// <Redirect href={"/home"} />
	);
	
}

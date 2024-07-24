import {
	View,
	Text,
	TextInput,
	FlatList,
	Touchable,
	TouchableOpacity,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import Card from "../../../components/Card";
import Category from "../../../components/Category";


const home = () => {
	const apparts = [
		{
			id: 1,
			image: "https://picsum.photos/200/300?random=1",
			prix_par_nuit: 75,
			note: 4.5,
			title: "Charmant appartement au centre-ville",
			description:
				"Un appartement moderne et confortable situé au cœur de la ville, à proximité des principales attractions.",
		},
		{
			id: 2,
			image: "https://picsum.photos/200/300?random=2",
			prix_par_nuit: 120,
			note: 4.8,
			title: "Villa de luxe avec piscine",
			description:
				"Profitez de vacances inoubliables dans cette villa spacieuse avec piscine privée et jardin.",
		},
		{
			id: 3,
			image: "https://picsum.photos/200/300?random=3",
			prix_par_nuit: 50,
			note: 4.2,
			title: "Maison traditionnelle en campagne",
			description:
				"Détendez-vous dans cette maison traditionnelle située dans un cadre paisible et verdoyant.",
		},
		{
			id: 4,
			image: "https://picsum.photos/200/300?random=4",
			prix_par_nuit: 90,
			note: 4.9,
			title: "Cabane confortable en forêt",
			description:
				"Une expérience unique dans cette cabane confortable, parfaite pour les amoureux de la nature.",
		},
		{
			id: 5,
			image: "https://picsum.photos/200/300?random=5",
			prix_par_nuit: 60,
			note: 4.0,
			title: "Chambre privée avec vue sur la mer",
			description:
				"Chambre privée dans une maison avec une vue imprenable sur la mer, à quelques pas de la plage.",
		},
	];

	const Data = [
		{
			id: 1,
			type: "Appartement",
		},
		{
			id: 2,
			type: "Villa",
		},
		{
			id: 3,
			type: "Maison",
		},
		{
			id: 4,
			type: "Cabane",
		},
		{
			id: 5,
			type: "Chambre Privée",
		},
		{
			id: 6,
			type: "Chambre Partagée",
		},
	];
	// const heightbar= "pt-["++"]";
	// console.log(heightbar)
	return (
		<View
			className="flex flex-col px-3 gap-y-4 flex-1 bg-slate-50"
			style={{
				paddingTop: Constants.statusBarHeight + 15,
			}}
		>
			<Text className="text-lg font-bold">Welcome to ASHOME</Text>
			<TextInput
                style={{elevation:2}}
				className="px-4 py-2 rounded-lg bg-white"
				placeholder="Search something"
			/>
			<View>
				<FlatList
					data={Data}
					horizontal
					keyExtractor={(item) => item.id}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => {
						return <Category item={item} />;
					}}
				/>
			</View>
			<View>
				<FlatList
					data={apparts}
					horizontal={false}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => {
						return <Card item={item} />;
					}}
				/>
			</View>
		</View>
	);
};

export default home;

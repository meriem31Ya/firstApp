import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Card = ({ item }) => {
	return (
		<Link href={`/detail/${item.id}`} style={styles.card}>
			<View style={styles.card}>
				<Image source={{ uri: item.image }} style={styles.image} />
				<View style={styles.details}>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.description}>{item.description}</Text>
					<Text style={styles.price}>{item.prix_par_nuit} € par nuit</Text>
					<Text style={styles.rating}>Note: {item.note}</Text>
				</View>
			</View>
		</Link>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	card: {
		backgroundColor: "white",
		borderRadius: 10,
		overflow: "hidden",
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		width: Dimensions.get("screen").width * 0.9,
		alignSelf: "center",
	},
	image: {
		width: "100%",
		height: 200,
	},
	details: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	description: {
		fontSize: 14,
		color: "#666",
		marginBottom: 10,
	},
	price: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},
	rating: {
		fontSize: 14,
		color: "#999",
	},
});

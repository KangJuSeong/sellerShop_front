import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	title: {
		fontSize: 32,
		marginTop: '10%',

	},
	imageContainer: {
		alignItems: 'center',
		marginTop: 40,
		backgroundColor: "white",
		borderWidth: 3,
		borderColor: "black",
		width: 185,
		height: 186,
		borderRadius: 120,
	},
	profileImg: {
		width: 180,
		height: 180,
		borderRadius: 120,
	},
	profileContainer: {
		justifyContent: 'space-between',
		flexDirection: "row",
		marginTop: 40,
		alignItems: 'center',
		borderWidth: 1,
		width: 350,
		height: 50,
	},
	id: {
		fontSize: 15,
		paddingLeft: 10,
	},
	username: {
		fontSize: 15,
		color: "rgb(255, 140, 58)",
		paddingRight: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
		marginTop: 40,
	},
	backButton: {
		backgroundColor: "rgb(242, 244, 246)",
		alignItems: "center",
		width: "40%",
		paddingTop: 15,
		paddingBottom: 15,
		marginRight: 10,
		borderRadius: 4,
	},
	membershipButton: {
		backgroundColor: "rgb(255, 140, 58)",
		alignItems: "center",
		width: "40%",
		paddingTop: 15,
		paddingBottom: 15,
		marginLeft: 10,
		borderRadius: 4,
	},
})

export default styles
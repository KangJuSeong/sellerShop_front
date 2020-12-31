import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title_container: {
		alignItems: 'center',
	},
	title: {
		fontSize: 30,
		marginTop: 50,
		fontWeight: 'bold'
	},
	sub_title: {
		fontSize: 13,
		marginTop: 20,
	},
	grade_container: {
		width: 317,
		marginTop: 30,
	},
	grade_title: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	review_container: {
		width: 317,
		marginTop: 30,
	},
	review_title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 12,
	},
	review: {
		color: "rgb(152, 169, 188)",
		backgroundColor: "rgb(248, 250, 251)",
		width: 311,
		height: 200,
	},
	counting: {
		alignSelf: 'flex-end',
		marginTop: 5,
		marginRight: 5,
		fontSize: 13,
		color: "rgb(131, 131, 133)"
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
		backgroundColor: "rgb(255, 171, 43)",
		alignItems: "center",
		width: "40%",
		paddingTop: 15,
		paddingBottom: 15,
		marginLeft: 10,
		borderRadius: 4,
	},
})

export default styles
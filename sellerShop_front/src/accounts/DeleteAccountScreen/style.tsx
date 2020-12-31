import {StyleSheet} from "react-native";
const styles =  StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	titleContainer: {
		flex: 1,
		marginTop: "15%",
	},
	title: {
		fontSize: 30,
	},
	inputContainer: {
		width: "100%"
	},
	text: {
		marginLeft: "8%",
	},
	input: {
		color: "rgb(152, 169, 188)",
		backgroundColor: "rgb(248, 250, 251)",
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 12,
		marginBottom: 20,
		marginLeft: "7%",
		marginRight: "7%",
		borderRadius: 4,
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
	changeButton: {
		backgroundColor: "rgb(255, 140, 58)",
		alignItems: "center",
		width: "40%",
		paddingTop: 15,
		paddingBottom: 15,
		marginLeft: 10,
		borderRadius: 4,
	},
	buttonText: {
	},
	scrollContainer: {
		flex: 1.2,
		borderTopLeftRadius: 10, // to provide rounded corners
		borderTopRightRadius: 10, // to provide rounded corners
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 30,
	},
	checkContainer: {
		flex: 0.5,
		flexDirection: "row",
	}
})
export default styles

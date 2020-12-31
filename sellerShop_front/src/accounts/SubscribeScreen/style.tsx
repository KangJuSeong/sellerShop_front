import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: '17%',
	},
	title: {
		fontSize: 30,
	},
	infoContainer: {
		flex: 3,
		alignItems: 'flex-start',
		marginTop: 20,
		width: 350,
		borderWidth: 1,
	},
	info: {
		fontSize: 20,
		paddingLeft: 50,
		paddingRight: 20,
	},
	buttonContiner: {
		flex: 2,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: "center",
		width: "100%",
		marginTop: 10,
	},
	subButton: {
		backgroundColor: "rgb(255, 140, 58)",
		borderRadius: 4,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 20,
		marginLeft: 30,
	},
	unsubButton: {
		backgroundColor: "rgb(242, 244, 246)",
		borderRadius: 4,
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 20,
		paddingBottom: 20,
	}
});

export default styles
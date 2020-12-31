import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    input_container: {
        backgroundColor: "rgb(255, 255, 255)",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        borderColor: "rgb(232, 236, 239)",
        borderWidth: 1,
        borderRadius: 4,
    },
    button: {
        backgroundColor: "rgb(77, 124, 254)",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 4,
    },
    button_text: {
        color: "rgb(255, 255, 255)",
    }
});

export default styles;
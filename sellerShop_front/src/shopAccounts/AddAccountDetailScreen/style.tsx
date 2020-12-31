import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(248, 250, 251)",
        flex: 1,
    },
    keyboard_avoid: {
        flex: 1,
        justifyContent: "flex-end",
    },
    title_container: {
        flexDirection: "row",
        marginTop: 22,
        marginLeft: 10,
    },
    title_bold: {
        fontSize: 24,
        fontWeight: "bold",
    },
    title_regular: {
        fontSize: 24,
    },
    image_container: {
        alignItems: "center",
    },
    account_image: {
        width: 130,
        height: 130,
        marginBottom: 20,
    },
});

export default styles;
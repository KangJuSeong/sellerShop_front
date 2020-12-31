import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "rgb(248, 250, 251)",
    },
    title_container: {
        paddingLeft: 10,
        paddingTop: 30,
        paddingBottom: 11,
        flexDirection: "row"
    },
    account_container: {
        alignItems: "center",
    },
    bold: {
        fontSize: 24,
        fontWeight: "bold"
    },
    regular: {
        fontSize: 24,
    },
    manage_button: {
        paddingLeft: 90
    },
    menu_bar: {
        marginLeft: 15,
    }
})

export default styles;
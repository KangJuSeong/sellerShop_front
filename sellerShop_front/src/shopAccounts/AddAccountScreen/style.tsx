import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(248, 250, 251)",
    },
    title_container: {
        flexDirection: "row",
        marginLeft: 10,
        marginTop: 22,
    },
    title_bold: {
        fontSize: 24,
        fontWeight: "bold",
    },
    title_regular: {
        fontSize: 24,
        fontWeight: "normal",
    },
    shop_label_container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 36,
        marginLeft: 20,
    },
    menu_bar: {
        marginLeft: 15,
    }
})

export default styles;
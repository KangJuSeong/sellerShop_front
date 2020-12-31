import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    shop_label: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(255, 255, 255)",
        width: "40%",
        height: 150,
        marginLeft: "3%",
        marginRight: "4%",
        marginBottom: 15,
    },
    shop_label_images: {
        width: 100,
        height: 50,
    },
    shop_label_title: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 14,
    },
    shop_label_button: {
        backgroundColor: "rgb(77, 124, 254)",
        alignItems: "center",
        justifyContent: "center",
        width: 101,
        height: 31, 
        borderRadius: 4,
    },
    shop_label_button_text: {
        color: "rgb(255, 255, 255)",
    },
})

export default styles;
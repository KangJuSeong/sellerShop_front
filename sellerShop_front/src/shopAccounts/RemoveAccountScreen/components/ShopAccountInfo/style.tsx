import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(255, 255, 255)",
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
        height: 64,
        marginTop: 11,
        marginBottom: 11,
        borderRadius: 4,
    },
    container_content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: '78%',
        paddingLeft: 10,
    },
    button: {
        backgroundColor: "rgb(242, 244, 246)",
        paddingLeft: 21.5,
        paddingRight: 21.5,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 4,
    },
    button_name: {
        color: "rgb(119, 140, 162)",
    },
    account_img: {
        width: 64,
        height: "100%",
        marginLeft: 4,
    },
    shop_name: {
        color: "rgb(152, 169, 188)",
        fontSize: 14,
    },
    number: {
        fontSize: 21,
        color: "rgb(77, 124, 254)",
        paddingRight: 5
    }
})

export default styles;
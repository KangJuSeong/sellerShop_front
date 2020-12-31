import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    imgContainer: {
        width: "100%",
        height: "60%",
    },
    img: {
      width: "100%",
      height: "100%",
    },
    loginTitleContainer: {
        alignItems: "center",
    },
    loginTitle: {
        fontSize: 20,
        marginTop: 20,
    },
    inputBoxContainer: {
        marginTop: 22,
    },
    inputBox: {
        color: "rgb(152, 169, 188)",
        backgroundColor: "rgb(248, 250, 251)",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        marginLeft: "7%",
        marginRight: "7%",
        marginBottom: 10,
        borderRadius: 4,
    },
    buttonBox: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    regist_button: {
        backgroundColor: "rgb(242, 244, 246)",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 50,
        paddingRight: 50,
        marginRight: 18,
        borderRadius: 4,
    },
    inputLoginText: {
        color: "rgb(255, 255, 255)"
    },
    login_button: {
        backgroundColor: "rgb(77, 124, 254)",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 4,
    },
    inputRegistText: {
        color: "rgb(119, 140, 162)"
    },
  })

export default styles;
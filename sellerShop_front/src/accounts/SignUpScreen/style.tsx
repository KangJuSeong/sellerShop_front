import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flexGrow:1, 
      justifyContent:"flex-end",
    },
    imgContainer: {
      width: "100%",
      height: "44%",
    },
    img: {
      width: "100%",
      height: "100%",
    },
    titleContainer: {
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 22,
      marginBottom: 17,
    },
    inputBoxContainer: {
      width: "100%",
      paddingLeft: "4%",
      paddingRight: "4%",
    },
    inputBox: {
      backgroundColor: "rgb(248, 250, 251)",
      paddingTop: 11,
      paddingBottom: 11,
      paddingLeft: 16,
      marginBottom: 11,
    },
    describeText: {
      fontSize: 11,
      marginBottom: 11,
      marginLeft: 13,
    },
    termContainer: {
      flexDirection: "row",
      paddingLeft: "4%",
      marginTop: 10,
    },
    termLink: {
      color: "blue",
      textDecorationLine: "underline",
      marginLeft: 10,
    },
    buttonBox: {
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: 20,
    },
    registButton: {
      backgroundColor: "rgb(242, 244, 246)",
      alignItems: "center",
      width: "42%",
      paddingTop: 11,
      paddingBottom: 11,
      borderRadius: 4,
    },
      registText: {
      color: "rgb(119, 140, 162)"
    },
      loginButton: {
      backgroundColor: "rgb(77, 124, 254)",
      alignItems: "center",
      width: "42%",
      paddingTop: 11,
      paddingBottom: 11,
      marginLeft: 20,
      borderRadius: 4,
    },
      loginText: {
      color: "rgb(255, 255, 255)"
    },
})

export default styles;
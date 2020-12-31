import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      height: 64,
      borderRadius: 4,
      backgroundColor: "#fff",
      alignItems: "center",
      width: "100%",
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: "row",
    },
    imageContainer: {
      width: 55,
      flex: 55
    },
    image: {
      width: 55,
      height: 12,
    },
    accountContainer: {
      flex: 200,
    },
    accountText: {
      fontSize: 14
    },
    accountTextColor: {
      color: "#252631"
    },
    shopTextColor: {
      color: "#98a9bc"
    },
    countContainer: {
      width: "auto",
      flexDirection: "row",
      justifyContent: "flex-end",
      flex: 65
    },
    count: {
      fontSize: 21,
      color: "#4d7cfe"
    }
  });

export default styles;
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title_container: {
      flexDirection: "row",
      marginTop: 22,
      marginLeft: 10
    },
    title_bold: {
      fontSize: 24,
      fontWeight: "bold",
    },
    title_normal: {
      fontSize: 24,
    },
    shop_image_container: {
      alignItems: "center",
      marginTop: 24,
      marginBottom: 40
    },
    shop_image: {
      height: 70,
    },
    message_container: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 28
    },
    message_bold: {
      fontSize: 18,
      fontWeight: "bold",
    },
    message_normal: {
      fontSize: 18,
    },
    more_button: {
      backgroundColor: 'rgb(77, 124, 254)',
      alignItems: "center",
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: 22,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 4,
    },
    more_button_text: {
      color: "rgb(255, 255, 255)",
    },
    home_button: {
      backgroundColor: 'rgb(242, 244, 246)',
      alignItems: "center",
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: 22,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 4,
    },
    home_button_text: {
      color: "rgb(119, 140, 162)",
    }
  });

export default styles;
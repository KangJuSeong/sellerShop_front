import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        left: "10%",
        top: "5%",
        width: "80%",
        height: "90%",
        backgroundColor: "rgb(242, 244, 246)",
        opacity: 0.9,
        borderRadius: 4,
    },
    header: {
        backgroundColor: "gray",
        alignItems: "flex-end",
        width: "100%",
    }
});

export default styles
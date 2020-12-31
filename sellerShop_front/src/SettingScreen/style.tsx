import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: "4%",
        marginLeft: "5%",
        marginRight: "5%",
    },
    labelSetContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        paddingLeft: 7,
    },
    titleText: {
        fontSize: 16,
        color: "rgb(105, 108, 113)",
        paddingBottom: 10,
    },
    label: {
        flexDirection: "row",
        paddingBottom: 20,
    },
    labelAlign: {
        flexWrap: "nowrap",
        flexDirection: "row",
        paddingLeft: 10,
    },
    labelText: {
        fontSize: 20,
        paddingLeft: 25
    }
});

export default styles;
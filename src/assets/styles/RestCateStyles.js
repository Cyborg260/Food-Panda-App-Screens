import { StyleSheet } from "react-native";

export default StyleSheet.create({
    headerView: {
        height: 50,
        width: "100%",
        backgroundColor: "#fff",
        elevation: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
        flexDirection: "row",

    },
    backBtn: {
        tintColor: "deeppink",
        resizeMode: "stretch",
        width: 25,
        height: 30,
    },
    backBtnOpacity: {
        position: "absolute",
        left: 15,
    },
    flatlistView: {
        flex: 1,
    },
    maintxt: {
        fontSize: 16,
        fontWeight: "700",
        color: "black",
        position: "absolute",
        left: 60

    }

})
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
    categImage: {
        width: 190,
        height: 210,

    },
    itemsView: {
        marginTop: 10,
        padding: 10,
    },
    image: {
        width: 190,
        height: 150,
        resizeMode: "stretch",
        borderRadius: 10,
    },
    text: {
        color: "black",
        fontSize: 16,
        alignSelf: "flex-start",
        position: "absolute",
        bottom: 15,
        left:5

    },
    text1: {
        color: "black",
        fontSize: 16,
        fontWeight:"bold",
        alignSelf: "flex-start",
        position: "absolute",
        bottom: 0,
        left:5,
        
    },
    RBbutton: {
        width: "70%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "deeppink",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        right: 0
    },
    cartOpacityView: {
        width: "90%",
        height: "100%",
        flexDirection: "row",
        flex: 1,
    },
    RBbuttonTxt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    IconView: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        left: 10
    },
    IconView1: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "deeppink",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        left: 70
    },
    cartIcon: {
        width: 25,
        height: 25,
        tintColor: "#fff",
        resizeMode: "stretch",
    },
    counterTxt: {
        fontSize: 18,
        color: "black",
        fontFamily: "bold",
        position: "absolute",
        bottom: 25,
        left: 50,
        alignSelf: "center"
    },
    counterTxt2: {
        fontSize: 16,
        color: "#fff",
    },
    quantLogo: {
        width: 30,
        height: 30,
        borderRadius: 60,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        right: 5,
        top: 5,
        position: "absolute",
    },
    quanTxt: {
        color: "deeppink",
        fontSize: 16
    },
    viewCartBtn: {
        flexDirection: "row",
        width: "95%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "deeppink",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    viewQuan: {
        width: 25,
        height: 25,
        borderRadius: 60,
        borderColor: "#fff",
        borderWidth: 1,
        alignItems: "center",
        left: 15,
        position: "absolute",
    },
    amountTxt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        alignItems: "center",
        position: "absolute",
        right: 15,
    },
    topImage: {
        width: "100%",
        height: 150,
        resizeMode: "stretch",
    },
    cartView: {
        justifyContent: "center",
        alignItems: "center",
        height: 70
    },
    backBtn: {
        tintColor: "deeppink",
        resizeMode: "contain",
        width: 20,
        height: 28,
    },
    backBtnView:
    {
        width: 30,
        height: 30,
        borderRadius: 60,
        backgroundColor: "#fff",
        zIndex: 1,
        position: "absolute",
        left: 18,
        top: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    shareBtn: {
        tintColor: "deeppink",
        resizeMode: "contain",
        width: 20,
        height: 28,
    },
    shareBtnView: {
        width: 30,
        height: 30,
        borderRadius: 60,
        backgroundColor: "#fff",
        position: "absolute",
        zIndex: 1,
        right: 18,
        top: 35,
        justifyContent: "center",
        alignItems: "center",

    },
    rbSheetStyles: {
        wrapper: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderColor: "black",
            backgroundColor: "#fff",
            borderWidth: 1,
            height: 420,
            justifyContent: "center",
            alignItems: "center"
        },
        draggableContainer: {
            width: "100%",
            alignItems: "center",
            backgroundColor: "red",
            position: "absolute",
            top: 0,
            zIndex: 1
        },
        draggableIcon: {
            width: 35,
            height: 5,
            borderRadius: 5,
            margin: 10,
            backgroundColor: "#fff",
            position: "absolute",
            top: 0,
            zIndex: 1
        }
    },
    cateTxt: {
        fontSize: 24,
        fontWeight: "700",
        color: "black",
        marginLeft: 10,
        marginTop: 5
    },
    rbSheetTxtView: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: "center"
    },
    itemName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
    detailTxtView: {
        width: "90%"
    },
    detailTxt: {
        fontSize: 14,
    },
    specialHeadingTxt: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        alignSelf: "flex-start",
        marginLeft: 20
    },
    specialTxtView: {
        width: "90%"
    },
    specialTxt: {
        fontSize: 14,
    },
    lineView: {
        width: "90%",
        height: 0,
        borderWidth: 1,
        borderColor: "gainsboro",
        marginVertical: 15,
    }

})
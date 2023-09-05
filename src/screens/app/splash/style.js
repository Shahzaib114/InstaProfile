import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    parentImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: scale(200),
        height: scale(200),
        // backgroundColor:'grey'
    },
    appNameText: {
        color: 'orange',
        fontSize: scale(20),
        fontFamily: 'Montserrat-Medium',
        margin: scale(10),
        alignSelf: 'center',
        lineHeight: scale(26),
        fontWeight: "600"
    },
})
export default styles;
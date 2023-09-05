import { scale } from "react-native-size-matters";
import { Platform } from "react-native";
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: scale(100),
        height: scale(100),
        marginHorizontal: scale(9),
        margin: scale(5),
        alignSelf: 'center'
    },
})

export default styles
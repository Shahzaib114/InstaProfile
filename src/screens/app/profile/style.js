import { Platform, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9B897B",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(5)
    },
    scrollViewStyle: {
        width: '100%',
        backgroundColor: 'black'
    },
    contentContainer: {
        flexGrow: 1,
    },
    topConatiner: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scale(10)
    },
    nameContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameStyle: {
        fontSize: scale(17),
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        alignSelf: 'center'
    },
    iconContainer: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    profileContainer: {
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: scale(10),
        marginTop: scale(10),
        flexDirection: 'row',

    },
    profileImage: {
        width: scale(80),
        height: scale(80),
    },
    profileImgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: scale(40)

    },
    numbersInfo: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    numbersTxt: {
        alignSelf: 'center',
        fontSize: scale(15),
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        alignSelf: 'center',
        textAlign: 'center'
    },
    descriptionContainer: {
        paddingHorizontal: scale(15),
        marginVertical: scale(5)
    },
    descriptionTxt: {
        fontSize: scale(15),
        color: 'white',
        fontFamily: 'Montserrat-Medium',
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: scale(15),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    buttonTxtOpacity: {
        width: '43%',
        backgroundColor: 'grey',
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    editProfileTxt: {
        fontSize: scale(13),
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        padding: scale(5)
    },
    addUserOpacity: {
        backgroundColor: 'grey',
        padding: scale(5),
        borderRadius: scale(5)
    },
    storiesContainer: {
        width: '100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft: scale(10),
        margin: scale(5),
        position:'relative'
    },
    addStoryopacity: {
        borderWidth: 1,
        width: scale(65),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(50),
        borderColor: '#fff',
        position:'relative'
    },
    addStoryIcon: {
        margin: scale(15),
        borderRadius: scale(50),
    },
    storiesView: {
        width: '80%',
        justifyContent:'center',
        alignItems:'center',
        left: scale(5)
    },
    storyImg:{
        width: scale(70),
        height: scale(70),
        marginHorizontal: scale(5),
        borderRadius: scale(50)
    }

})
export default styles
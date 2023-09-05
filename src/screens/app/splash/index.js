import React, { useEffect } from 'react';
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';
import styles from './style';


const UserAppSplash = ({ navigation }) => {

    useEffect(() => {
        sessionCheck()
    }, []);

    const sessionCheck = (result) => {
        setTimeout(async () => {
            navigation.replace('InstaProfile')
        }, 2000);
    }


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../assets/images/foureSplash.png')}
                resizeMode='cover'
                style={styles.parentImage}
            >
                <View>
                    <Image source={require('../../../assets/images/welcomeback.png')}
                        resizeMode='contain'
                        style={styles.imageStyle} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default UserAppSplash;
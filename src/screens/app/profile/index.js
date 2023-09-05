import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import { scale } from 'react-native-size-matters';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './style';
const InstaProfile = () => {
    const dummyImages = [
        {
            id: 1,
            imageUrl: require('../../../assets/images/imgOne.jpg'),
        },
        {
            id: 2,
            imageUrl: require('../../../assets/images/imgOne.jpg'),
        },
        {
            id: 3,
            imageUrl: require('../../../assets/images/imgOne.jpg'),
        },
        {
            id: 4,
            imageUrl: require('../../../assets/images/imgOne.jpg'),
        },
        {
            id: 5,
            imageUrl: require('../../../assets/images/imgOne.jpg'),
        },
        {
            id: 6,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        {
            id: 7,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        {
            id: 8,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        {
            id: 9,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        {
            id: 10,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        {
            id: 11,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        {
            id: 12,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        {
            id: 13,
            imageUrl: require('../../../assets/images/listIcon.png'),
        },
        // Add more images as needed
    ];
    return (
        <View style={styles.container}>
            <ScrollView
                automaticallyAdjustKeyboardInsets
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewStyle}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.topConatiner}>
                    <TouchableOpacity style={styles.nameContainer}>
                        <Text style={styles.nameStyle}>
                            Shahzaib__Younus
                        </Text>
                        <AntDesign name='down'
                            size={scale(20)}
                            color={'#fff'}
                            style={styles.inputIconStyle}
                        />
                    </TouchableOpacity>


                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <FontAwesome name='plus-square-o'
                                size={scale(30)}
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name='menu'
                                size={scale(30)}
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.profileContainer}>
                    <TouchableOpacity style={styles.profileImage}>
                        <Image
                            source={require('../../../assets/images/imgOne.jpg')}
                            style={styles.profileImgStyle}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <View style={styles.numbersInfo}>
                        <TouchableOpacity>
                            <Text style={styles.numbersTxt}>
                                45{'\n'}
                                Posts
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbersTxt}>
                                204{'\n'}
                                Following
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.numbersTxt}>
                                216{'\n'}
                                Follower
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTxt}>
                        Shahzaib Younus{'\n'}
                        Software Engineer{'\n'}
                        Graduated in 2k22
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.buttonTxtOpacity}>
                        <Text style={styles.editProfileTxt}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTxtOpacity}>
                        <Text style={styles.editProfileTxt}>
                            Share Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addUserOpacity}>
                        <AntDesign name='adduser'
                            size={scale(20)}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.storiesContainer}>
                    <TouchableOpacity style={styles.addStoryopacity}>
                        <Ionicons name='add'
                            size={scale(30)}
                            color={'#fff'}
                            style={styles.addStoryIcon}
                        />
                    </TouchableOpacity>
                    <View style={styles.storiesView}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={dummyImages}
                            renderItem={(i) => {
                                return (
                                    <TouchableOpacity>
                                        <Image
                                            source={i.item.imageUrl}
                                            style={styles.storyImg}
                                            resizeMode='contain'
                                        />
                                    </TouchableOpacity>
                                )

                            }}
                        >
                        </FlatList>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default InstaProfile;
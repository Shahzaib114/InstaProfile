import React from 'react';
import { FlatList, Image, View } from 'react-native';
import styles from './style';

function UserProfile() {
    const dummyImages = [
        {
            id: 1,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 2,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 3,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 4,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 5,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 6,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 7,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 8,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 9,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 10,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 11,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 12,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        {
            id: 13,
            imageUrl: require('../../../../assets/images/listIcon.png'),
        },
        // Add more images as needed
    ];
    return (
        <View style={styles.container}>
            <FlatList
                data={dummyImages}
                numColumns={3}
                renderItem={(i) => {
                    return (
                        <Image
                            source={i.item.imageUrl}
                            style={styles.image}
                            resizeMode='contain'
                        />
                    )

                }}
            >
            </FlatList>
        </View>
    )
}

export default UserProfile
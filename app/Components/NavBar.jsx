import React from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { StylesMenu } from '../Styles/IndexStyles'

//-----
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
//----

const image = require("../../assets/images/myIcon.png");

export default function NavBar(props){
    const { navigation } = props;
    return (
        <View style={styles.navContainer}>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.iconLeft} onPress={() => navigation.navigate('MenuPrincipal')}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={[StylesMenu.tinyLogo, { width: 50, height: 50 }]}
                        source={image}
                    />
                    <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>Jose Luis Developer</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        height: HEADER_HEIGHT,
        backgroundColor: 'black'
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
})

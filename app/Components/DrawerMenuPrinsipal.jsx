import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import { StylesMenu, Styles } from '../Styles/IndexStyles';
import { Entypo } from '@expo/vector-icons';

const image = require("../../assets/images/myIcon.png");
const COLOR_bOTON = '#292d2e'

//estudios
//otras avilidades

const MyBotonDrawer = (props) => {
    const { title } = props;
    return (
        <View style={styles.botonDrawer}>
            <Entypo name="book" size={24} color="white" />
            <Text style={{ color: 'white' }}>{title}</Text>
        </View>
    )
}

export default function DrawerMenuPrinsipal() {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={{ uri: 'https://okdiario.com/img/2020/09/15/el-ano-en-el-que-se-vio-una-aurora-boreal-en-espana-655x368.jpg' }}
                style={{ height: 150, width: '100%' }}
            >
                <Image
                    style={[StylesMenu.tinyLogo, { width: 70, height: 70 }]}
                    source={image}
                />
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Desarrollador Junior</Text>
                    <Text style={{ color: 'white', fontSize: 13 }}>bosito321@gmail.com</Text>
                </View>
            </ImageBackground>
            
            <MyBotonDrawer title={"Estudios"} />
        </View>
    )
}

const styles = StyleSheet.create({
    botonDrawer: {
        flex: 0,
        backgroundColor: COLOR_bOTON,
        width: '92%',
        height: 40,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
})
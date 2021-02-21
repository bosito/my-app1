import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { StylesMenu, Styles } from '../Styles/IndexStyles';
import { Entypo, AntDesign } from '@expo/vector-icons';

const image = require("../../assets/images/myIcon.png");
const COLOR_bOTON = '#2b2b24'

//estudios
//otras avilidades

const MyBotonDrawer = (props) => {
    const { titleBoton, handelPress, iconBoton } = props;

    return (
        <TouchableOpacity onPress={handelPress}>
            <View style={styles.botonDrawer}>
                {iconBoton}
                <Text style={{ color: 'white', marginHorizontal: 25, fontStyle: 'italic' }}>{titleBoton}</Text>
            </View>
        </TouchableOpacity>
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
                    <Text style={{ color: 'white', fontSize: 17 }}>Developer Junior</Text>
                    <Text style={{ color: 'white', fontSize: 13 }}>bosito321@gmail.com</Text>
                </View>
            </ImageBackground>

            <MyBotonDrawer titleBoton={"Estudios"}
                iconBoton={<Entypo name="book" size={24} color="white" />}
            />

            <MyBotonDrawer titleBoton={"Otras habilidades"}
                iconBoton={<AntDesign name="star" size={24} color="white" />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    botonDrawer: {
        flex: 0,
        backgroundColor: COLOR_bOTON,
        width: '92%',
        height: 40,
        marginVertical: 5,
        marginHorizontal: 6,
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        elevation: 10,
    },
})
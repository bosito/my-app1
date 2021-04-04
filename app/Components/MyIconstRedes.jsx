import React from 'react'
import { View, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign, FontAwesome, Octicons, } from '@expo/vector-icons';

export default function MyIconstRedes(props) {

    const { navigation } = props;
    const COLOR_ICON = '#04d3fa';

    const handleWhatsappPress = async () => {
        await Linking.openURL("http://wa.me/9981801932")
    }

    const handleEailPress = async () => {
        //en Ios la separacion es con & en lugar de ?
        await Linking.openURL("mailto:bosito321@gmail.com?subject=Asunto Posible Trabajo&body=Este es tu mensaje, gracias por contactarme.")
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

            <TouchableOpacity onPress={() => navigation.navigate('Facebook')}>
                <FontAwesome name="facebook-square" size={40} color={COLOR_ICON} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleEailPress}>
                <Octicons name="mail" size={40} color={COLOR_ICON} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleWhatsappPress} >
                <FontAwesome name="whatsapp" size={40} color={COLOR_ICON} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Google')}>
                <MaterialCommunityIcons name="google-chrome" size={40} color={COLOR_ICON} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Gith')}>
                <AntDesign name="github" size={40} color={COLOR_ICON} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('IbisPaint')}>
                <FontAwesome name="paint-brush" size={40} color={COLOR_ICON} />
            </TouchableOpacity>

        </View>
    )
}
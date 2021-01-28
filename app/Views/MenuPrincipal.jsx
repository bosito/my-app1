import React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, Image } from 'react-native';
import * as Animatable from "react-native-animatable";
import { LinearGradient } from 'expo-linear-gradient';
import { MyBoton } from '../Components/IndexComonent';
import Styles from '../Styles/Styles';


export default function MenuPrincipal(props) {

    const { navigation } = props;
    const txtPricipal = `Hola mi nombre es jose luis y soy un desarrollador junior y este es mi prtafolio.`;
    const image = require("../../assets/images/myIcon.png");

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <View style={Styles.container}>
                    <Animatable.Image
                        style={Styles.tinyLogo}
                        source={image}
                        animation={'zoomIn'}
                        direction={'normal'}
                        duration={2000}
                    />
                    <Animatable.Text style={Styles.txtGlobal}
                        animation={'fadeIn'}
                        direction={'normal'}
                        duration={3000}
                    >
                        {txtPricipal}
                    </Animatable.Text>

                    <MyBoton title={'Ejercicios Javascript'} onPress={() => navigation.navigate('exampleSimples')} navigation={navigation} />
                </View>
                <View>

                </View>

            </View>
        </ScrollView>
    )
}
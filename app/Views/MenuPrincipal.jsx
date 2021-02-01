import React, { useRef } from 'react';
import {
    View, Text, ScrollView, ImageBackground, StyleSheet,
    Image, TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import { StylesMenu, Styles } from '../Styles/IndexStyles';
import { MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";
import { LinearGradient } from 'expo-linear-gradient';
import { MyBoton } from '../Components/IndexComonent';


export default function MenuPrincipal(props) {

    const { navigation } = props;
    const txtPricipal = `Jose Luis
    desarrollador junior.`;
    const txtLema = `soy un desarrollador algo nuevo pero con la idea de nunca parar de aprender y este es mi potafolio.`;
    const image = require("../../assets/images/myIcon.png");
    const fondoPerfil = require("../../assets/images/fondoPerfil.png");
    const imageReact = require("../../assets/images/reactNativeIcon.png");
    const imgPriApp = require("../../assets/images/botonPimApp.png");
    const imgbotonSecond = require("../../assets/images/fondoCumpleaños.png");


    const IconReg = useRef();
    const BotonRef = useRef();
    const BotonRef2 = useRef();

    //pasar este componente para hacerlo reutilizable
    const Personal_Boton = (props) => {

        const { imageFondo, viewName, txtDescripcion, txtTilteImage, reFerencia } = props;

        const myOnPress = () => {
            reFerencia.current.bounceIn();
            setTimeout(() => {
                navigation.navigate(viewName);
            }, 1000);
        }

        return (
            <>
                <TouchableOpacity onPress={myOnPress}>
                    <Animatable.View ref={reFerencia} animation={'fadeInRight'} direction={'normal'} duration={2000} style={{ alignItems: 'center', backgroundColor: 'white', elevation: 5, marginVertical: 10, }} >
                        <ImageBackground source={imageFondo} style={StylesMenu.botonApp}>
                            <View style={{ width: '100%', height: 30, backgroundColor: 'rgba(18, 22, 44, 0.5)', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 19, fontStyle: 'italic' }}>
                                    {txtTilteImage}
                                </Text>
                            </View>
                        </ImageBackground>
                        <Text style={{ color: 'gray', fontSize: 13, fontStyle: 'italic' }}>{txtDescripcion}</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </>
        )
    };

    const MyIconstRedes = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity>
                    <FontAwesome name="facebook-square" size={50} color="#04d3fa" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <AntDesign name="youtube" size={50} color="#04d3fa" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="google-chrome" size={50} color="#04d3fa" />
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={Styles.container}>

                <ImageBackground source={fondoPerfil} style={StylesMenu.fondoPerfil}>
                    <TouchableWithoutFeedback onPress={() => IconReg.current.pulse()}>
                        <Animatable.Image
                            ref={IconReg}
                            style={StylesMenu.tinyLogo}
                            source={image}
                            animation={'zoomIn'}
                            direction={'normal'}
                            duration={2000}
                        />
                    </TouchableWithoutFeedback>

                    <Animatable.Text style={[Styles.txtGlobal, { color: 'white', }]}
                        animation={'fadeIn'}
                        direction={'normal'}
                        duration={8000}
                    >
                        {txtPricipal}
                    </Animatable.Text>
                </ImageBackground>

                <Animatable.View style={styles.myCard} animation={'bounceInLeft'} direction={'normal'} duration={7000}>
                    <Text style={{ fontStyle: 'italic' }}>{txtLema}</Text>
                </Animatable.View>

                <MyBoton title={'Ejercicios Javascript'} onPress={() => navigation.navigate('exampleSimples')} navigation={navigation} />

                <Personal_Boton reFerencia={BotonRef}
                    imageFondo={imgPriApp} viewName={'exampleUdemy'}
                    txtDescripcion={'Prestamos'}
                    txtTilteImage={'Cotizador'}
                />

                <Personal_Boton reFerencia={BotonRef2}
                    imageFondo={imgbotonSecond} viewName={'exampleUdemy'}
                    txtDescripcion={'Recordatorio de Compleaños'}
                    txtTilteImage={'Cumpleaños'}
                />

                <View style={Styles.myFooder}>

                    <Text style={[Styles.txtGlobal, { color: 'white', }]}>Sigueme en mis redes Sociales</Text>

                    <MyIconstRedes />

                    <Text style={[Styles.txtGlobal, { color: 'white', }]}>Power React-Native</Text>
                    <View style={styles.contenFoderLogo}>
                        <Animatable.Image
                            style={styles.tinyLogo}
                            source={imageReact}
                            animation={'rotate'}
                            direction={'normal'}
                            duration={9000}
                            resizeMode={'stretch'}
                            iterationCount={'infinite'}
                        />
                        <Text style={styles.txtFoder}>Creador Jose Luis Jimenez Vazquez</Text>
                    </View>
                </View>

            </View>

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    myCard: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: -40,
        margin: 10,
        elevation: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 10,
    },
    contenFoderLogo: {
        flex: 0,
        alignItems: 'center',
    },
    txtFoder: {
        fontSize: 10,
        color: 'white',
        marginBottom: 10
    },
})


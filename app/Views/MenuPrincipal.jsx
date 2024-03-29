import React, { useRef, useState, useEffect } from 'react';
import {
    View, Text, StyleSheet,
    TouchableWithoutFeedback, TouchableOpacity,
    Dimensions, DrawerLayoutAndroid, Image
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { useNavigation } from '@react-navigation/native';
import { StylesMenu, Styles } from '../Styles/IndexStyles';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";
import { registerForPushNotificationsAsync } from "../Notifications/Notifications";
import { Boton_Image, DrawerMenuPrinsipal, MyIconstRedes } from '../Components/IndexComonent';

//---------
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
//----------

export default function MenuPrincipal() {

    useEffect(() => {
        registerForPushNotificationsAsync()
    }, [])

    const txtLema = `soy un desarrollador algo nuevo pero con la idea de nunca parar de aprender y este es mi potafolio.`;

    const image = require("../../assets/images/myIcon.png");
    const fondoPerfil = require("../../assets/images/fondoPerfil.png");
    const imageReact = require("../../assets/images/reactNativeIcon.png");
    const imgPriApp = require("../../assets/images/botonPimApp.png");
    const imgbotonSecond = require("../../assets/images/fondoCumpleaños.png");
    const imgbotonThree = require("../../assets/images/CertificadoFondo.png");
    const imgbotonFuor = require("../../assets/images/SecretFondo.png");

    const IconReg = useRef();
    const BotonRef = useRef();
    const BotonRef2 = useRef();
    const BotonRef3 = useRef();
    const BotonRef4 = useRef();
    const DrawerNavigationReact = useRef();
    const navigation = useNavigation()

    const RenderNavBar = () => {
        return (
            <View style={stylesNav.navContainer}>
                <View style={stylesNav.navBar}>
                    <TouchableOpacity style={stylesNav.iconLeft} onPress={() => navigation.navigate('Login')}>
                        <Ionicons name="arrow-back" size={30} color="white" />
                    </TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={[StylesMenu.tinyLogo, { width: 50, height: 50 }]}
                            source={image}
                        />
                        <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>Jose Luis Developer</Text>
                    </View>

                    <TouchableOpacity style={stylesNav.iconRight}
                        onPress={() => DrawerNavigationReact.current.openDrawer()}
                    >
                        <EvilIcons name="navicon" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    const title = () => {

        const txtPricipal = `Jose Luis 
    desarrollador junior.`;

        const AuctionPress = () => {
            IconReg.current.pulse();
            setTimeout(() => {
                DrawerNavigationReact.current.openDrawer();
            }, 1000);
        }

        return (
            <>
                <TouchableWithoutFeedback onPress={AuctionPress}>
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
            </>
        );
    };

    const renderContent = () => {
        return (
            <View style={Styles.container}>

                <View style={{ width: '100%', height: 50, backgroundColor: 'black', }} />

                <Animatable.View style={styles.myCard} animation={'bounceInLeft'} direction={'normal'} duration={7000}>
                    <Text style={{ fontStyle: 'italic' }}>{txtLema}</Text>
                </Animatable.View>

                <Boton_Image reFerencia={BotonRef}
                    imageFondo={imgPriApp} viewName={'exampleUdemy'}
                    txtDescripcion={'Prestamos'} navigation={navigation}
                    txtTilteImage={'Cotizador'}
                />

                <Boton_Image reFerencia={BotonRef2}
                    imageFondo={imgbotonSecond} viewName={'exampleUdemyApp2'}
                    txtDescripcion={'Recordatorio de Compleaños'} navigation={navigation}
                    txtTilteImage={'Cumpleaños'}
                />

                <Boton_Image reFerencia={BotonRef3}
                    imageFondo={imgbotonThree} viewName={'exampleCertificados'}
                    txtDescripcion={'Cursos Terminados'} navigation={navigation}
                    txtTilteImage={'Certificados'}
                />

                <Boton_Image reFerencia={BotonRef4}
                    imageFondo={imgbotonFuor} viewName={'exampleUdemyApp2'}
                    txtDescripcion={'Transporte'} navigation={navigation}
                    txtTilteImage={'Proyectos Privados'}
                />

                <View style={Styles.myFooder}>
                    <Text style={[Styles.txtGlobal, { color: 'white', }]}>
                        Sigueme en mis redes Sociales
                    </Text>

                    <MyIconstRedes navigation={navigation} />

                    <Text style={[Styles.txtGlobal, { color: 'white', }]}>
                        Power React-Native
                    </Text>

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
                        <Text style={styles.txtFoder}>
                            Creador Jose Luis Jimenez Vazquez
                            </Text>
                    </View>
                </View>

            </View>
        )
    }

    //compoent principal
    return (
        <DrawerLayoutAndroid ref={DrawerNavigationReact}
            drawerWidth={280}
            drawerPosition={"left"}
            renderNavigationView={()=><DrawerMenuPrinsipal navigation={navigation}/>}
            drawerBackgroundColor="#24241c"
        >
            <ReactNativeParallaxHeader
                headerMinHeight={HEADER_HEIGHT}
                headerMaxHeight={270}
                extraScrollHeight={50}
                navbarColor="black"
                titleStyle={stylesNav.titleStyle}
                title={title()}
                backgroundImage={fondoPerfil}
                backgroundImageScale={1}
                renderNavBar={RenderNavBar}
                renderContent={renderContent}
                scrollEventThrottle={50}
                //backgroundColor="black"
                //containerStyle={stylesNav.container}
                innerContainerStyle={stylesNav.container}
                alwaysShowTitle={false}
                alwaysShowNavBar={false}
                scrollViewProps={{
                    onScrollBeginDrag: () => null,
                    onScrollEndDrag: () => null,
                }}
            />
        </DrawerLayoutAndroid>
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
});

//style navigator 
const stylesNav = StyleSheet.create({
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
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
});
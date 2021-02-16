import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, StatusBar } from 'react-native';
import * as Animatable from "react-native-animatable";
import { MyBoton } from '../Components/IndexComonent';
import { StylesLogin, Styles, } from '../Styles/IndexStyles'
import LottieView from 'lottie-react-native';

export default function Login(props) {

    const { navigation } = props;
    const InputRef = useRef();
    const IconReg = useRef();
    const [mensaje, setMensaje] = useState("");
    const image = require("../../assets/images/reactNativeIcon.png");
    const [colorText, setColorText] = useState(true);
    //borrar la contraseña xd
    const [dataInput, setData] = useState({
        userName: "pepe",
        contraseña: "123",
    });

    const dataTextInput2 = (txt) => {
        let dato = txt;
        setData({ ...dataInput, userName: dato });
    };

    const dataTextInput1 = (txt) => {
        let dato = txt;
        setData({ ...dataInput, contraseña: dato });
    };

    const verifiContraseña = () => {
        let myContraseña = "123"
        let myUserName = 'pepe'

        if (dataInput.contraseña && dataInput.userName) {
            if (dataInput.contraseña === myContraseña && dataInput.userName === myUserName) {
                setMensaje("Cargando...");
                setColorText(true);
                setTimeout(() => {
                    navigation.navigate('MenuPrincipal');
                }, 1000);
            } else {
                setMensaje("Algo salio mal");
                setColorText(false);
            }
        } else {
            setMensaje("Rellena Todos los Datos");
            setColorText(false);
        }

    }


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#24241c'} />

            <View style={StylesLogin.container}>

                <View style={StylesLogin.containerSuperior}>
                    <TouchableWithoutFeedback onPress={() => IconReg.current.swing()}>
                        <Animatable.Image
                            ref={IconReg}
                            style={StylesLogin.tinyLogo}
                            source={image}
                            animation={'zoomIn'}
                            direction={'normal'}
                            duration={2000}
                            easing={'ease-in'}
                            resizeMode={'stretch'}
                        />
                    </TouchableWithoutFeedback>
                    <Animatable.Text style={[Styles.txtGlobal, { color: "white", fontStyle: 'italic' }]}
                        animation={'flipInX'}
                        duration={5000}
                    >
                        Mi Portafolio
                    </Animatable.Text>
                </View>

                <Animatable.View style={StylesLogin.containerData} animation={'fadeInUpBig'} duration={4000}>
                    <TextInput
                        style={StylesLogin.input}
                        placeholder={"Nombre de usuario"}
                        onChangeText={dataTextInput2}
                        keyboardType={'default'}
                        maxLength={10}
                        onSubmitEditing={() => InputRef.current.focus()}

                    />
                    <TextInput
                        ref={InputRef}
                        style={StylesLogin.input}
                        placeholder={"Ingresa la Contraseña"}
                        onChangeText={dataTextInput1}
                        keyboardType={'number-pad'}
                        maxLength={6}
                    />
                    <View style={StylesLogin.myInputConten}>
                        <Text style={{ color: colorText ? 'white' : 'red' }}>
                            {mensaje}
                        </Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <MyBoton title={'Comprobar Contraseña'} onPress={verifiContraseña} />
                    </View>
                </Animatable.View>
            </View>
        </KeyboardAvoidingView>
    )
}
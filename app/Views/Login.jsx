import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, StatusBar } from 'react-native';
import * as Animatable from "react-native-animatable";
import { MyBoton } from '../Components/IndexComonent'
import LottieView from 'lottie-react-native';
import Styles from "../Styles/Styles";

export default function Login(props) {

    const { navigation } = props;
    const InputRef = useRef();
    const IconReg = useRef();
    const [mensaje, setMensaje] = useState("");
    const image = require("../../assets/images/reactNativeIcon.png");
    const [colorText, setColorText] = useState(true);
    const [dataInput, setData] = useState({
        userName: "",
        contraseña: "",
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

            <View style={styles.container}>

                <View style={styles.containerSuperior}>
                    <TouchableWithoutFeedback onPress={() => IconReg.current.swing()}>
                        <Animatable.Image
                            ref={IconReg}
                            style={styles.tinyLogo}
                            source={image}
                            animation={'zoomIn'}
                            direction={'normal'}
                            duration={2000}
                            easing={'ease-in'}
                            resizeMode={'stretch'}
                        />
                    </TouchableWithoutFeedback>
                </View>

                <Animatable.View style={styles.containerData} animation={'slideInUp'} duration={4000}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Nombre de usuario"}
                        onChangeText={dataTextInput2}
                        keyboardType={'default'}
                        maxLength={10}
                        onSubmitEditing={() => InputRef.current.focus()}

                    />
                    <TextInput
                        ref={InputRef}
                        style={styles.input}
                        placeholder={"Ingresa la Contraseña"}
                        onChangeText={dataTextInput1}
                        keyboardType={'number-pad'}
                        maxLength={6}
                    />
                    <View style={styles.myInputConten}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24241c'
    },
    containerSuperior: {
        flex: 0.5,
        alignItems: 'center',
    },
    containerData: {
        flex: 0.5,
        alignItems: 'center',
        backgroundColor: '#04d3fa',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    input: {
        width: "80%",
        marginTop: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: 'white'
    },
    tinyLogo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 100,
    },
    myInputConten: {
        width: "80%",
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: 'rgba(18, 22, 44, 0.7)'
    },
})

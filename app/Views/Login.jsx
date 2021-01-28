import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as Animatable from "react-native-animatable";
import LottieView from 'lottie-react-native';
import Styles from "../Styles/Styles";

export default function Login() {

    const [dataInput, setData] = useState({
        userName: "",
        contraseña: "",
    });
    const InputRef = useRef();
    const [mensaje, setMensaje] = useState("");
    const image = require("../../assets/images/reactNativeIcon.png");


    const dataTextInput2 = (txt) => {
        let dato = parseInt(txt);
        setData({ ...dataInput, hora: dato });
    };

    const dataTextInput1 = (txt) => {
        let dato = parseInt(txt);
        setData({ ...dataInput, edad: dato });
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerSuperior}>
                <Animatable.Image
                    style={Styles.tinyLogo}
                    source={image}
                    animation={'zoomIn'}
                    direction={'normal'}
                    duration={2000}
                    easing={'ease-in'}
                    resizeMode={'stretch'}
                />
            </View>

            <Animatable.View style={styles.containerData} animation={'fadeInUpBig'} duration={2000}>
                <Text>hola que hay</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Nombre de usuario"}
                    onChangeText={dataTextInput2}
                    keyboardType={'default'}
                    maxLength={10}
                    onSubmitEditing={() => { InputRef.current.focus() }}

                />
                <TextInput
                    ref={InputRef}
                    style={styles.input}
                    placeholder={"Ingresa la Contraseña"}
                    onChangeText={dataTextInput1}
                    keyboardType={'number-pad'}
                    maxLength={2}
                    //onSubmitEditing={validarCliente}
                />
                <View style={styles.myInputConten}></View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24241c'
    },
    containerSuperior: {
        flex: 0.4,
        alignItems: 'center',
    },
    containerData: {
        flex: 0.7,
        alignItems: 'center',
        backgroundColor: '#04d3fa',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    input: {
        width: "80%",
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "gray",
        backgroundColor: 'white'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 10,
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

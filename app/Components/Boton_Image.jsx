import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from "react-native-animatable";
import StylesComponent from "../Styles/StylesComponent";

export default function Boton_Image(props) {

    const { imageFondo, viewName, txtDescripcion, txtTilteImage, reFerencia, navigation } = props;

    const txterror = `Para visualizar el boton coloque una imagen de fondo`
    const txtErrorReferencia = "para una segunda Animacion Coloque una Variable de Referencia (useRef)"

    const myOnPress = () => {
        if (reFerencia) {
            reFerencia.current.bounceIn();
            setTimeout(() => {
                navigation.navigate(viewName);
            }, 1000);
        } else {
            return (
                <Text style={styles.txtError}>{txtErrorReferencia}</Text>
            )
        }
    }

    if (imageFondo) {
        return (
            <>
                <TouchableOpacity onPress={myOnPress}>
                    <Animatable.View ref={reFerencia} animation={'fadeInRight'}
                        direction={'normal'} duration={2000} style={styles.animatableView}
                    >
                        <ImageBackground source={imageFondo} style={StylesComponent.botonApp}>
                            <View style={styles.containerTxtTilteImage}>
                                <Text style={[styles.txtTilteImageStyle]}>
                                    {txtTilteImage}
                                </Text>
                            </View>
                        </ImageBackground>
                        <Text style={[styles.txtDescripcionStyle]}>{txtDescripcion}</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </>
        )
    } else {
        return (
            <Text style={styles.txtError}>{txterror}</Text>
        )
    }

}

const styles = StyleSheet.create({
    txtError: {
        color: 'red',
        margin: 10,
        fontSize: 20
    },
    txtDescripcionStyle: {
        color: 'gray',
        fontSize: 13,
        fontStyle: 'italic'
    },
    txtTilteImageStyle: {
        color: 'white',
        fontSize: 19,
        fontStyle: 'italic'
    },
    containerTxtTilteImage: {
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(18, 22, 44, 0.5)',
        alignItems: 'center'
    },
    animatableView: {
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        marginVertical: 10,
    },
})
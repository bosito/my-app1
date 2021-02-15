import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import * as Animatable from "react-native-animatable";
import StylesComponent from "../Styles/StylesComponent";

export default function Boton_Image(props) {

    const { imageFondo, viewName, txtDescripcion, txtTilteImage, reFerencia, navigation } = props;

    const txterror =`Para visualizar el boton coloque una imagen de fondo`
    const txtErrorReferencia = "para una segunda Animacion Coloque una Variable de Referencia (useRef)"

    const myOnPress = () => {
        if (reFerencia) {
            reFerencia.current.bounceIn();
            setTimeout(() => {
                navigation.navigate(viewName);
            }, 1000);
        } else {
            return(
                <Text style={{ color: 'red', margin: 10, fontSize: 20}}>{txtErrorReferencia}</Text>
            )
        }  

    }

    if (imageFondo) {
        return (
            <>
                <TouchableOpacity onPress={myOnPress}>
                    <Animatable.View ref={reFerencia} animation={'fadeInRight'} direction={'normal'} duration={2000} style={{ alignItems: 'center', backgroundColor: 'white', elevation: 5, marginVertical: 10, }} >
                        <ImageBackground source={imageFondo} style={StylesComponent.botonApp}>
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
    } else {
        return(
            <Text style={{ color: 'red', margin: 10, fontSize: 20}}>{txterror}</Text>
        )
    }
    
}

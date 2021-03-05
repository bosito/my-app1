import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function Boton_Icon(props) {
    const { image, info, title, handelOnPress } = props;

    if (!image || !info || !title) {
        console.error('Para Usar este componente es obligatorio usar una imagen, de preferencia con fondo tranparente')
    } else {
        return (
            <View style={styles.contenedorPadre}>
                <TouchableOpacity onPress={handelOnPress}>
                    <View style={styles.container} >
                        <View style={styles.card}>
                            <View style={{ flex: 1, padding: 5 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
                                <Text style={{ marginLeft: 5 }}>{info}</Text>
                                <Text style={{ marginTop: 15, fontWeight: 'bold', fontStyle: 'italic', fontSize: 13 }}>Ver Diplomas</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image source={image} style={styles.imagen} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenedorPadre: {
        width: '100%',
        height: 180,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: 300,
        height: '100%',
        justifyContent: 'flex-end'
    },
    card: {
        width: '100%',
        height: 130,
        backgroundColor: 'white',
        borderRadius: 7,
        elevation: 10,
        flexDirection: 'row'
    },
    imagen: {
        width: 130,
        height: 170,
        resizeMode: 'contain',
        marginTop: -60
    },
})


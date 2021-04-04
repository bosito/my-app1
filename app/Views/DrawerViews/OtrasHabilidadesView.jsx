import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Image, Button, } from 'react-native'

const MyHeder = () => {
    return (
        <View style={stylesHeder.container}>
            <Image style={stylesHeder.imageFondo}
                source={require('../../../assets//images/fondoPerfil.png')}
            />

            <Image style={{ width: 180, height: 180, marginTop: 90, borderRadius: 200, position: 'relative', borderColor: 'white', borderWidth: 3 }} resizeMode="cover"
                source={require('../../../assets//images/myIcon.png')}
            />
        </View>
    )
}

function OtrasHabilidadesComponent() {
    return (
        <View>
            <MyHeder />
        </View>
    )
}

export default class OtrasHabilidadesView extends Component {
    render() {
        
        return (
            <OtrasHabilidadesComponent />
        )
    }
}


const styles = StyleSheet.create({

})
const stylesHeder = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        alignItems: 'center'
    },
    imageFondo: {
        backgroundColor: 'red',
        width: '95%',
        height: 200,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute'
    }

})

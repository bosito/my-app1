import React from 'react'
import { View, Text } from 'react-native'
import { MyBoton } from '../../Components/IndexComonent';
import Styles from '../../Styles/Styles';

export default function MenuEjercicios(props) {

    const { navigation } = props;
    const txtPricipal = "Hola esta app es para hacer ejercicios de JavaScript y de React-Native en conjunto";

    return (
        <View style={Styles.container}>
            <Text style={Styles.txtGlobal} >{txtPricipal}</Text>
            <MyBoton title={'Parallax Header'} onPress={() => navigation.navigate('example1')} navigation={navigation} />
            <MyBoton title={'ejercicio2'} onPress={() => navigation.navigate('example2')} navigation={navigation} />
            <MyBoton title={'ejercicio3'} onPress={() => navigation.navigate('example3')} navigation={navigation} />
            <MyBoton title={'POO'} onPress={() => navigation.navigate('example4')} navigation={navigation} />
            <MyBoton title={'Reanimated 1'} onPress={() => navigation.navigate('example5')} navigation={navigation} />
        </View>
    )
}

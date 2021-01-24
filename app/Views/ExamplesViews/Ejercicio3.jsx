import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MyBoton } from "../../Components/IndexComonent";
import Styles from "../../Styles/Styles";

export default function Ejercicio3() {

    let txtPrincipal = `Realiza una lista de hacistencia`;

    let puntosImportantes = `
    *Crea mini-sistema para registrar
      precentes (p) y Ausentes (A).
    *El proceso se termina en 10 (mejor x dias) dias y se muestran los resultados
    *Maximo 10% de Ausencia (condicion).
    *solo son 10 alumnos.`;

    const [alumnosTotales, setAlumnosTotales] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const [dataInput, setData] = useState({
        cantidad: "",
        nombre: '',
    });

    const dataTextInput1 = (txt) => {
        let dato = parseInt(txt);
        setData({ ...dataInput, cantidad: dato });
    };

    const dataTextInput2 = (txt) => {
        let dato = parseInt(txt);
        setData({ ...dataInput, nombre: dato });
    };

    const test = () =>{
        let cantidad = dataInput.cantidad;
        let NombreAlumnos = alumnosTotales;
        let nombre = dataInput.nombre;

        for(let i= 0;i < cantidad; i++){
            NombreAlumnos[i] = [nombre + (i+1),0];
        }
        console.log(NombreAlumnos);
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.txtGlobal}>{txtPrincipal}</Text>
            <Text>{puntosImportantes}</Text>
            <Text style={Styles.txtGlobal}>¿Cuantos alumnos son?</Text>
            <TextInput
                style={styles.input}
                placeholder={"Numero de alumnos"}
                onChangeText={dataTextInput1}
            />
            <MyBoton onPress={test} title={'press me'}/>
            <TextInput
                style={styles.input}
                placeholder={"Nombe de los alumnos"}
                onChangeText={dataTextInput2}
            />
            <Text>{mensaje}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "gray",
    },
});


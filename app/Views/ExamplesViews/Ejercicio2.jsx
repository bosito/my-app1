import React, { useState, useRef } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { MyBoton } from "../../Components/IndexComonent";
import Styles from "../../Styles/Styles";

export default function Ejercicio2() {
    let txtPrincipal = `Hacer un programa que deje entar a la fiesta solo a las personas que sean mayor de edad
    y el primero que entre despues de las 2am non paga`;

    let puntosImportantes = `
    * Dejar pasar Solo a los +18
    *Solo el primero despues de las 12 NO PAGA.
    ---------------------------------------
    *Crear Una calculadora simple.`;

    const [entriFree, setEntriFree] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const InputRef = useRef();
    const [dataInput, setData] = useState({
        edad: "",
        hora: "",
    });

    const dataTextInput1 = (txt) => {
        let dato = parseInt(txt);
        setData({ ...dataInput, edad: dato });
    };

    const dataTextInput2 = (txt) => {
        let dato = parseInt(txt);
        setData({ ...dataInput, hora: dato });
    };

    const validaHora = (time) => {
        if (time) {
            if (time < 25) {
                if (time >= 14 && time < 19 && entriFree == false) {
                    setMensaje("Increible puedes pasar gratis");
                    setEntriFree(true);
                } else {
                    setMensaje(`Pasa pero paga la hora  es: ${time} `);
                }
            } else {
                setMensaje(`Esa hora no existe `);
            }
        } else {
            setMensaje(`Este Dato es obligatorio`);
        }
    };

    const validarCliente = () => {
        let edad = dataInput.edad;
        let hora = dataInput.hora;

        if(edad){
            if (edad >= 18) {
                validaHora(hora)
            } else {
                setMensaje("no eres mayor de edad, No pasas");
            }
        }else{
            setMensaje("Rellena todos los datos antes de continuar");
        }
       
    };

    return (
        <ScrollView>
            <View style={Styles.container}>
                <Text style={Styles.txtGlobal}>{txtPrincipal}</Text>
                <Text>Puntos Inportantes</Text>
                <Text>{puntosImportantes}</Text>
                <Text>Hora de entrada Formato(24hrs)</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"la hora es"}
                    onChangeText={dataTextInput2}
                    keyboardType={'number-pad'}
                    maxLength={2}
                    onSubmitEditing={() => { InputRef.current.focus() }}

                />
                <Text>ingresa tu edad</Text>
                <TextInput
                    ref={InputRef}
                    style={styles.input}
                    placeholder={"tu edad es"}
                    onChangeText={dataTextInput1}
                    keyboardType={'number-pad'}
                    maxLength={2}
                    onSubmitEditing={validarCliente}
                />
                <MyBoton title={"press me"} onPress={validarCliente} />
                <Text>{mensaje}</Text>
            </View>
        </ScrollView>
    );
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

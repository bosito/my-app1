import React from 'react'
import Styles from '../../Styles/Styles';
import { View, Text } from 'react-native'

class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Hola soy un ${ this.especie } tengo ${ this.edad }años 
        y soy de color ${ this.color}`;
    }
    //metodo del objeto;

    verInfo() { 
        let info = this.info;
        return info;
    }

}

//Erencias

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar(){
        let accion = 'WoW';
        return accion;
    }
}

//static

class Gato extends Animal{
    constructor(especie,edad,color,colorAlas){
        super(especie,edad,color);
        this.colorAlas = colorAlas;
    }
}

let gato = new  Gato('gatito',5,'blanco-negro','pinto');
let perro2 = new Perro('canino', 20, 'cafe','chihuahua');

//perro.verInfo();
//let info = perro2.verInfo();
let info = gato.verInfo();
//let info = perro2.ladrar();

export default function Ejercicio4() {

    let txtPrincipal = `Practica de la programacion orientada a objetos`;
    return (
        <View>
            <Text style={Styles.txtGlobal}>{txtPrincipal}</Text>
            <Text>{info}</Text>
        </View>
    )
}

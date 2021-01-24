import React, { useRef, useState } from "react";
import { MyBoton } from "../../Components/IndexComonent";
import Styles from "../../Styles/Styles";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Ejercicio5() {
  let txtPrincipal =
    "En este ejercicio usaremos la libreria llamada react-native-animatable para hacer animaciones sensillas";
  const animationRef = useRef();
  const ZoomRef = useRef();
  const CirculoRef = useRef();

  const myFuntionAnimated = () => {
    // let myZoomAnimated = {
    //   from: {
    //     scale: 0,
    //   },
    //   to: {
    //     scale: 3,
    //   },
    // };

    let MyTransition = {
      // width: 500,
      // height: 500,
      scale: 3,
      backgroundColor: "black",
    };
    let MyAnimacion, MyAnimacion2;
    //MyAnimacion = ZoomRef.current.animate(myZoomAnimated);
    MyAnimacion2 = ZoomRef.current.transitionTo(MyTransition);
  };

  const MyGirosAnimated = () => {
    let MyAnimacion, MyiterationCount;
    let myTransicion = {
      backgroundColor: "black",
      transform: [{ rotate: "360deg" }],
    };
    MyAnimacion = CirculoRef.current.transitionTo(myTransicion);
    // let myAnimate = {
    //   from: {
    //     //scale: 0,
    //     rotate: '0deg',
    //   },
    //   to: {
    //     //scale: 2,
    //     rotate: '360deg',
    //   },
    // };
    // MyAnimacion = CirculoRef.current.animate(myAnimate);
  };

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text style={Styles.txtGlobal}>{txtPrincipal}</Text>

        <Animatable.View animation="fadeInUpBig" style={styles.objet} />
        <Text>Animacion Disparada</Text>
        <Animatable.View ref={animationRef} style={styles.objet2} />
        <MyBoton
          title="press me"
          onPress={() => animationRef.current.fadeInDown()}
        />

        <Text>Zoom</Text>
        <Animatable.View ref={ZoomRef} style={styles.objet3} />
        <MyBoton title="press me" onPress={myFuntionAnimated} />

        <Text>Giros Infinitos</Text>
        <Animatable.View
          ref={CirculoRef}
          style={styles.objet4}
          duration={4000}
        />
        <MyBoton title="press me" onPress={MyGirosAnimated} />

        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{ textAlign: "center", fontSize: 50, }}
        >
          ❤️
        </Animatable.Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  objet: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  objet2: {
    flex: 0,
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  objet3: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
    margin: 10,
  },
  objet4: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    margin: 10,
  },
});

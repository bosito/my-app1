import React, { useState, useRef } from 'react';
import {
  Text, View, Dimensions, StyleSheet, Image, ScrollView, Alert, Modal, Pressable
} from 'react-native';
import { NavBar, Boton_Icon } from '../../Components/IndexComonent'
import Carousel from 'react-native-looped-carousel';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const windowWidth = Dimensions.get('window').width;
const image_carruser_1 = require('../../../assets/images/imageCarruselUdemy.png');
const image_carruser_2 = { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/326px-SoloLearn_logo.svg.png' };
const image_carruser_3 = { uri: 'https://jovenesconstruyendoelfuturo.stps.gob.mx/publico/imagen/logoloud.png' };
const image_carruser_4 = require('../../../assets/images/ImageCarruselGoogle.png');

//Imagenes Botones u_udemy
const image_boton1 = require('../../../assets/images/images_certificados/u_udemy.png');
const image_boton2 = require('../../../assets/images/images_certificados/sololearn_icon.png');

const ComponentCarrusel = (props) => {
  const { imageSource } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 19, fontStyle: 'italic' }}>Cursos tomados</Text>
      <Image style={[{ width: '90%', height: 150, resizeMode: 'contain' }]} source={imageSource} />
    </View>
  )
}

const MyModal = (props) => {
  const { modalVisible, setModalVisible } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default function Certificados(props) {

  const [modalVisible, setModalVisible] = useState(false);
  const BotonRef_one = useRef();
  const ScrollRef = useRef();
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} />
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      <ScrollView>
        <View style={{ flex: 1 }} >
          <LinearGradient colors={['rgba(0,255,128,0.8)', 'rgba(0,204,204,0.5)']} style={{ flex: 1 }}>
            <Carousel delay={5000}
              style={[styles.carousel]}
              autoplay
              swipe
              //pageInfo
              bullets
              bulletStyle={{ backgroundColor: 'black' }}
              chosenBulletStyle={{ backgroundColor: 'gray' }}
              arrows
              arrowStyle={styles.arrows}
              leftArrowText={<AntDesign name="arrowleft" size={24} color="black" />}
              rightArrowText={<AntDesign name="arrowright" size={24} color="black" />}
            //onAnimateNextPage={(p) => console.log(p)}
            >
              <ComponentCarrusel imageSource={image_carruser_1} />
              <ComponentCarrusel imageSource={image_carruser_2} />
              <ComponentCarrusel imageSource={image_carruser_3} />
              <ComponentCarrusel imageSource={image_carruser_4} />
            </Carousel>

            <Boton_Icon image={image_boton1}
              info="Paguina web de cursos de todo tipo"
              title="Udemy"
            />

            <Boton_Icon image={image_boton2}
              info="App de cursos de programación"
              title="Sololearn"
            />

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>

          </LinearGradient>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: windowWidth,
    height: 200,
  },
  arrows: {
    backgroundColor: 'rgba(128, 128, 126,0.3)',
    height: 50,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //-------
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0,0.8)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
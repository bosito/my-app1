import React, { useState, useRef } from 'react';
import {
  Text, View, Dimensions, StyleSheet, Image, ScrollView, Modal, Pressable
} from 'react-native';
import { NavBar, Boton_Icon } from '../../Components/IndexComonent'
import Carousel from 'react-native-looped-carousel';
import { AntDesign } from '@expo/vector-icons';
import { OndaSvgOpasity, SololearnSvg } from '../../Components/ComponentsSvg/IndexComponentSvg'
import { LinearGradient } from 'expo-linear-gradient';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import RNPickerSelect from 'react-native-picker-select';

const windowWidth = Dimensions.get('window').width;
const image_carruser_1 = require('../../../assets/images/imageCarruselUdemy.png');
const image_carruser_2 = { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/326px-SoloLearn_logo.svg.png' };
const image_carruser_3 = { uri: 'https://jovenesconstruyendoelfuturo.stps.gob.mx/publico/imagen/logoloud.png' };
const image_carruser_4 = require('../../../assets/images/ImageCarruselGoogle.png');

//Imagenes Botones u_udemy
const image_boton1 = require('../../../assets/images/images_certificados/u_udemy.png');
const image_boton2 = require('../../../assets/images/images_certificados/sololearn_icon.png');
const image_boton3 = require({ uri: ''});


const ComponentCarrusel = (props) => {
  const { imageSource } = props;
  return (
    <View style={styles.cardCarusel}>
      <Image style={[{ width: '90%', height: 150, resizeMode: 'contain' }]} source={image_boton2} />
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
    <View style={{ flex: 1 }} >
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <NavBar navigation={navigation} />
      <OndaSvgOpasity />

      <Text style={{ fontSize: 19, fontStyle: 'italic', textAlign: 'center' }}>
        Cursos y Sertificados Adquiridos
      </Text>

      <Carousel delay={5000}
        style={[styles.carousel]}
        autoplay
        swipe
        //pageInfo
        bullets
        bulletStyle={{ backgroundColor: 'black' }}
        chosenBulletStyle={{ backgroundColor: 'gray' }}
        arrows={false}
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

      <ScrollView style={{ marginTop: -100, zIndex: -1 }}>
        <LinearGradient colors={['#1897b3', '#042f6a']}
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
          <View style={{ width: '100%', height: 80 }} />



          <RNPickerSelect
            children={
              <Boton_Icon image={image_boton1}
                info="Paguina web de cursos de todo tipo"
                title="Udemy"
              />
            }
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'React', value: 'react' },
            ]}
          />

          <RNPickerSelect
            children={
              <Boton_Icon image={image_boton2}
                info="App de cursos de programación"
                title="Sololearn"
              />
            }
            items={[
              { label: 'Php', value: 'php' },
              { label: 'Reat y Redux basic', value: 'reat y redux' },
              { label: 'JavaScript', value: 'javaScript' },
              { label: 'Css', value: 'css' },
              { label: 'Html', value: 'html' },
            ]}
          />

        </LinearGradient>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: windowWidth,
    height: 200,
    backgroundColor: 'transparent'
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
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  cardCarusel: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(251, 252, 252)',
    margin: 10,
    borderRadius: 20,
    elevation: 9
  },
})
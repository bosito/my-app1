import React, { useState, useRef } from 'react';
import {
  Text, View, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity, Button
} from 'react-native';
import { NavBar, Boton_Icon } from '../../Components/IndexComonent'
import Carousel from 'react-native-looped-carousel';
import { AntDesign } from '@expo/vector-icons';
import { OndaSvgOpasity } from '../../Components/ComponentsSvg/IndexComponentSvg'
import { LinearGradient } from 'expo-linear-gradient';
//import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

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
    <View style={styles.cardCarusel}>
      <Image style={[{ width: '90%', height: 150, resizeMode: 'contain' }]} source={imageSource} />
    </View>
  )
}

const ListBoton = (props) => {
  const { image, title, despripcion, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ width: '100%', height: 100, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, marginBottom: 5 }}>
        <Image style={{ width: 100, height: 100 }} resizeMode="stretch"
          source={image}
        />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
          <Text style={{ textAlign: 'center' }}>{despripcion}</Text>
          <Text style={{ fontStyle: 'italic', color: 'gray', marginTop: 10 }}>ver certificado</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function Certificados(props) {
  const [listSololearn, setListSololearn] = useState(false);
  const [udemyList, setUdemyList] = useState(false);
  const [googleList, setGoogleList] = useState(false);
  const [gobierno, setGobierno] = useState(false);
  const BotonRef_one = useRef();
  const ScrollRef = useRef();
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }} >
      <NavBar navigation={navigation} />
      <OndaSvgOpasity />

      <Text style={{ fontSize: 19, fontStyle: 'italic', textAlign: 'center' }}>
        Cursos y Sertificados Adquiridos
      </Text>

      <Carousel
        delay={5000}
        style={[styles.carousel]}
        autoplay
        //swipe
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


          {
            listSololearn ?
              (
                <View style={{ width: '100%', alignItems: 'center', marginTop: 50 }}>
                  <View style={{ width: '90%', height: 450 }}>
                    <ListBoton title="Css"
                      onPress={() => navigation.navigate('SololearnNameScreen', ['Css'])}
                      despripcion="Hojas de estilo en cascada"
                      image={{ uri: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png' }}
                    />
                    <ListBoton title="Html"
                      onPress={() => navigation.navigate('SololearnNameScreen',['Html'])}
                      despripcion="Lenguaje de Marcas de Hipertexto"
                      image={{ uri: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png' }}
                    />
                    <ListBoton title="JavaScript"
                      onPress={() => navigation.navigate('SololearnNameScreen',['JavaScript'])}
                      despripcion="lenguaje de programación"
                      image={{ uri: 'http://www.cantabriatic.com/wp-content/uploads/2015/11/javascript-shield-logo-300x169.png' }}
                    />
                    <ListBoton title="PHP"
                      onPress={() => navigation.navigate('SololearnNameScreen',['PHP'])}
                      despripcion="lenguaje de programación"
                      image={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png' }}
                    />
                    <Button title="regresar" color="green" onPress={() => setListSololearn(!listSololearn)} />
                  </View>
                </View>
              )
              :
              (
                <Boton_Icon image={image_boton2}
                  info="App de cursos de programación"
                  title="Sololearn"
                  handelOnPress={() => setListSololearn(!listSololearn)}
                />
              )
          }

          {
            udemyList ?
              (
                <Button title="regresar" color="green" onPress={() => setUdemyList(!udemyList)} />
              )
              :
              (
                <Boton_Icon image={image_boton1}
                  info="Paguina web de cursos de todo tipo"
                  title="Udemy"
                  handelOnPress={() => setUdemyList(!udemyList)}
                />
              )
          }


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
  cardCarusel: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(251, 252, 252)',
    margin: 10,
    borderRadius: 20,
    elevation: 9
  },
})
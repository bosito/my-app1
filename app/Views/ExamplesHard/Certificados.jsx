// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// export default function Certificados() {
//     return (
//         <View>
//             <Text>Certificados</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

// })

import React from 'react';
import {
  Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { NavBar } from '../../Components/IndexComonent'
import Carousel from 'react-native-looped-carousel';

const windowWidth = Dimensions.get('window').width;
const image_carruser_1 = require('../../../assets/images/imageCarruselUdemy.png');
const image_carruser_2 = { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/SoloLearn_logo.svg/326px-SoloLearn_logo.svg.png' };
const image_carruser_3 = { uri: 'https://jovenesconstruyendoelfuturo.stps.gob.mx/publico/imagen/logoloud.png' };
const image_carruser_4 = require('../../../assets/images/ImageCarruselGoogle.png');

const ComponentCarrusel = (props) => {
  const { imageSource } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{fontSize: 19, fontStyle: 'italic'}}>Cursos tomados</Text>
      <Image style={[{ width: '90%',height: 150, resizeMode: 'contain' }]} source={imageSource} />
    </View>
  )
}

export default function CarouselExample(props) {
  const { navigation } = props;
  return (
    <ScrollView>
      <View>
        <NavBar navigation={navigation} />
        <Carousel
          delay={6000}
          style={styles.carousel}
          autoplay
          swipe
          //pageInfo
          bullets
          bulletStyle={{ backgroundColor: 'black'}}
          chosenBulletStyle={{ backgroundColor: 'gray' }}
        //onAnimateNextPage={(p) => console.log(p)}
        >
          <ComponentCarrusel imageSource={image_carruser_1} />
          <ComponentCarrusel imageSource={image_carruser_2} />
          <ComponentCarrusel imageSource={image_carruser_3} />
          <ComponentCarrusel imageSource={image_carruser_4} />
        </Carousel>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: windowWidth,
    height: 200,
  }
})
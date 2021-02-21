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
  Text, View, Dimensions, StyleSheet
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width } = Dimensions.get('window');

export default function CarouselExample() {
  return (
    <View>
      <Carousel
        delay={8000}
        style={styles.carousel}
        autoplay
        swipe
        //pageInfo
        bullets
        //onAnimateNextPage={(p) => console.log(p)}
      >
        <View style={[{ backgroundColor: '#BADA55' }, styles.carousel]}><Text>wolas que hay</Text></View>
        <View style={[{ backgroundColor: 'red' }, styles.carousel]}><Text>2</Text></View>
        <View style={[{ backgroundColor: 'blue' }, styles.carousel]}><Text>3</Text></View>
      </Carousel>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: width,
    height: 500,
  }
})
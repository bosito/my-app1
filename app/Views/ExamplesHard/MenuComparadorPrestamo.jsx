import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { StylesComparador } from "../../Styles/IndexStyles";
import { MyBoton, } from '../../Components/IndexComonent';
import { OndaSvg, ImageReact } from '../../Components/ComponentsSvg/IndexComponentSvg'


const COLOR_GLOBAL_PRIMARI = '#0098D3';

export default function MenuComparadorPrestamo(props) {

    const { navigation } = props;
    const title = 'Menu Comparador de Prestamo'
    const txtPoints = `°sabes ¿cuanto te cobraran dependiendo el plazo que elijas?.
°Sabes ¿Cuanto cobrara el banco segun su interes?`;

    const Heder_local_component = () => {
        return (
            <>
                <View style={[StylesComparador.heder, { backgroundColor: COLOR_GLOBAL_PRIMARI }]}>

                    <Text style={[StylesComparador.titleApp, { fontSize: 15 }]}>
                        {title}
                    </Text>
                    <Text style={[StylesComparador.titleApp, { paddingHorizontal: 10 }]}>
                        ¿¿No sabes cuanto pedir de prestamo ??
                    </Text>
                    <View style={styles.containerImage}>
                        <View style={styles.containerTextInfo}>
                            <Text style={{ color: 'white' }}>{txtPoints}</Text>

                        </View>
                        <Image
                            style={{ width: 120, height: 120, marginRight: 20 }}
                            source={{
                                uri: 'https://image.freepik.com/vector-gratis/nino-pregunta-signo-interrogacion_59690-276.jpg',
                            }}
                        />
                    </View>
                </View>
                <OndaSvg />
            </>

        )
    }

    const ComponenLocalDireccion = (props) => {
        const { children, marginTop } = props
        return (
            <View style={{ alignItems: 'center', marginTop: marginTop }}>
                {children}
            </View>
        )
    }

    return (
        <View>
            <StatusBar barStyle={'light-content'} backgroundColor={COLOR_GLOBAL_PRIMARI} />
            <Heder_local_component />
            <ComponenLocalDireccion marginTop={-50}>
                <ImageReact width={200} height={200} />
            </ComponenLocalDireccion>


            <View style={styles.myCard}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    Esta Pequeña Aplicacion Fue Echa utilizando lo mas nuevo en react, hoocks
                </Text>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>
                    Pensada para ser funcional y reactiva al igual en performants ya que se reutilizo codigo
                    en mas de una ocacion
                </Text>
            </View>

            <ComponenLocalDireccion>
                <MyBoton title={'Calcular Prestamo'} onPress={() => navigation.navigate('ComparadorPrestamo')} />
            </ComponenLocalDireccion>
        </View>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        flexDirection: 'row',
        width: '100%',
    },
    containerTextInfo: {
        flex: 1,
        padding: 10
    },
    myCard: {
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5
    },
})
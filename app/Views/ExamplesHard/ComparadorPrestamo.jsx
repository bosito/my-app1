import React, { useState, useEffect } from 'react';
import { Styles } from '../../Styles/IndexStyles';
import { View, Text, StyleSheet, StatusBar, TextInput, Button } from 'react-native';
import { MyBoton } from '../../Components/IndexComonent'
import RNPickerSelect from 'react-native-picker-select';

export default function ComparadorPrestamo() {

    const [capital, setCapital] = useState(null);
    const [interes, setInteres] = useState(null);
    const [meses, setMeses] = useState(null);
    const [total, setTotal] = useState(null);
    const [errormensage, setErrormensage] = useState(null);

    const [imput, setImput] = useState([]);

    const dataTextInput1 = (txt) => setCapital(txt);
    const dataTextInput2 = (txt) => setInteres(txt);
    const dataTextInput3 = (value) => setMeses(value);

    useEffect(() => {
        muestraDato()
    }, [capital,interes,meses])

    const muestraDato = () => {
        if (!capital) {
            setErrormensage('Coloca la cantidad a calcualar')
        } else if (!interes) {
            setErrormensage('añade el interes del prestamo')
        } else if (!meses) {
            setErrormensage('seleiona los meses a pagar')
        } else {
            const i = interes / 100;
            const free = capital / ((1 - Math.pow(i + 1, - meses)) / i);
            setTotal({
                pagoMensual: free.toFixed(2),
                totalPlayable: (free * meses).toFixed(2)
                //pagoMensual: free.toFixed(2).replace('.',',')
            });
            setErrormensage(null)
        }
    }

    const ResutCalculation = (props) => {

        const { capital, interes, meses, total, errormensage } = props;

        const MyComponent = (props) => {

            const {title, value} = props;

            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.title, { fontSize: 15 }]}>{title}</Text>
                    <Text style={[styles.title, { fontSize: 15 }]}>{value}</Text>
                </View>
            )
        }

        return (
            <View style={styles.center}>
                {total && (
                    <View style={styles.boxResult}>
                        <Text style={styles.title}>RESUMEN</Text>
                        <MyComponent title={'Cantidad Solicitada'} value={`${capital} $`}/>
                        <MyComponent title={'Interes'} value={`${interes} %`}/>
                        <MyComponent title={'Plazos'} value={`${meses} meses`}/>
                        <MyComponent title={'Pago mensual:'} value={`${total.pagoMensual} $`}/>
                        <MyComponent title={'Total a pagar:'} value={`${total.totalPlayable} $`}/>
                    </View>
                )}
                <View>
                    <Text style={styles.error}>{errormensage}</Text>
                </View>
            </View>
        )

        
    }


    return (
        <View style={Styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={COLOR_GLOBAL_PRIMARI} />

            <View style={styles.heder}>
                <View style={styles.relleno} />
                <Text style={styles.titleApp}>Cotizador de Prestamos</Text>

                <View style={styles.viewFrom}>
                    <View style={styles.viewInput}>

                        <TextInput placeholder={'Cantidad a pedir'}
                            onChangeText={dataTextInput1}
                            keyboardType='number-pad'
                            style={styles.input}
                        />
                        <TextInput placeholder={'Interes %'}
                            onChangeText={dataTextInput2}
                            keyboardType='number-pad'
                            style={[styles.input, styles.inputPorcentage]}
                        />
                    </View>

                    <View style={{ backgroundColor: 'white', borderRadius: 5 }}>
                        <RNPickerSelect
                            placeholder={{ label: 'selecciona los plazos...', value: null }}
                            style={styles.inputAndorid}
                            onValueChange={dataTextInput3}
                            items={[
                                { label: '3 Meses', value: 3 },
                                { label: '6 Meses', value: 6 },
                                { label: '12 Meses', value: 12 },
                                { label: '24 Meses', value: 24 },
                            ]}
                        />
                    </View>

                </View>
            </View>

            <ResutCalculation capital={capital} interes={interes}
                meses={meses} total={total} errormensage={errormensage}
            />

            <View style={styles.fodeer}>
                <MyBoton title={'Calcular Precio'} onPress={muestraDato} />
            </View>

        </View>
    )
}

const COLOR_GLOBAL_PRIMARI = '#0098D3';
const COLOR_GLOBAL_SECUMDARY = '#006691';

const styles = StyleSheet.create({
    heder: {
        width: '100%',
        height: 225,
        alignItems: 'center',
    },
    titleApp: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
    },
    viewFrom: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 40,
        backgroundColor: COLOR_GLOBAL_SECUMDARY,
        borderRadius: 30,
        height: 150,
        justifyContent: 'center',
        //alignItems: 'center'
    },
    relleno: {
        backgroundColor: COLOR_GLOBAL_PRIMARI,
        width: '100%',
        height: 170,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        zIndex: -1,
        position: 'absolute'
    },
    viewInput: {
        flex: 0,
        flexDirection: 'row'
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderColor: COLOR_GLOBAL_PRIMARI,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 10,
    },
    inputPorcentage: {
        width: '40%',
        marginLeft: 5,
    },
    inputAndorid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: 'white'
    },
    center: {
        flex: 1,
        width: '100%',
    },
    fodeer: {
        width: '100%',
        backgroundColor: COLOR_GLOBAL_PRIMARI,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 70,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },
});
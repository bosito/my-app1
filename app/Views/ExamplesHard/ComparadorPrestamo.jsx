import React, { useState, useEffect } from 'react';
import { Styles } from '../../Styles/IndexStyles';
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import { MyBoton } from '../../Components/IndexComonent';
import { StylesComparador } from "../../Styles/IndexStyles";
import RNPickerSelect from 'react-native-picker-select';

export default function ComparadorPrestamo() {

    const [capital, setCapital] = useState(null);
    const [interes, setInteres] = useState(null);
    const [meses, setMeses] = useState(null);
    const [total, setTotal] = useState(null);
    const [errormensage, setErrormensage] = useState(null);

    const COLOR_GLOBAL_PRIMARI = '#0098D3';

    const dataTextInput1 = (txt) => setCapital(txt);
    const dataTextInput2 = (txt) => setInteres(txt);
    const dataTextInput3 = (value) => setMeses(value);

    useEffect(() => {
        muestraDato()
    }, [capital, interes, meses])

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

        function MyComponent(props) {
            const { title, value } = props;
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[StylesComparador.title, { fontSize: 15 }]}>{title}</Text>
                    <Text style={[StylesComparador.title, { fontSize: 15 }]}>{value}</Text>
                </View>
            )
        }

        return (
            <View style={StylesComparador.center}>
                {total && (
                    <View style={StylesComparador.boxResult}>
                        <Text style={StylesComparador.title}>RESUMEN</Text>
                        <MyComponent title={'Cantidad Solicitada'} value={`${capital} $`} />
                        <MyComponent title={'Interes'} value={`${interes} %`} />
                        <MyComponent title={'Plazos'} value={`${meses} meses`} />
                        <MyComponent title={'Pago mensual:'} value={`${total.pagoMensual} $`} />
                        <MyComponent title={'Total a pagar:'} value={`${total.totalPlayable} $`} />
                    </View>
                )}
                <View>
                    <Text style={StylesComparador.error}>{errormensage}</Text>
                </View>
            </View>
        )
    }


    return (
        <View style={Styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={COLOR_GLOBAL_PRIMARI} />

            <View style={StylesComparador.heder}>
                <View style={StylesComparador.relleno} />
                <Text style={StylesComparador.titleApp}>Cotizador de Prestamos</Text>

                <View style={StylesComparador.viewFrom}>
                    <View style={StylesComparador.viewInput}>

                        <TextInput placeholder={'Cantidad a pedir'}
                            onChangeText={dataTextInput1}
                            keyboardType='number-pad'
                            style={StylesComparador.input}
                        />
                        <TextInput placeholder={'Interes %'}
                            onChangeText={dataTextInput2}
                            keyboardType='number-pad'
                            style={[StylesComparador.input, StylesComparador.inputPorcentage]}
                        />
                    </View>

                    <View style={{ backgroundColor: 'white', borderRadius: 5 }}>
                        <RNPickerSelect
                            placeholder={{ label: 'selecciona los plazos...', value: null }}
                            style={StylesComparador.inputAndorid}
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

            <View style={StylesComparador.fodeer}>
                <MyBoton title={'Calcular Precio'} onPress={muestraDato} />
            </View>

        </View>
    )
}
import React, { useState } from 'react';
import { Styles } from '../../Styles/IndexStyles';
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function ComparadorPrestamo() {

    const [pickerState, setPickerState] = useState({});

    return (
        <View style={Styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={COLOR_GLOBAL_PRIMARI} />
            <View style={styles.heder}>
                <Text style={styles.titleApp}>Cotizador de Prestamos</Text>

                <View style={styles.viewFrom}>
                    
                    <View style={styles.viewInput}>
                        <TextInput placeholder={'Cantidad a pedir'}
                            keyboardType='number-pad'
                            style={styles.input}
                        />
                        <TextInput placeholder={'Interes %'}
                            keyboardType='number-pad'
                            style={[styles.input, styles.inputPorcentage]}
                        />
                    </View>

                    <Picker
                        selectedValue={{ language: 'java' }}
                        style={{ height: 50, width: 100, backgroundColor: 'red' }}
                        onValueChange={(itemValue, itemIndex) => setPickerState({ ...pickerState, language: itemValue })}
                    >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>

            

        </View>
    )
}

const COLOR_GLOBAL_PRIMARI = '#0098D3';
const COLOR_GLOBAL_SECUMDARY = '#006691';

const styles = StyleSheet.create({
    heder: {
        backgroundColor: COLOR_GLOBAL_PRIMARI,
        width: '100%',
        height: 150,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
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
        bottom: -80,
        width: '85%',
        paddingHorizontal: 40,
        backgroundColor: COLOR_GLOBAL_SECUMDARY,
        borderRadius: 30,
        height: 150,
        justifyContent: 'center',
        //alignItems: 'center'
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
});
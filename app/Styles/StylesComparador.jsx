import { StyleSheet } from 'react-native';

const COLOR_GLOBAL_PRIMARI = '#0098D3';
const COLOR_GLOBAL_SECUMDARY = '#006691';

export default StyleSheet.create({
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
        marginBottom: 25,
    },
});

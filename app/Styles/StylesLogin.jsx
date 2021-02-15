import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24241c'
    },
    containerSuperior: {
        flex: 0.5,
        alignItems: 'center',
    },
    containerData: {
        flex: 0.5,
        alignItems: 'center',
        backgroundColor: '#04d3fa',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    input: {
        width: "80%",
        marginTop: 20,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: 'white'
    },
    tinyLogo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 100,
    },
    myInputConten: {
        width: "80%",
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: 'rgba(18, 22, 44, 0.7)'
    },
})

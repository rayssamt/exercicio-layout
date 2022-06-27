import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
    },
    view1: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    view2: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view3: {
        backgroundColor: '#FF4081',
        
    },
    view4: {
        height:300,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignContent: 'space-around',
    },
    view5: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    barraVerde: {
        flex: 1,
        backgroundColor: '#C2185B',
        height: 25,
    },
    quadradoLaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F8BBD0',
        marginTop: 30,
        marginBottom: 20,
    },
    retangLaranja: {
        width: 150,
        height: 30,
        backgroundColor: '#FF4081',
        marginBottom: 30,
    },
    retangulo: {
        width: '50%',
        height: 78,
        backgroundColor: '#C2185B',
    },
    retangulo2: {
        backgroundColor: '#F8BBD0',
        width: '100%',
        height: 13,
    },
 
    quadrados: {
        width: 100,
        height: 100,
        backgroundColor: '#FF4081',
        margin: 5,
    },
    retanguloRoxo: {
        width: '100%',
        height: 60,
        backgroundColor: '#F8BBD0',
    }
});

export default styles

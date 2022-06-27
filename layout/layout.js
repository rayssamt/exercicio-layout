import { Text, View } from 'react-native';
import styles from './style-layout';

const Layout = () => {
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <View style={styles.barraVerde}></View>
            </View>
            <View style={styles.view2}>
                <View style={styles.quadradoLaranja}></View>
                <View style={styles.retangLaranja}></View>
            </View>
            <View style={styles.view3}>
                <View style={styles.retangulo}></View>
                <View style={styles.retangulo2}></View>
            </View>
            <View style={styles.view4}>
                <View style={styles.quadrados}></View>
                <View style={styles.quadrados}></View>
                <View style={styles.quadrados}></View>
                <View style={styles.quadrados}></View>
                <View style={styles.quadrados}></View>
                <View style={styles.quadrados}></View>
            </View>
            <View style={styles.view5}>
                <View style={styles.retanguloRoxo}></View>
            </View>           
        </View>
    );
}
export default Layout
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/colors.js';

function NumberContainer({children}) {
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default NumberContainer;

//on android screen is including the status bar, window is excluding
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ?  12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 12: 36,
        fontWeight: 'open-sans-bold',
    }
})
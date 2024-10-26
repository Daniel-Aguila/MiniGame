import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors.js'

function PrimaryButton({children, onPress}) {
    function pressHandler(){
       onPress();
    }

    //{pressed} is a boolean that is automatically passed to pressable
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={pressHandler} style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: styles.buttonInnerContainer} android_ripple={{color: Colors.primary600}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        //overflow makes it so any effect going out of the container is not shown outside
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,

    }
});
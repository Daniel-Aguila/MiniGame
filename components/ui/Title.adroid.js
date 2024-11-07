import { Text, StyleSheet, Platform } from "react-native";

//Platform API detects on what Platform we are running

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        //Using Platform.OS we can decide and do a ternary to set up different
        //values for different OS
        //borderWidth: Platform.OS === 'android' ? 2 : 0,
        //or we can also do it like
        //borderWidth: Platform.select({ios:0, android:2}),

        //using Title.android.js and Title.ios.js we can set up
        //different ui for different os, and when we import we just do
        //Title.js and react native picks either android or ios depending on 
        //what the user needs
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
    }
}); 
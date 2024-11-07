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
        borderWidth: 0,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
    }
}); 
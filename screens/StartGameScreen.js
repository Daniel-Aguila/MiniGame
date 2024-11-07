import { useState } from 'react';
import {StyleSheet, 
    TextInput, 
    View, 
    Alert, 
    useWindowDimensions, 
    Dimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton.js';
import Colors from '../constants/colors.js';
import Title from '../components/ui/Title.js';
import Card from '../components/ui/Card.js';
import InstructionText from '../components/ui/InstructionText.js';

function StartGameScreen(props){
    const [enteredNumber, setEnteredNumber] = useState('');

    //anytime the dimensions change, say flip from vertical to horizontal on the app
    //these dimensions update
    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        //isNaN isNotANumber
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
              'Invalid number!',
              'Number has to be a number between 1 and 99.',
              [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
          }
        
        props.onPickNumber(chosenNumber);
    }

    //this does it dynamic so it always updates
    //doing const styles is fixed
    const marginTopDistance = height < 380 ? 30 : 100;

    //KeyboardAvoidingView makes sure that when you type
    //Your keyboard does not block the view

    //It should be wrapped around by ScrollView so it properly goes up
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad'
                        autoCapitalize='none' autoCorrect='none' value={enteredNumber} onChangeText={numberInputHandler}/>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer:{
        flex: 1,
        marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center'
    },  
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})
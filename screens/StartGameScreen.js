import { useState } from 'react';
import {StyleSheet, TextInput, View, Alert, Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton.js';
import Colors from '../constants/colors.js';
import Title from '../components/ui/Title.js';
import Card from '../components/ui/Card.js';
import InstructionText from '../components/ui/InstructionText.js';

function StartGameScreen(props){
    const [enteredNumber, setEnteredNumber] = useState('');

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

    return (
        <View style={styles.rootContainer}>
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
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
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
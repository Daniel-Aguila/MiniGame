import {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title.js";
import NumberContainer from '../components/game/NumberContainer.js';
import PrimaryButton from '../components/ui/PrimaryButton.js';
import Card from '../components/ui/Card.js';
import InstructionText from '../components/ui/InstructionText.js';
//can get icons and other expo special modules
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem.js';
import { useRef } from 'react';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);
  const initialGuess = generateRandomBetween(minBoundary,maxBoundary, userNumber );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
    //whenever currentGuess or userNumber or onGameOver changes
    //this effect gets reexecuted
  }, [currentGuess,userNumber, onGameOver]);

  useEffect(() => {
    minBoundary.current = 1;
    maxBoundary.current = 100;
  }, [])

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || 
    (direction === 'greater' && currentGuess > userNumber)){
      Alert.alert("Don't lie!", "You know that this is wrong...",
        [{text: 'Sorry!', style: 'cancel'},]);
        return;
    }

    if (direction === 'lower'){
      maxBoundary.current = currentGuess;
    }else {
      minBoundary.current = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary.current,maxBoundary.current,currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => {
      [newRndNumber, ...prevGuessRounds]
    });
  }


  const guessRoundsListLength = guessRounds.length;

   return (
       <View style={styles.screen}>
          <Title>Opponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card>
              <InstructionText style={styles.instructionText}> Higher or Lower?</InstructionText>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="remove" size={24} color ="white"/></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="add" size={24} color="white"/></PrimaryButton>
                </View>
              </View>
            </Card>
              <View style={styles.listContainer}>
                <FlatList data={guessRounds}  renderItem={(itemData) => 
                  <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                  keyExtractor={(item) => item} />
              </View>
       </View>
   );
}

export default GameScreen;

const styles = StyleSheet.create({
  listContainer:{
    flex:1 ,
    padding: 16
  },  
    screen: {
    flex: 1,
    padding: 24,
    },
    instructionText: {
      marginBottom: 12
    },
    buttonsContainer: {
      flexDirection: 'row'
    },
    buttonContainer: {
      flex: 1
  }
})
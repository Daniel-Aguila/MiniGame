import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";

 function GameScreen(){
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/*GUESS*/}
            <View>
                <Text> Higher or Lower?</Text>
                {/*+ -*/}
            </View>
            <View>
                {/*LOG ROUNDS*/}
            </View>
        </View>
    );
 }

 export default GameScreen;

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    padding: 24,
    },
})
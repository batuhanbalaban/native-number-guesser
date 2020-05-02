import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import TextBody from '../components/TextBody';
import TextTitle from '../components/TextTitle';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [rounds, setRounds] = useState(1);
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;
    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);
    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Misdirection', 'You shouln\'t misdirect the algorithm', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGuess);
        setRounds(rounds + 1);
    }
    return (
        <View style={styles.screen}>
            <TextBody>Opponent's Guess</TextBody>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});
export default GameScreen;
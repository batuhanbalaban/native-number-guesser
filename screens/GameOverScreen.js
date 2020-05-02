import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextBody from '../components/TextBody';
import TextTitle from '../components/TextTitle';
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TextTitle>The Game is Over!</TextTitle>
            <TextBody>Number of rounds: {props.roundsNumber}</TextBody>
            <TextBody>Number was: {props.userNumber}</TextBody>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default GameOverScreen;
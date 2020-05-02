import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TextBody from '../components/TextBody';
import TextTitle from '../components/TextTitle';
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TextTitle>The Game is Over!</TextTitle>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={style.image} resizeMode="cover" />
            </View>
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
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    }

});
export default GameOverScreen;
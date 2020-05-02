import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TextBody from '../components/TextBody';
import TextTitle from '../components/TextTitle';
import Colors from '../constants/colors';
import ButtonMain from '../components/ButtonMain';
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TextTitle>The Game is Over!</TextTitle>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    // source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Summit_photo_Zugspitze.jpg' }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <TextBody style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></TextBody>
            </View>

            <ButtonMain onPress={props.onRestart}>NEW GAME</ButtonMain>
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
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    }

});
export default GameOverScreen;
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import Input from '../components/Input';
import Card from '../components/Card';
import TextBody from '../components/TextBody';
import TextTitle from '../components/TextTitle';
import ButtonMain from '../components/ButtonMain';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(false);
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be in between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <TextBody>You selected</TextBody>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <ButtonMain onPress={() => props.onStartGame(selectedNumber)} >START GAME</ButtonMain>
            </Card>
        );
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <TextTitle style={styles.title}>The Game Screen!</TextTitle>
                <Card style={styles.inputContainer}>
                    <TextBody>Enter a Number</TextBody>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={resetInputHandler} /></View>
                        <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    button: {
        width: 100,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }

});

export default StartGameScreen;
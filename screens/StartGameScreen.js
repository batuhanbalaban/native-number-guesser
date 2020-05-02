import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
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
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);


    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () =>{
            Dimensions.removeEventListener('change', updateLayout);
        };
    })

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
        <ScrollView>
            {/* Prevent Keyboar overlapping the input behavior=position best for ios position=padding best for android */}
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <View style={styles.screen}>
                        <TextTitle style={styles.title}>Start a New Game!</TextTitle>
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
                                <View style={{ width: buttonWidth }}><Button title="Reset" color={Colors.accent} onPress={resetInputHandler} /></View>
                                <View style={{ width: buttonWidth }}><Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} /></View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
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
        minWidth: 300,
        width: '80%',
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
        // width: ,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }

});

export default StartGameScreen;
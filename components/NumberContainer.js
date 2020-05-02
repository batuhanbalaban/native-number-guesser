import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';
import TextBody from './TextBody';
import TextTitle from './TextTitle';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <TextBody style={styles.number}>
                {props.children}
            </TextBody>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
    }
});

export default NumberContainer;
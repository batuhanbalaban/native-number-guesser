import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TextBody from './TextBody';
import TextTitle from './TextTitle';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const Header = props => {

    return (
        <View style={styles.header}>
            <TextTitle style={styles.headerTitle}>{props.title}</TextTitle>
        </View>
    );
}

export default Header;
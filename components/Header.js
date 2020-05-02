import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';
import TextBody from './TextBody';
import TextTitle from './TextTitle';


const Header = props => {

    return (
        <View style={{ ...styles.headerBase, ...Platform.select({ ios: styles.headerIos, android: styles.headerAndroid }) }}>
            <TextTitle style={styles.headerTitle}>{props.title}</TextTitle>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
    },
    headerIos: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
    }
});

export default Header;
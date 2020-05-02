import React from 'react';
import { Text } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const TextBody = props => { return (<Text style={{ ...DefaultStyles.textBody, ...props.style }}>{props.children}</Text>) };

export default TextBody;
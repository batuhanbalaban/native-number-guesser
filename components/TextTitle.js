import React from 'react';
import { Text } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const TextTitle = props => { return (<Text style={{ ...DefaultStyles.textTitle, ...props.style }}>{props.children}</Text>) };

export default TextTitle;
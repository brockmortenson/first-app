import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';


const Button = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const { type, content, onPress } = props;
    // console.log(type);

    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>

            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>

        </View>
    )
}

export default Button;
import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import { colors, fonts } from '../../../utils';

const width = Dimensions.get('window').width;

const Input = ({ title, keyboardType, maxLength, secureTextEntry, underlineColorAndroid, value, onChangeText, autoCapitalize, multiline, theme }) => {
    return (
        <View>
            <Text style={styles.teks}>{title}</Text>
            <TextInput style={styles.input} secureTextEntry={secureTextEntry} autoCapitalize={autoCapitalize} keyboardType={keyboardType} maxLength={maxLength} underlineColorAndroid={underlineColorAndroid} value={value} onChangeText={onChangeText} multiline={multiline} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 42,
        fontSize: 13,
        fontFamily: 'Nunito-Medium',
        backgroundColor: colors.White,
        borderRadius: 6,
        color:colors.Black,
        borderWidth: 1,
        borderColor: colors.border,
        paddingLeft: 14
    },
    teks: {
        color: colors.Black,
        marginBottom: 4,
        fontSize : 14,
        fontFamily: 'Nunito-Medium',
    },
})


export default Input;
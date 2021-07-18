import React from 'react'
import { View, Text , StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.text}>{props.main}</Text>
            <Text style={styles.text}>{props.description}</Text>
            <Text style={styles.text}>{props.temp} °C</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 30 ,
        textAlign: 'center',
        paddingTop: 30,
    }

})
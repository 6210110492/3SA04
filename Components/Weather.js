import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })   
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=cedf757ecf9454ac87e53b44c57e1415`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
       


    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.text}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </ImageBackground>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',  
        width: '100%',
        height: '100%'
    },
    text:{
       color: 'white',
       fontSize: 30,
       textAlign: 'center',
    },

})
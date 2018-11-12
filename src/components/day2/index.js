/**
 * Day 2
 * A weather app
 */
'use strict';

import React , {Component} from "react"
import {
    View,
    StyleSheet,
    Text
} from "react-native"

import Swiper from 'react-native-swiper';

import weatherData from "./data"
import Weather from "./weather"
import Util from "./../../utils"

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            weather: weatherData,
        }
    }    
    render(){

        return (
            <View style={{flex:1}}>
                <Swiper 
                    style={styles.contentContainer} 
                    showsButtons={false}
                    horizontal={true}
                    loop={false}
                >
                    {this.state.weather.map((item, index)=>{
                        return <View key={index} style={{flex:1}}>
                            <Weather data={item} />
                        </View>
                    })}
                </Swiper>
            </View>
        )
    }

}

const size = Util.size;
const styles = StyleSheet.create({
    contentContainerStyle:{
        marginTop: 20,
        flexDirection:"row",
        height: size.height,
    }
})
import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
 } from 'react-native';

import Top from "./weatherTop"
import SwiperList from "./weatherSwiper"
import List from "./weatherlist"
import Details from "./weatherDetails"
import Util from "../../utils"

export default class extends Component {
    render(){
        let data = this.props.data;
        return (
            <ImageBackground 
                source={data.bg}
                style={[styles.weatherCover]}
            >
                <ScrollView style={{marginBottom: 50}}>
                    <Top el={data} />
                    <SwiperList  el={data} />
                    <List  el={data} />
                    <Details  el={data} />
                </ScrollView>
            </ImageBackground>
        )
    }
}

const size = Util.size();

const styles = StyleSheet.create({
    weatherCover:{
        width: size.width,
        height: size.height,
        flex:1,
    },
})
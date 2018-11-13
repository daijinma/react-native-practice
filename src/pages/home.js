'use strict';
import React, { Component } from 'react';
import { 
    AppRegistry,
    DeviceEventEmitter,
    Image,Navigator,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, 
    TouchableOpacity, 
    TouchableHighlight,
    View,
    Button
 } from 'react-native';

import Util from '../utils';
import routerMap from '../routerMap';
import RefreshAble  from "../components/refreshable";



export default class HomeScreen extends Component {
    constructor(props){
        super(props)

        this.getBox = this.getBox.bind(this)
    }
    static navigationOptions =()=>({
        title: "首页",
    })

    state = {
        refreshing: false,
        scrollList : null,
    }
        
    render(){
        return (
            <View>
                <RefreshAble>
                    <View style={styles.touchBoxContent}>
                        {this.getBox()}
                    </View>
                </RefreshAble>
            </View>
        )
    }

    getBox(){
        return (
            routerMap.map((item,index)=>(
                <TouchableHighlight 
                    key={index} 
                    style={[ index%3==2?styles.box2:styles.box1, {backgroundColor: getRandomColor()}]} 
                    // underlayColor="dark"
                    onPress={()=>{
                        this.props.navigation.navigate(item.title);
                    }}
                    >
                    <View style={[styles.box]}>
                        <View>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                        <View style={styles.number}><Text style={styles.numberText}>{index+1}</Text></View>
                    </View>
                </TouchableHighlight>
            ))
        )
    }
}

const size = Util.size();

const styles = StyleSheet.create({
    touchBoxContent:{
        flexDirection: "row",
        flexWrap:"wrap",
    },
    text:{
        justifyContent: "center",
        alignItems:"center",
        fontSize:30,
        color:"#fff",
        fontWeight: "100",

    },
    box:{
        // width: size.width/3 - 0.3333334,
        width: size.width,
        height: size.width/3,
        justifyContent: "center",
        alignItems:"center",
    },
    box1:{
        
    },
    number:{
        position:"absolute",
        // top: "50%",
        left: 50,
        // marginTop: "-50%"
    },
    numberText:{
        fontSize: 80,
        fontWeight: "100",
        color: "#fff",
        textShadowOffset:{
            width:Util.pixel*5,
            hegith:Util.pixel*5
        },
        textShadowRadius:0,
        textShadowColor:'#ddd',
        textShadowRadius: 2,
    }
})

var getRandomColor = function(){
    return '#'+(Math.random()*0xffffff<<0).toString(16);
}
  
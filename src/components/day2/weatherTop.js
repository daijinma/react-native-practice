import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Util from "../../utils"

export default class extends Component {
    render(){
        let elem = this.props.el;
        return (
            <View style={styles.headInfo}>
                <Text style={styles.city}>{elem.city}</Text>
                <Text style={styles.abs}>{elem.abs}</Text>
                <Text style={styles.degree}>{elem.degree}</Text>
                <Text style={styles.circle}>°</Text>
            </View>
        )
    }
}


let styles = StyleSheet.create({
    headInfo:{
        paddingTop:70,
        alignItems:"center",
        paddingBottom:60,
    },
    city:{
        fontSize: 25,
        color:"#fff",
        paddingBottom: 5,
        backgroundColor:"transparent"
    },
    abs:{
        fontSize:15,
        color:"#fff",
        backgroundColor:"transparent"
    },
    degree:{
        fontSize:85,
        color:"#fff",
        fontWeight: "100",
    },
    circle:{
        fontSize:35,
        color:"#fff",
        fontWeight: "300",
        position:"absolute",
        top:130,
        right:Util.size().width/2-55,
    },
})
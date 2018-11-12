import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native"

import Util from "../../utils"

export default class extends Component {
  render() {
    return (
        <View style={styles.adMain}>
            <Text style={styles.adText}>广告</Text>
            <TouchableOpacity 
                style={styles.adBtn}
                onPress={
                    this.props.close
                }
            >
                <Text style={styles.adTxt}>{"("+this.props.time+"s)跳过"}</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const size = Util.size();
const pixel = Util.pixel;
const styles = StyleSheet.create({
    adMain:{
        position: "absolute",
        width:size.width,
        height:size.height,
        left:0,
        top:0,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#ccc",
    },
    adText: {
        fontSize: 80,
        color: "#eee",
    },
    adBtn:{
        position:"absolute",
        right:20,
        top:70,
        height:30,
        justifyContent:"center",
        borderRadius:15,
        borderColor: "#fff",
        borderWidth: pixel*2,
        
    },
    adTxt:{
        color:"#fff",
        paddingHorizontal: 10,
        lineHeight:30,
    }
})
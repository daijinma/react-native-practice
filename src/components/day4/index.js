import React, {Component} from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native"


export default class extends Component {
    render(){
        return (
            <View style={{
                justifyContent:"center",
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize:30,
                    justifyContent:"center",
                }}>去列表页下拉列表试试</Text>
            </View>
        )
    }
}
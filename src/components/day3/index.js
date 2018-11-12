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
                }}>进App得时候你没看见嘛？ 连广告都带了</Text>
            </View>
        )
    }
}
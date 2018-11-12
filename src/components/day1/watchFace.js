import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet
 } from 'react-native';

import Util from "../../utils"

export default class WatchFace extends Component{
    constructor(props){
      super(props)
    }
    render() {
        return(
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        )
        }
}

const size = Util.size();
const styles = StyleSheet.create({
  watchFaceContainer:{
    width: size.width,
    paddingTop: 50, 
    paddingLeft: 30, 
    paddingRight:30, 
    paddingBottom:40,
    backgroundColor: "#fff",
    borderBottomWidth: 1, 
    borderBottomColor:"#ddd",
    height: 170,
  },
  sectionTime:{
    fontSize: 20,
    fontWeight:"100",
    paddingRight: 30,
    color: "#555",
    position:"absolute",
    left:size.width-140,
    top:30
  },
  totalTime:{
    fontSize: size.width === 375? 70:60,
    fontWeight: "100",
    color: "#222",
    paddingLeft:20
  }
});

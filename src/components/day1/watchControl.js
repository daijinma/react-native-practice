import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableHighlight
 } from 'react-native';

import Util from "../../utils"

export default class WatchControl extends Component{
  constructor(props){
    super(props);
  }
  state = {
      watchOn: false, 
      startBtnText: "启动",
      startBtnColor: "#60B644",
      stopBtnText: "计次",
      underlayColor:"#fff",
  }

  _startWatch() {
    if (!this.state.watchOn) {
      this.props.startWatch()
      this.setState({
        startBtnText: "停止",
        startBtnColor: "#ff0044",
        stopBtnText: "计次",
        underlayColor:"#eee",
        watchOn: true
      })
    }else{
      this.props.stopWatch()
      this.setState({
        startBtnText: "启动",
        startBtnColor: "#60B644",
        stopBtnText: "复位",
        underlayColor:"#eee",
        watchOn: false
      })
    } 
  }

  _addRecord() {
    if (this.state.watchOn) {
      this.props.addRecord()
    }else{
      this.props.clearRecord()
      this.setState({
        stopBtnText: "计次"
      })
    }
  }

  render() {
    return(
      <View style={styles.watchControlContainer}>
            <View style={styles.btnWarp}>
                <TouchableHighlight 
                    style={[styles.btn,styles.btnStop]} 
                    underlayColor={this.state.underlayColor} 
                    onPress={()=>this._addRecord()}
                >
                    <Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.btnWarp}>
                <TouchableHighlight 
                    style={[styles.btn,styles.btnStart]} 
                    underlayColor="#eee" 
                    onPress={this._startWatch.bind(this)}
                >
                    <Text style={[styles.btnStartText,{color:this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
                </TouchableHighlight>
            </View>
      </View>
    )
  }
}

const size = Util.size();

const styles = StyleSheet.create({
  watchControlContainer:{
    width: size.width,
    height: 100,
    flexDirection:"row",
    backgroundColor: '#f3f3f3',
  },
  btnWarp:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  },
  btn:{
    width: 70,
    height: 70,
    borderRadius:35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  btnStartText:{
    fontSize:14,
    backgroundColor:"transparent"
  },
  btnStopText:{
    fontSize:14,
    backgroundColor:"transparent",
    color:"#555"
  }
});

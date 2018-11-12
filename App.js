/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Router from "./src/router"
import splashScreen from "react-native-splash-screen"
import Ad from "./src/components/day3/ad"
import {Alert} from "react-native"

export default class App extends Component {
  constructor(props){
    super(props)
    this._clearInterval = this._clearInterval.bind(this)
  }
  state={
    showAdTime:6,
    timeId:null,
  }
  componentDidMount(){
    splashScreen.hide();
    
    this.state.timeId = setInterval(()=>{
      this.setState({
        showAdTime: this.state.showAdTime-1,
      })

      if(this.state.showAdTime<0){
        this._clearInterval()
      }
    }, 1000)
  }

  _clearInterval(){
    clearInterval(this.state.timeId);
    // console.log(this.state.timeId)
    this.setState({
      showAdTime: -1,
      timeId: null,
    })
  }

  render() {
    if(this.state.showAdTime>=0){
      return <Ad 
        time={this.state.showAdTime} 
        close={()=>{
          console.log(this.clearInterval)
          this._clearInterval();
        }}
      />
    }
    return <Router />
  }
}

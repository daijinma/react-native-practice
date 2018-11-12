/**
 * Day 1
 * A stop watch
 */
'use strict';

import React, { Component } from 'react';
import { 
    View
 } from 'react-native';

import WatchControl from "./watchControl"
import WatchFace from "./watchFace"
import WatchRecord from "./watchRecord"

export default class extends Component{
  constructor() {
    super();
     
  }

  // 怎么根据routerMap 读取配置 =>  navigation 
  navigationOptions = {
    title:"秒表"
  }
  

  state = {
    totalTime: "00:00.00",
    sectionTime: "00:00.00",
    timeId:0,
    stopWatch:false,
    startTime:'',
    recordTime:'',
    countingTime:"",
    record:[],
  }

  runTime(){
      let time = (new Date()).getTime();
      let recordTime = time;
      let startTime = time - this.state.countingTime;

      this.setState({
        recordTime,
        startTime,
      },()=>{
        let interval = setInterval(()=>{
            let now = (new Date()).getTime();
            let countingTime = now - this.state.startTime;
            let seccountingTime = now - this.state.recordTime;

            let minute = Math.floor(countingTime/(60*1000));
            let second = Math.floor((countingTime-6000*minute)/1000);
            let milSecond = Math.floor((countingTime%1000)/10);
            let secminute = Math.floor(seccountingTime/(60*1000));
            let secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
            let secmilSecond = Math.floor((seccountingTime%1000)/10);

            this.setState({
                countingTime,
                totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
                sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
            })

            if (this.state.stopWatch) {
                clearInterval(interval)
            };


        },20)
      })

  }

  _addRecord(){
    let record = this.state.record;
    record.unshift({
        current: this.state.totalTime
    })
    if(record.length>8){
        record.pop();
    }

    this.setState({
        record,
    })
  }

  render(){
    return(
        <View>
            <WatchFace 
                totalTime={this.state.totalTime} 
                sectionTime={this.state.sectionTime}
            ></WatchFace>
            <WatchControl
                startWatch={()=>{
                    this.setState({
                        stopWatch:false,
                    },()=>{
                        this.runTime()
                    })
                }}
                stopWatch={()=>{
                    this.setState({
                        stopWatch:true,
                    })
                }}
                clearRecord={()=>{
                    this.setState({
                        stopWatch:true,
                        totalTime: "00:00.00",
                        sectionTime: "00:00.00",
                        countingTime:'',
                        startTime:'',
                        record:[]
                    })
                }}
                addRecord={()=>{
                    this._addRecord();
                }}
            />

            <WatchRecord record={this.state.record} />
        </View>
    )
  }

 
}

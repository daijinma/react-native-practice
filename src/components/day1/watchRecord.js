import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    FlatList,
 } from 'react-native';

import Util from "../../utils"


let oldRecord = null;

export default class WatchRecord extends Component{
  constructor(props){
    super(props)
  }
  shouldComponentUpdate(nextProps){
    if(oldRecord === JSON.stringify(nextProps.record)){
      return false;
    }
    return true;
  }
  render() {
    let record = this.props.record;
    oldRecord = JSON.stringify(record);

    return (
      record.length?
      <FlatList
        data={[...record]}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({item,index}) => (
          <View style={styles.recordItem} key={index}>
            <Text style={styles.recordItemTitle}>计次{index}</Text>
            <View style={{alignItems: "center"}}>
              <Text style={styles.recordItemTime}>{item.current}</Text>
            </View>
          </View>
        )}
      />
      :
      <View style={{height:200, alignItems:"center", justifyContent:"center"}}>
        <Text style={styles.empty}>空</Text>
      </View>
      
    );
  }
}

const size = Util.size();

const styles = StyleSheet.create({
  recordList:{
    width: size.width,
    height: size.height - 300,
    paddingLeft: 50,
    paddingRight: 50,
  },
  recordItem:{
    height: 40,
    borderBottomWidth:Util.pixel,
    borderBottomColor:"#bbb",
    paddingTop: 5, 
    paddingLeft: 10, 
    paddingRight:10, 
    paddingBottom:5,
    flexDirection:"row",
    alignItems:"center"
  },
  recordItemTitle:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"left",
    paddingLeft:20,
    color:"#777"
  },
  recordItemTime:{
    backgroundColor:"transparent",
    flex:1,
    textAlign:"left",
    paddingRight:20,
    color:"#222"
  },
  empty:{
    fontWeight:"100", 
    color: "#cdcdcd",
    textShadowOffset:{width:Util.pixel*2,hegith:Util.pixel*2},
    textShadowRadius:0,
    textShadowColor:'white'
  }
})
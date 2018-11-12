import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component {
    render(){
        let elem = this.props.el;
        return (
            <View style={styles.withinWeek} >
                {elem.days.map((dayElem, dayIndex) => {
                    return (
                    <View key={dayElem.key} style={styles.withinWeekLine}>
                        <View style={styles.withinWeekDay}>
                            <Text style={styles.withinWeekDayText}>{dayElem.day}</Text>
                        </View>
                        <View style={styles.withinWeekIcon}>
                            <Icon name={dayElem.icon}  style={styles.withinWeekIconIcon} size={25}></Icon>
                        </View>
                        <View style={styles.withinWeekDegree}>
                            <Text style={styles.withinWeekHigh}>{dayElem.high}</Text>
                            <Text style={elem.night?styles.withinWeekLowNight:styles.withinWeekLow}>{dayElem.low}</Text>
                        </View>
                    </View>
                    );
                })}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    withinWeek:{
      paddingTop:5
    },
    withinWeekLine:{
      flexDirection:"row",
      height: 28
    },
    withinWeekDay:{
      justifyContent:"center",
      alignItems:"flex-start",
      flex:1,
    },
    withinWeekIcon:{
      justifyContent:"center",
      alignItems:"center",
      flex:1, 
    },
    withinWeekDegree:{
      justifyContent:"flex-end",
      alignItems:"center",
      flex:1,
      flexDirection:"row",
      paddingRight:25,
    },
    withinWeekHigh:{
      color:"#fff",
      width:35,
      fontSize:16,
      textAlign:"right"
    },
    withinWeekIconIcon:{
      color:"#fff"
    },
    withinWeekLow:{
      color:"#eee",
      width:35,
      fontSize:16,
      textAlign:"right"
    },
    withinWeekLowNight:{
      color:"#aaa",
      width:35,
      fontSize:16,
      textAlign:"right"
    },
    withinWeekDayText:{
      color:"#fff",
      paddingLeft:20,
      fontSize:15,
    },
})

import React, { Component } from 'react';
import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Utils from "../../utils"


export default class extends Component {
    render(){
        let elem = this.props.el;
        return (
            <View style={styles.main}>
                <View style={styles.title}>
                    <View style={[styles.titleLeft, {justifyContent:"flex-start"}]}>
                        <Text style={[styles.text, styles.textLeft]}>{elem.today.week}</Text>
                        <Text style={[styles.text, styles.textLeft]}>{elem.today.day}</Text>
                    </View>
                    <View style={[styles.titleRight, {justifyContent:"flex-end"}]}>
                        <Text style={[styles.text, styles.textRight]}>{elem.today.high}</Text>
                        <Text style={[styles.text, styles.textRight]}>{elem.today.low}</Text>
                    </View>
                </View>
                <ScrollView 
                    style={styles.swipperHorizontal}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    {elem.hours.map((hourElem, hourIndex) => {
                        return (
                        <View key={hourElem.key} style={styles.withinDayHours}>
                            <Text style={styles.time} >{hourElem.time}</Text>
                            <Icon name={hourElem.icon} size={25} style={[{color:hourElem.color}]}></Icon>
                            <Text style={styles.degree} >{hourElem.degree}</Text>
                        </View>
                        );
                    })}
                </ScrollView>
            </View>
        )
    }
}


const ceil = Utils.pixel;
const size = Utils.size();

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
    title:{
        borderBottomColor: "#fff",
        borderBottomWidth: ceil*2,
        width: size.width,
        flexDirection: "row",
    },
    titleLeft :{
        flex: 1,
        flexDirection: "row",
        paddingLeft: 10,
    },
    titleRight :{
        flex: 1,
        flexDirection: "row",
        paddingRight:10
    },
    text: {
        color: "#fff",
        fontSize: 16,
        flexDirection: "row",
        lineHeight: 30
    },
    textLeft:{
        textAlign:"left",
        marginLeft:10,
    },
    textRight:{
        textAlign:"right",
        marginRight:10,
    },

    swipperHorizontal:{
        flexWrap:"nowrap",
        paddingVertical: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: ceil*2,
    },

    withinDayHours:{
        flex:1,
        paddingHorizontal: 10,
        alignItems:"center",
    },
    time:{
        color:"#fff",
    },
    degree:{
        color:"#fff"
    }
    
})
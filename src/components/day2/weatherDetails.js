import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Util from "../../utils"

export default class extends Component {
    render(){
        let elem = this.props.el;
        return (
            <View>
                <View style={styles.weatherInfo}>
                    <Text style={styles.weatherInfoText}>{elem.info}</Text>
                </View>
                <View style={styles.weatherOther}>
                    <View style={styles.weatherOtherSection}>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>日出：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.rise}</Text>
                        </View>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>日落：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.down}</Text>
                        </View>
                    </View>
                    <View style={styles.weatherOtherSection}>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>降雨概率：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.prop}</Text>
                        </View>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>湿度：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.humi}</Text>
                        </View>
                    </View>
                    <View style={styles.weatherOtherSection}>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>风速：</Text>
                        <Text style={styles.weatherOtherValue}><Text style={{fontSize:10}}>{elem.dir}</Text>{elem.speed}</Text>
                        </View>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>体感温度：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.feel}</Text>
                        </View>
                    </View>
                    <View style={styles.weatherOtherSection}>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>降水量：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.rain}</Text>
                        </View>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>气压：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.pres}</Text>
                        </View>
                    </View>
                    <View style={styles.weatherOtherSection}>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>能见度：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.sight}</Text>
                        </View>
                        <View style={styles.weatherOtherLine}>
                        <Text style={styles.weatherOtherTitle}>紫外线指数：</Text>
                        <Text style={styles.weatherOtherValue}>{elem.uv}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const size = Util.size();

let styles = StyleSheet.create({
    weatherInfo:{
        marginTop:5,
        borderTopColor:"rgba(255,255,255,0.7)", borderTopWidth:Util.pixel,
        borderBottomColor:"rgba(255,255,255,0.7)", borderBottomWidth:Util.pixel
    },
    weatherInfoText:{
        color:"#fff",
        fontSize:15,
        paddingTop:10,
        paddingLeft:20,
        paddingBottom:10,
        paddingRight:20,
    },
    weatherOther:{
        paddingTop:10
    },
    weatherOtherSection:{
        paddingBottom:10
    },
    weatherOtherLine:{
        flexDirection:"row",
        flexWrap:"nowrap"
    },
    weatherOtherTitle:{
        width: size.width/2-15,
        color:"#fff",
        textAlign:"right",
        fontSize: 15,
    },
    weatherOtherValue:{
        width: size.width/2,
        paddingLeft:15,
        flex:1,
        fontSize: 15,
        color:"#fff",
    },
})
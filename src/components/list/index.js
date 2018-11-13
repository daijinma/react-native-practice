import React ,{Component} from "react";
import {StyleSheet, Text, View, Image, FlatList, NativeModules, TouchableWithoutFeedback} from 'react-native';

const NetInfo = NativeModules.NetInfo;

console.log(NativeModules)

export default class List extends Component {
    constructor(props){
        super(props)
        
        this.onPressItem = this.onPressItem.bind(this);
        this.renderMove = this.renderMove.bind(this);
    }

    state = {
        listData:[],
    }

    componentDidMount(){
        this.getList()
    }

    getList=()=>{
        getList()
        .then(res=>{
            if(res.movies && res.movies.length){
                this.setState({
                    listData: res.movies
                })
            }
        })
    }

    render(){
        if(!this.state.listData.length){
            return <Text style={styles.loading}>loading</Text>
        }
        return (
        <View style={styles.container}>
            <FlatList
                data={this.state.listData}
                renderItem={this.renderMove}
                keyExtractor={(item, index)=>(index.toString())}
            />
        </View>)
    }

    renderMove({item}){
        return (
            <View style={styles.item}>
                <TouchableWithoutFeedback 
                    onPress={()=>{
                        this.onPressItem(item);
                    }}
                >
                    <View>
                        <Image
                        source={{uri: item.posters.thumbnail}}
                        style={styles.thumbnail}
                        />
                        <View style={styles.rightContainer}>
                            <Text style={styles.rightDescription}>标题:{item.title}</Text>
                            <Text style={styles.year}>年份:{item.year || "未知"}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
        )
    }

    onPressItem(item){
        
        NetInfo.getCurrentConnectivity()
        .then((res)=>{
            console.log(res)
        })
        console.log(item);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        textAlign: "center",
        color: "#ccc",
        fontSize: 14,
    },
    item:{
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal:10,
    },
    thumbnail: {
        width: 53,
        height: 81,
        backgroundColor:"#eee",
    },
    rightContainer:{
        flex: 1,
        paddingLeft: 10,
        justifyContent:"center",
    },
    rightDescription: {
        fontSize:12,
        paddingBottom:6,
    }
})

/**
 * 获取列表页数据
 *  */
const getList = ()=>{
    return fetch("https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json")
    .then((res)=>res.json())
}

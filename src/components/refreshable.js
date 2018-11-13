import React from "react"
import {
    Text,
    StyleSheet,
    ScrollView,
    Vibration,
    View,
} from "react-native"

import Util from "../utils"

const OPACITY_LIMIT = 80;
const SHOW_LOADING_LIMIT = 10;

export default class extends React.Component {
    constructor(props){
        super(props)
        this._onScroll = this._onScroll.bind(this)
        this._onTouchEnd = this._onTouchEnd.bind(this)
    }
    state={
        scrollList:null,
        refreshing: false,
        marginTop:null,
        loadingText: loadingProgressDesc[0],
        loadingProgress : false,
    }

    _onScroll(event){
        let marginTop = -(event.nativeEvent.contentOffset.y);

        if(this.state.loadingProgress){
            this.setState({
                marginTop,
            })
        }else{
            
            let loadingText = '';
    
            if(marginTop > OPACITY_LIMIT){
                loadingText = loadingProgressDesc[1]
            }else{
                loadingText = loadingProgressDesc[0]
            }
            this.setState({
                marginTop,
                loadingText,
            })
    
        }
    }

    _onTouchEnd(){
        let canLoad = this.state.marginTop > OPACITY_LIMIT;
        if(canLoad && this._SLV){
            this.progress()
        }
    }
    render() {
        const scrollTop = parseInt(this.state.marginTop);
        const opacity = scrollTop>OPACITY_LIMIT ? 1 : parseInt(scrollTop/OPACITY_LIMIT*100)/100;
        const height = scrollTop>SHOW_LOADING_LIMIT? scrollTop: 0;
        return (
            <View>
                <Text style={[{
                        height:height,
                        lineHeight:height,
                        opacity: opacity,
                    }, styles.loading]}
                >
                    {this.state.loadingText}
                </Text>
                <ScrollView 
                    style={styles.mainView}
                    scrollEventThrottle={32}
                    onScroll={this._onScroll}
                    onTouchEnd={this._onTouchEnd}
                    ref={component=>this._SLV = component}
                >
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }

    progress(){
        Vibration.vibrate();
        
        this.setState({
            loadingProgress: true,
            loadingText:loadingProgressDesc[2],
            marginTop: OPACITY_LIMIT,
        })
        this._SLV.scrollTo({
            y: -(OPACITY_LIMIT+1),
            x: 0,
            animated: true,
        })

        setTimeout(()=>{
            this.reset()
        }, 2000)
        
    }

    reset(){
        this.setState({
            loadingText:loadingProgressDesc[3],
        },()=>{
            this._SLV.scrollTo({
                y: 0,
                x: 0,
                animated: true,
            })
    
            setTimeout(()=>{
                this.setState({
                    loadingProgress: false,
                    loadingText:loadingProgressDesc[0],
                })
            }, 500)
        })

    }

}

const size = Util.size();
const styles = StyleSheet.create({
    loading:{
        position: "absolute",
        left:0,
        top:0,
        width:size.width,
        textAlign:"center",
        zIndex:5,
    },
    txt:{
        textAlign: "center",
    }
})


const loadingProgressDesc = [
    "下拉加载",
    "撒手！",
    "加载中...",
    "加载完成",
]
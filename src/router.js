'use strict';
import React from "react"
import {
    Button
} from "react-native"
import {createStackNavigator} from "react-navigation"
import routerMap from "./routerMap"
import Home from "./pages/home"
import Head from "./components/head"

let settingsMap = {};
routerMap.forEach(item=>{
    settingsMap[item.title] = {...item}
})

let navigateMap = {
    "Home":{
        title:"Home",
        name:"首页",
        screen: Home,
    },
    ...settingsMap
}

console.log(navigateMap)

export default createStackNavigator(navigateMap , {
    initRouterName:"Day1",
    // navigationOptions: {
    //     headerTitle: <Head />,
    // },
})



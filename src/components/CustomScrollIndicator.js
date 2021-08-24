import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

//const
const {width, height} = Dimensions.get('window');
const scrollElementHeightPercent = 45;


export const CustomScrollIndicator = (props) => {
    const SCROLL_BAR_HEIGHT = props.height;
    return (
        <View style={[styles.scrollBar, {height : SCROLL_BAR_HEIGHT}]}>
           <View
           style={[styles.Indicator, {top: `${(props.scrollPerc).toFixed()}%`,
           height: `${scrollElementHeightPercent}%`}]}></View>
        </View>
    )
}



const styles = StyleSheet.create({
    scrollBar:{
        width:4,
        backgroundColor:'#00000050',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    Indicator:{
        position: "absolute",
        width:6,
        backgroundColor:'#2977FF'
    }
})

import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import ScrollIndicator from "react-native-custom-scroll-indicator";

//customimports
import {CustomScrollIndicator} from '../components/CustomScrollIndicator'

//images path
const upArrrow = require('../assets/images/upload.png');
const downArrow = require('../assets/images/down-arrow.png');
const infoArrow = require('../assets/images/info.png');


const scrollElementHeightPercent = 45;
const {width, height} = Dimensions.get('window');

 const Render = ({item}) =>{
     const [open, setOpen] = React.useState(false);
     const [value, setSelectedValue] = React.useState('');
    return(
        <View style={[styles.renderView, {paddingBottom: open ? height/10 : 0 }]}>
            <Text style={styles.date}>{item.date}</Text>
            <DropDownPicker
            items={item.shift}
            open={open}
            value={value}
            setValue={ val => setSelectedValue(val)}
            arrowIconStyle={{tintColor:'#2977FF'}}
            style={{borderColor:'#00000040', borderRadius:0, height:height/20}}
            textStyle={{color:'#00000080'}}
            containerStyle={{width:width/2.5,
            marginLeft:width/5}}
            setOpen={() => setOpen(!open)}/>
        </View>
    );
}

export const CustomRenderItem = (props) => {
    
    const [flag, setFlag] = React.useState(false);

//scrollView healper consts
const [contentOffset, setContentOffset] = React.useState({ x: 0, y: 0 });
const [contentSize, setContentSize] = React.useState(0);
const [scrollViewHeight, setScrollViewHeight] = React.useState(0);

const scrollPerc = (contentOffset.y / (contentSize - scrollViewHeight))
    * (100 - scrollElementHeightPercent);

    const onPress = () =>{
        setFlag(!flag);
    }

    // const renderItem = ({item}) =>{
    //     return(
    //         <View>
    //         <Render item={item}/>
    //         </View>);
    // }
    return (
        <View style={styles.main}>
        <View style={styles.itemView}>

            <View style={styles.innerView}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Image source={infoArrow} style={styles.infoImgae}/>
                <TouchableOpacity style={styles.arrowContainer} onPress={onPress}>
                    <Image source={flag ? upArrrow : downArrow} style={styles.arrow} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection:'row', paddingHorizontal:10, paddingBottom:10}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        key={'parentList'} style={{height: flag ? height/7 : 0}}
        onScroll={e => {
            setContentOffset(e.nativeEvent.contentOffset);
          }}
          onContentSizeChange={(_, height) => {
            setContentSize(height);
          }}
          onLayout={e => {
            setScrollViewHeight(e.nativeEvent.layout.height);
          }}
        >
                {flag ? 
                
                props.item.dates.map( (item) =>{
                    return(
                    <Render item={item}/>
                )})
                
                : undefined}

        </ScrollView>
        <CustomScrollIndicator height={flag ? height/7 : 0}  scrollPerc={scrollPerc} />
        </View>
        </View>
    )
}



const styles = StyleSheet.create({
    main:{ 
        borderBottomWidth:1,
        borderColor:'#00000040', 
        marginHorizontal:width/30,
    },
    itemView:{
        paddingHorizontal:width/30,
        height:height/12,
        justifyContent:'center',
    },
    innerView:{
        flex:1,
        flexDirection:'row',
       // width:width,
        //borderWidth:1,
        alignItems:'center'
    },
    title:{
        fontSize:14,
        fontWeight:'bold'
    },
    infoImgae:{
        tintColor:'#2977FF',
        width:width/25,
        height:width/25,
        marginLeft:width/40
    },
    arrow:{
        tintColor:'#2977FF',
        width:width/25,
        height:width/25,
    },
    arrowContainer:{
        backgroundColor:'#EBF2FF',
        position:'absolute',
        right:width/30,
        padding:width/90
    },
    nestedList:{
        //borderWidth:2,
    },
    renderView:{
        marginHorizontal:width/30,
       //borderWidth:1,
        marginVertical:width/50,
        flexDirection:'row',
        alignItems:'center'
    },
    date:{
        fontSize:13,
        fontWeight:'bold',
    }
})

import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'

//Dummy data import
import {dummyData} from './src/dummyData'

//custom imports
import {CustomRenderItem} from './src/components/CustomRenderItem'

const App = () => {
  const {width, height} = Dimensions.get('window');

  const renderItem = ({item}) =>{
    return(
      <CustomRenderItem item={item} />
    );
  }
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View style={styles.listView}>
        <FlatList
          data={dummyData}
          keyExtractor={ index => index.toString().concat(Math.random())}
          renderItem={renderItem}
          scrollEnabled={true}
          nestedScrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  mainConatiner:{
    flex:1
  },
  listView:{
    flex:1
  }
})

import React from "react";
import {View ,Text, SafeAreaView, StyleSheet, FlatList, ScrollView, Image, Dimensions} from"react-native";
import news_data from './news_data.json'
import NewsCard from "./components/NewsCard";
import news_banner_data from "./news_banner_data.json";
import Banner from "./components/Banner";

 const App = () => {
  const renderNews = ({item}) => <NewsCard news={item}/>
  const renderBanner = () => (<Banner />)
  return (
    <SafeAreaView style={styles.container}>
    <View>
   
      <FlatList
      ListHeaderComponent={ renderBanner }
      keyExtractor={item => item.u_id.toString()}
      data={news_data}
      renderItem= {renderNews}
      numColumns={2}
      showsVerticalScrollIndicator={false}
     
      />    
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    
    
  },
  banner_image: {
    
    height:Dimensions.get("window").height / 5,
    width:Dimensions.get("window").width / 2,
    
  }
  
})
export default App;

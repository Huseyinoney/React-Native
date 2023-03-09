import React,{useState,useEffect} from 'react';
import { SafeAreaView,Text,FlatList ,ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import ProductCard from "../../components/ProductCard.js";
import useFetch from '../../hooks/useFetch/index.js';

const Products = ({navigation}) => {
    const {data,loading,error} = useFetch(Config.API_URL);

    const handleProductSelect = (id) => {
        navigation.navigate("DetailPage",{id});
        
    }
    const renderProduct = ({item}) => <ProductCard product = {item} onSelect = { () => handleProductSelect(item.id)} />

    if(error) {
       return <Text>bir hata olustu</Text>
    }

   
   if(loading) {
    return <ActivityIndicator size="large"/>
   }
    return (
        <SafeAreaView>
            
            <FlatList data = {data} renderItem = {renderProduct}/>
        </SafeAreaView>
    )
}




export default Products;
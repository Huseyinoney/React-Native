import React from 'react';
import { Image,Text, View,ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import styles from "./Detail.style";
const Detail = ({route}) => {
    const {id} = route.params;
    const {loading,data,error} = useFetch(`${Config.API_URL}/${id}`);
    if(error) {
        return <Text>bir hata olustu</Text>
     }
 
    
    if(loading) {
     return <ActivityIndicator size="large"/>
    }
    return (
        <View style = {styles.container}>
            <Image source = {{uri:data.image}} style = {styles.image} />
            <View style = {styles.body_container}>
            <Text style = {styles.title}>{data.title}</Text>
            <Text style = {styles.desc}>{data.description}</Text>
            <Text style = {styles.price}>{data.price}</Text>
        </View>
        </View>
    )
}

export default Detail;
import React from "react";
import { SafeAreaView,View,Text,StyleSheet } from "react-native";
import Button from "../components/Button";



const Welcome = ({navigation}) => {

    const goToMemberSign = () => {
        navigation.navigate("MemberSignScreen");
    }

    return (
       <SafeAreaView style = {styles.container}>
            <Text style = {styles.header}>Fitness Salonu</Text>
            <Button text = "üye kaydı oluştur" onPress = {goToMemberSign}  />
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    header: {
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold"
    },
})


export default Welcome;
import React from 'react'
import { SafeAreaView,Text,StyleSheet } from 'react-native'

const MemberResult = ({route}) => {
    const {user} = route.params;

    return (
        <SafeAreaView>
            <Text style = {styles.label}>Üye Adı:{user.userName}</Text>
            <Text style = {styles.label}>Üye Soyadı:{user.userSurName}</Text>
            <Text style = {styles.label}>Üye Yaşı:{user.userAge}</Text>
            <Text style = {styles.label}>Üye Mail:{user.userMail}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight:"bold",
        fontSize:30,
        margin:5
    }
})
export default MemberResult;
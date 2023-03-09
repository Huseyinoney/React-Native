import { SafeAreaView, Alert } from 'react-native'
import React,{useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({navigation}) => {

    const [userName, setUserName] = useState(null);
    const [userSurName, setUserSurName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);

    const handleSubmit = () => {
        const user = {
            userName,
            userSurName,
            userAge,
            userMail,
        }
        if(!userName || !userSurName || !userAge || !userMail) {
            Alert.alert("Bilgiler boş bırakılamaz");
        }
        else {
        navigation.navigate("MemberResultScreen",{user})
        console.log(user)
    }
    }


    return ( 
        <SafeAreaView>
           
            <Input label = "üye adı" placeholder="üye ismini giriniz" onChangeText={setUserName}></Input>
            <Input label = "üye soyadı" placeholder="üye soyadı giriniz" onChangeText={setUserSurName}></Input>
            <Input label = "üye yaşı" placeholder="üye yaşını giriniz" onChangeText={setUserAge}></Input>
            <Input label = "üye e-posta" placeholder="üye e-posta giriniz" onChangeText={setUserMail}></Input>

            <Button text = "kaydı tamamla" onPress={handleSubmit}></Button>

        </SafeAreaView>
    )
}

export default MemberSign;
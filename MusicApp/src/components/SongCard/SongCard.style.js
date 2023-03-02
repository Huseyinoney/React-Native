import { StyleSheet } from "react-native";

export default StyleSheet.create({
    caintainer:{
        padding:10,
        flexDirection:"row"
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    inner_container:{
        padding:10,
        flex:1,
        justifyContent:"center"
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"black"
    },
    info_container:{
        flexDirection:"row"
    },
    year:{
        marginLeft:10,
        color:"black"
    }
})
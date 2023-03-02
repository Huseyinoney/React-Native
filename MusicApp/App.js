import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./src/components/SongCard";
import SearchBar from "./src/components/SearchBar";


const App = () => {
    const renderSong = ({item}) => <SongCard song = {item}/>
    const renderSeperator = () => <View style={styles.seperator} />
    const onSearch = (text) => {
        const filteredList = music_data.filter(song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

          return currentTitle.indexOf(searchedText) > -1;
        });
        setList(filteredList);
    }

    const[list,setList] = useState(music_data);

    return (
        <SafeAreaView style={styles.container}>
           <View style={ styles.container}>
            <SearchBar onSearch={onSearch} />
                <FlatList
                keyExtractor={(item) => item.id}
                    data={list}
                    renderItem={renderSong}
                    ItemSeparatorComponent ={renderSeperator}

                />
           </View>
        </SafeAreaView>

    )
}
export default App;

const styles = StyleSheet.create({
    container: {flex:1},
    seperator:{
       borderWidth:1,
       borderColor:"gray"
    }
})
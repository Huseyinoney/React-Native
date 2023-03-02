import React from "react";
import { ScrollView, Image,StyleSheet,Dimensions} from"react-native";
import news_banner_data from "../../news_banner_data.json";

const Banner = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
{
news_banner_data.map(bannerNews => ( 
<Image key={bannerNews.id} style={styles.banner_image} source={{uri:bannerNews
.imageUrl}} />
))}
</ScrollView>
    )
}
const styles = StyleSheet.create({
    banner_image: {
      height:Dimensions.get("window").height / 5,
      width:Dimensions.get("window").width / 2,
    }
    
  })
export default Banner;
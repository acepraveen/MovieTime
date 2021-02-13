import React from 'react'
import {Text,View,StyleSheet,Image, ScrollView} from 'react-native'
import {Container,Header,Content,Card,CardItem,H1} from 'native-base'
import moment from 'moment'
const Movie=({details})=>{
    //console.log(details.original_title)
    
    return(
      <ScrollView>
        <Card style={styles.card}>
            <CardItem cardBody style={styles.cardItem}>
                <Image
                source={{
                    uri:'https://image.tmdb.org/t/p/original/'+details.poster_path,
                    width:100,
                    height:100
                }}
                style={styles.image}
                />
               
            </CardItem>
            <CardItem cardBody style={styles.cardItem}>
            <H1  style={styles.text}>{details.original_title}</H1>
            
            </CardItem>
            <H1 style={styles.text}>Release: {details.release_date}</H1>
        </Card>
     </ScrollView>   
    )
}

export default Movie;

const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      marginRight:15,
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 250,
      height: 270,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop:50,
    },
    text: {
      color: '#ffff',
      marginLeft:22
    },
  });
  
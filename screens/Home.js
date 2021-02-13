import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View} from 'react-native'
import Axios from 'axios'
import {Button} from 'native-base'
import Movie from '../components/Movie'
import { color } from 'react-native-reanimated'
var name=400
const Home=({navigation,route})=>{
    const [details,setDetails]=useState(null)
    
    const fetchDetails=async()=>{
        try{
            name=name+1
            const{data}=await Axios.get(`https://api.themoviedb.org/3/movie/${name}?api_key=004534131641f04436556d972200273c`)
            const details=data
            
            console.log(details)
            setDetails(details)
        }catch(error){
            console.log(error)
        }
    }

    const fetchPDetails=async()=>{
        try{
            name=name+1
            const{data}=await Axios.get(`https://api.themoviedb.org/3/movie/${name}?api_key=004534131641f04436556d972200273c`)
            const details=data
            
            console.log(details)
            setDetails(details)
        }catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchDetails()
    },[])

    if(!details){
        return(
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }else{
    return(
        <View style={styles.container}>
            <View>
            <Movie details={details}/>
            <Button
                rounded
                styles={styles.button}
                onPress={()=>fetchPDetails()}>
                    <Text style={styles.text}>Popular Movies</Text>
                </Button>
                <Button
                rounded
                styles={styles.button}
                onPress={()=>fetchDetails()}>
                    <Text style={styles.text}>Latest Movies</Text>
                </Button>
                <Button
                rounded
                styles={styles.button}
                onPress={()=>fetchDetails()}>
                    <Text style={styles.text}>Top Rated</Text>
                </Button>
                <Button
                rounded
                styles={styles.button}
                onPress={()=>fetchDetails()}>
                    <Text style={styles.text}>Upcoming</Text>
                </Button>
            </View>
        </View>
    )
    }
}

export default Home;

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff'
    },
    button:{
        marginTop:10,
        flexDirection:'row',
        paddingHorizontal:10
    },
    text:{
        flexDirection:'row',
        color:'white',
        paddingHorizontal:44,
        alignItems:'center'
    }
})
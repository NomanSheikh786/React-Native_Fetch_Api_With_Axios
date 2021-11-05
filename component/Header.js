import React from "react"
import { View, Text ,StyleSheet} from "react-native"
import LinearGradient from 'react-native-linear-gradient';


const Headd =(props)=>{

  return(

  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={Styling.vieww}> 
<Text style={Styling.teeext}>{props.valuee}</Text>
</LinearGradient>
  )
}
const Styling = StyleSheet.create({

    vieww:{
        // backgroundColor:"#659DBD",
        justifyContent:"center",
        alignItems:"center",
        height:80
    },
    teeext:{
        color:"white",
        fontWeight:"bold",
        fontSize:30,

    }



})
export default Headd
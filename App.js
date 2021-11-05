import React,{useEffect,useState}from "react"
import { View, Text ,ScrollView,Image ,StyleSheet, TouchableOpacity,Linking} from "react-native"
import  Header  from "./component/Header"
import axios from "axios"
import LinearGradient from 'react-native-linear-gradient';





const App =()=>{
const [Material, setMaterial ] = useState([]);
 useEffect(()=>{
axios.get("https://minisolution-backend.herokuapp.com/api/getAllProduct")
.then((respo)=>{
  console.log(respo,"its Response")
  setMaterial(respo.data.data)
})

.catch((errorr)=>{
  console.log(errorr,"its error")
})


 },[])


const gitProfile = ()=>{
  Linking.openURL('https://github.com/NomanSheikh786')
}

  return( //main return start here
    <View> 
    <Header 
    valuee={"Product"} //heading here
    />
  
  
  <ScrollView> 
   
{Material.map((prod,index)=>{


return( // bcz map b to return karay ga nae kuch
 <View style={styling.textimgwrap} key={index}> 

        <View  key={index}>
        <Image 
        source={{uri:prod.image}}
        style={{height:200 , width:200,borderRadius:20}}       
        /> 
        </View>
      <View style={styling.textstylee} > 
        <Text style={{fontWeight:"bold"}}> {prod.name}</Text>
        <Text style={{fontWeight:"bold"}}> {prod.description}</Text>
        
        <TouchableOpacity style={styling.butttton} onPress={gitProfile}> 
  <LinearGradient 
   colors={['#4c669f', '#3b5998', '#659DBD']} style={styling.butttton}> 
       
            <Text style={{textAlign:"center",fontSize:15,color:"white",fontWeight:"bold",elevation:10}}>
               Buy</Text>
             
              </LinearGradient>
              </TouchableOpacity>
        </View> 

        
 </View>
) //second return 
}) 
// map end 
}




  </ScrollView>
  </View> //main view end here

  )

  
}

const styling = StyleSheet.create({
  textstylee:{
    textAlign:"center",
    flexDirection:"column",
    marginLeft:20,
    
    

  },
  textimgwrap:{
    backgroundColor:"#e6e6e6",
    flexDirection:"row",
   width:"94%",
   alignItems:"center",
   marginVertical:10,
   marginHorizontal:12,
   padding:12,
   borderRadius:15,
   elevation:24
    
  },
  butttton:{
   
    borderRadius:12,
    padding:8,
    width:80,
    marginVertical:14

  }


})
export default App
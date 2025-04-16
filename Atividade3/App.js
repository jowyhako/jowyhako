import React,{Component} from "react";
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity, Button } from "react-native";
 
class App extends Component{
  render(){
    return(
   <View style={styles.container}>
    <Button title="Clique aqui"
    color='red'
    onProgress={()=>Alert.alert('Você Apertou o botão')}>
 
    </Button>

    <TouchableOpacity style={style.botao}
    onPress={()=>alert('Clicou no botao')}>
      <text style={styles.textoBotao}>enviar</text>
    </TouchableOpacity>
 
   </View>
   
    );
  }
}
export default App;
const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:50,
    alignItems:'center',
    backgroundColor: '#f0f0f0'
  },
  textobotao:{
    color:'red',
    fontSize:18,
    fontWeigh:'bold',
    textAlign:'center',
  },


})
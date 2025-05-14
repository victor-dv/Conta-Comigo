import { StyleSheet, View, Text } from "react-native";

export default function Quiz(){
  return(
    <View>
      <View>
        <Text>Adição</Text>
        <Text>Selecione a melhor resposta para completar a continha</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  header:{
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems:"center"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"#000",
    marginBottom:5
  },
  subtitle:{
    fontSize: 16,
    color:"#666",
    textAlign:"center"
  }
})
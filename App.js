import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer} >
      <View style={styles.inputContainer} >
        <TextInput style={styles.TextInput} placeholder='this is placeholder'/>
        <Button title='Add todo'/>

      </View>
      <View>
<Text> your todo</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer:{
 
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  TextInput:{
    borderColor:"#cccccc",
    borderWidth:1,
    borderRadius:5,
    padding:5,
    width: "80%",
    marginRight: 10
  }
 
});

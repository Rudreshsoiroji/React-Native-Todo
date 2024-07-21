import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [textInput, setTextInput] = useState('');

  const [todoList, setTodoList] = useState([]);

  function textInputHandler(enteredText){
    setTextInput(enteredText);

  } 

  function appTodoHandler(){
    if (textInput.length <= 0) return
   setTodoList(pev => [...pev, {text: textInput, id: Math.random().toString()}]);
  
  }

  return (
    <View style={styles.appContainer} >

      <View style={styles.inputContainer} >
        <TextInput style={styles.TextInput} placeholder='this is placeholder' onChangeText={textInputHandler}/>
        <Button color={'#3740FE'} title='Add todo' onPress={appTodoHandler}/>
       </View>

<View style={styles.todoContainer}>
      <FlatList data={todoList} renderItem={ (itemData) => {
        return  ( 
        <View style={styles.individualTodo}> 
        <Text style={{color: '#ffffff'}} >{itemData.item.text}</Text>
         </View>)

      }}
      keyExtractor={(item, index) => item.id}
      / >
        
          
  
     

       
      
</View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer:{
     flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
    
  },
  TextInput:{
    borderColor:"#cccccc",
    borderWidth:1,
    borderRadius:5,
    padding:5,
    width: "70%",
    marginRight: 10
  },
  todoContainer:{
    flex: 9,
  },
  individualTodo:{
    padding: 10,
    marginTop: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#5308cc',
    fontSize: 16,
    color: '#ffffff'

  }
 
});

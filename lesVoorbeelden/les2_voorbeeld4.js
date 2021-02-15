import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Switch, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

const Item = (props) => {
  return (
    <View style={styles.todo}>
      <Switch onValueChange={props.toggleSwitch} value={props.item.done}/>
      <Text style={styles.todoText}>{props.item.text}</Text>
    </View>
  );
}

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([{text: 'Boodschappen', done: true}, {text:'Hond uitlaten', done: true}, {text: 'Rellen in de stad', done: false}]);

  const addTodo = ({nativeEvent: {text} }) => {
    setTodos([...todos, { text: text, done: false}]);
  }

  const toggleSwitch = (value, index) => {
    const todosCopy = [...todos];
    
    const oldTodo = {...todosCopy[index]};
    const newTodo = {...oldTodo, done: value};
    todosCopy[index] = newTodo;

    setTodos(todosCopy);
  }

  const renderItem = ({item, index}) => {
    return (
      <Item item={item} toggleSwitch={ value => toggleSwitch(value, index)}></Item>
    );
  }

  return (
    <View>
      <TextInput 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={setNewTodo} 
        onSubmitEditing={addTodo} 
        value={newTodo} 
        
      />

      <FlatList 
        data={todos} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.text} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    padding:20,
    flex:1,
  },

  todo: {
    flexDirection: 'row',
  },

  todoText: {
    marginLeft: 18,
    fontSize: 30,
  },
});

// src/components/TodoList.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../redux/actions';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleAddTodo = () => {
    if (todo) {
      dispatch(addTodo({ id: Date.now(), task: todo }));
      setTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={todo}
        onChangeText={setTodo}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.task}</Text>
            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    align_Content: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoList;
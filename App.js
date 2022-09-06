import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import Goals from './components/Goals';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([{ text: 'Do the dishes', key: 0 }]);

  const goalInputHandler = (inputText) => {
    setGoalInput(inputText);
  };

  const addGoalHandler = () => {
    console.log('goalInput:', goalInput);
    if (goalInput != '') {
      setGoals((currentGoals) => [
        ...currentGoals,
        { text: goalInput, key: Math.random().toString() }, // FlatList will automatically look for this 'key' property
      ]); // best practice to update state
    }
  };

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.heading}>Goals</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your goals'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <Goals goals={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 40,
  },
  heading: {
    fontSize: 32,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
    color: 'purple',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

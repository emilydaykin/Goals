import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (inputText) => {
    setGoalInput(inputText);
  };

  const addGoalHandler = () => {
    console.log('goalInput:', goalInput);
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
      <View style={styles.goalsContainer}>
        <Text>Your Goals</Text>
      </View>
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
    borderWidth: 1,
    borderColor: 'orange',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    borderWidth: 1,
    borderColor: 'pink',
  },
});

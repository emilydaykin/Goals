import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ setGoals, modalIsVisible }) => {
  const [goalInput, setGoalInput] = useState('');

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
      setGoalInput('');
    }
  };

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your goals'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    width: '30%',
    // borderWidth: 1,
    // borderColor: 'purple',
    // borderRadius: 15,
  },
});

export default GoalInput;

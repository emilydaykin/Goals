import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ setGoals, modalIsVisible, onCancel }) => {
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
      onCancel();
    }
  };

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/target.png')} />
        <TextInput
          placeholder='Enter a goal...'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalInput}
          placeholderTextColor='#ffffff'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#e28bff' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color='#ff5555' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: -40,
    marginBottom: 25,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f022d',
  },
  textInput: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    color: '#ffffff',
    // placeholderTextColor: '#ffffff',  // has to go inline above
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    width: '30%',
    color: '#ffffff',
  },
});

export default GoalInput;

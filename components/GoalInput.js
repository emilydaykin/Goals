import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = ({ goalInputHandler, addGoalHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your goals'
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;

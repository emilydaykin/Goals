import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState(['Do the dishes']);

  const goalInputHandler = (inputText) => {
    setGoalInput(inputText);
  };

  const addGoalHandler = () => {
    console.log('goalInput:', goalInput);
    if (goalInput != '') {
      setGoals((currentGoals) => [...currentGoals, goalInput]); // best practice to update state
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
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false} fadingEdgeLength={50}>
          {goals.map((goal, _id) => (
            <Text style={styles.goalItem} key={_id}>
              {goal}
            </Text>
          ))}
        </ScrollView>
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
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 20,
    // backgroundColor: 'pink',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
    // borderWidth: 1,
    // borderColor: 'pink',
    paddingTop: 10,
  },
  goalItem: {
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: '#f5e1fd',
    borderRadius: 8,
    flexWrap: 'wrap',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    marginHorizontal: 7,
  },
});

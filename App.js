import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Goals from './components/Goals';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([
    { text: 'Do the dishes', key: 0 },
    { text: 'Go swimming', key: 1 },
  ]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const hideAddGoal = () => {
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    console.log('delete goal...');
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  return (
    <>
      {/* status bar is the time, signal etc of the smartphone!! */}
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.heading}>Goals</Text>
        </View>
        <Button title='Add New Goal' color='#c66eef' onPress={startAddGoalHandler} />
        <GoalInput setGoals={setGoals} modalIsVisible={modalIsVisible} onCancel={hideAddGoal} />
        <Goals goals={goals} onDeleteGoal={deleteGoalHandler} />
      </View>
    </>
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
    color: '#f7d9ff',
  },
});

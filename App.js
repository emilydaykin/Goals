import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Goals from './components/Goals';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([{ text: 'Do the dishes', key: 0 }]);

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.heading}>Goals</Text>
      </View>
      <GoalInput setGoals={setGoals} />
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
});

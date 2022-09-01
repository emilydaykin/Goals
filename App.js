import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainText}>Another piece of text</Text>
      </View>
      <Text style={{ margin: 16, padding: 16, borderWidth: 1, borderColor: 'orange' }}>
        Hello World!
      </Text>
      <Button title='click' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    margin: 16,
    padding: 16,
    borderWidth: 3,
    borderColor: 'purple'
  }
});

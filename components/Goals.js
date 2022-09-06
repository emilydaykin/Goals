import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';

const Goals = ({ goals, onDeleteGoal }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}>
              <Pressable
                android_ripple={{ color: '#8d38fc' }}
                onPress={onDeleteGoal.bind(this, itemData.item.key)}
                style={({ pressed }) => pressed && styles.pressedItem}
              >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </Pressable>
            </View>
          );
        }}
        alwaysBounceVertical={false}
        fadingEdgeLength={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
    paddingTop: 10,
  },
  goalItem: {
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: '#f5e1fd',
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 7,
  },
  pressedItem: {
    opacity: 0.45,
  },
  goalText: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: 'flex',
    width: '100%',
    textAlign: 'center',
  },
});

export default Goals;

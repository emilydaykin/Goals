import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';

const Goals = ({ goals, onDeleteGoal }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <Pressable onPress={onDeleteGoal.bind(this, itemData.item.key)}>
              <Text style={styles.goalItem}>{itemData.item.text}</Text>
            </Pressable>
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
    flexWrap: 'wrap',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    marginHorizontal: 7,
  },
});

export default Goals;

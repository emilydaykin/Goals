import { StyleSheet, View, FlatList, Text } from 'react-native';

const Goals = ({ goals }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return <Text style={styles.goalItem}>{itemData.item.text}</Text>;
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

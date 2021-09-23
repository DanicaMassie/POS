import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'Nasi Goreng',
    quantity: 40,
    date: '25 Mei 2021',
    revenue: 'Rp. 20.000',
    netProvit: 'Rp. 1.000.000',
  },
  {
    id: '2',
    name: 'Nasi Goreng',
    quantity: 40,
    date: '25 Mei 2021',
    revenue: 'Rp. 20.000',
    netProvit: 'Rp. 1.000.000',
  },
  {
    id: '3',
    name: 'Nasi Goreng',
    quantity: 40,
    date: '25 Mei 2021',
    revenue: 'Rp. 20.000',
    netProvit: 'Rp. 1.000.000',
  },
  {
    id: '4',
    name: 'Nasi Goreng',
    quantity: 40,
    date: '25 Mei 2021',
    revenue: 'Rp. 20.000',
    netProvit: 'Rp. 1.000.000',
  },
  {
    id: '5',
    name: 'Nasi Goreng',
    quantity: 40,
    date: '25 Mei 2021',
    revenue: 'Rp. 20.000',
    netProvit: 'Rp. 1.000.000',
  },
  {
    id: '6',
    name: 'Nasi Goreng',
    quantity: 40,
    date: '25 Mei 2021',
    revenue: 'Rp. 20.000',
    netProvit: 'Rp. 1.000.000',
  },
];

const Menu = ({name, number, quantity, date, revenue, netProvit}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.numberContainer}>{number}</Text>
    <Text style={styles.space}>{name}</Text>
    <Text style={styles.space}>{quantity}</Text>
    <Text style={styles.space}>{date}</Text>
    <Text style={styles.space}>{revenue}</Text>
    <Text style={styles.space}>{netProvit}</Text>
  </TouchableOpacity>
);

const LatestOrder = () => {
  const renderItem = ({item}) => (
    <Menu
      name={item.name}
      number={item.id}
      quantity={item.quantity}
      date={item.date}
      revenue={item.revenue}
      netProvit={item.netProvit}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 50,
    flex: 1,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  numberContainer: {
    width: 30,
    height: 30,
  },
  space: {
    width: 200,
    // backgroundColor: 'red',
  },
});

export default LatestOrder;

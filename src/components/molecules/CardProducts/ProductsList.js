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
    id: 'XXX1',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX2',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX3',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX4',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX5',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX6',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX7',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX8',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX9',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX10',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
  {
    id: 'XXX12',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
    icon: '.',
  },
];

const Menu = ({name, number, category, price, description, icon}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.numberContainer}>{number}</Text>
    <Text style={styles.space}>{name}</Text>
    <Text style={styles.space}>{category}</Text>
    <Text style={styles.space}>{price}</Text>
    <Text style={styles.space}>{description}</Text>
    <Text style={styles.space}>{icon}</Text>
  </TouchableOpacity>
);

const ProductsList = () => {
  const renderItem = ({item}) => (
    <Menu
      name={item.name}
      number={item.id}
      category={item.category}
      price={item.price}
      description={item.description}
      icon={item.icon}
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
    justifyContent: 'space-between',
  },
  numberContainer: {
    width: 60,
    height: 30,
  },
  space: {
    width: 200,
    // backgroundColor: 'red',
  },
});

export default ProductsList;

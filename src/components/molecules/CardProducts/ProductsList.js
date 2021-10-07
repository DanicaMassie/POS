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
import {Icon3dots} from '../../../assets';

const DATA = [
  {
    id: 'XXX1',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX2',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX3',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX4',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX5',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX6',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX7',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
  },
  {
    id: 'XXX8',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX9',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX10',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX11',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
  {
    id: 'XXX12',
    name: 'Nasi Goreng',
    category: '17 Mei 2021',
    price: 'Rp. 30.000',
    description: '......................',
  },
];

const Menu = ({name, number, category, price, description}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.numberContainer}>{number}</Text>
    <Text style={styles.space}>{name}</Text>
    <Text style={styles.space}>{category}</Text>
    <Text style={styles.space}>{price}</Text>
    <Text style={styles.space}>{description}</Text>
    <TouchableOpacity style={styles.icon}>
      <Icon3dots />
    </TouchableOpacity>
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
  icon: {
    width: 150,
    // backgroundColor: 'red',
  },
});

export default ProductsList;

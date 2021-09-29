import React from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon3dots, IconTogle} from '../../../assets';
const DATA = [
  {
    id: '001',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '002',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '003',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '004',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '005',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '006',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '007',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '008',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '009',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '010',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '011',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
  {
    id: '012',
    Code: '20% Off Entire Order',
    discount: '20%',
    startDate: '17 Mei 2021',
    endDate: '17 April 2021',
  },
];

const Menu = ({Code, number, discount, startDate, endDate}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.numberContainer}>{number}</Text>
    <Text style={styles.space}>{Code}</Text>
    <Text style={styles.space}>{discount}</Text>
    <Text style={styles.space}>{startDate}</Text>
    <Text style={styles.space}>{endDate}</Text>
    <IconTogle />
    <Icon3dots />
  </TouchableOpacity>
);

const ProductsList = () => {
  const renderItem = ({item}) => (
    <Menu
      Code={item.Code}
      number={item.id}
      discount={item.discount}
      startDate={item.startDate}
      endDate={item.endDate}
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

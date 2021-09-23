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
    name: 'Danica Godelva',
    joinDate: '17 Mei 2021',
    totalVisit: 3,
    purchasetItems: 'Nasi Goreng (3)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX2',
    name: 'Mario Arsjad',
    joinDate: '17 Mei 2021',
    totalVisit: 11,
    purchasetItems: 'Ayam Lalapan (2)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX3',
    name: 'Samuel Rantung',
    joinDate: '17 Mei 2021',
    totalVisit: 19,
    purchasetItems: 'Mie Goreng (9)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX4',
    name: 'Denis Toreh',
    joinDate: '17 Mei 2021',
    totalVisit: 34,
    purchasetItems: 'Jus Alpokat (7)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX5',
    name: 'Marshal Wusian',
    joinDate: '17 Mei 2021',
    totalVisit: 16,
    purchasetItems: 'Ayam Goreng (4)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX6',
    name: ' Filipo Hosang',
    joinDate: '17 Mei 2021',
    totalVisit: 20,
    purchasetItems: 'Tahu Goreng (2)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX7',
    name: 'Danica Godelva',
    joinDate: '17 Mei 2021',
    totalVisit: 3,
    purchasetItems: 'Nasi Goreng (3)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX8',
    name: 'Mario Arsjad',
    joinDate: '17 Mei 2021',
    totalVisit: 11,
    purchasetItems: 'Ayam Lalapan (2)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX9',
    name: 'Samuel Rantung',
    joinDate: '17 Mei 2021',
    totalVisit: 19,
    purchasetItems: 'Mie Goreng (9)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX10',
    name: 'Denis Toreh',
    joinDate: '17 Mei 2021',
    totalVisit: 34,
    purchasetItems: 'Jus Alpokat (7)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX11',
    name: 'Marshal Wusian',
    joinDate: '17 Mei 2021',
    totalVisit: 16,
    purchasetItems: 'Ayam Goreng (4)',
    totalSpend: 'Rp. 1.000.000',
  },
  {
    id: 'XXX12',
    name: ' Filipo Hosang',
    joinDate: '17 Mei 2021',
    totalVisit: 20,
    purchasetItems: 'Tahu Goreng (2)',
    totalSpend: 'Rp. 1.000.000',
  },
];

const Menu = ({
  name,
  number,
  joinDate,
  totalVisit,
  purchasetItems,
  totalSpend,
}) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.numberContainer}>{number}</Text>
    <Text style={styles.space}>{name}</Text>
    <Text style={styles.space}>{joinDate}</Text>
    <Text style={styles.space}>{totalVisit}</Text>
    <Text style={styles.space}>{purchasetItems}</Text>
    <Text style={styles.space}>{totalSpend}</Text>
  </TouchableOpacity>
);

const CustomerList = () => {
  const renderItem = ({item}) => (
    <Menu
      name={item.name}
      number={item.id}
      joinDate={item.joinDate}
      totalVisit={item.totalVisit}
      purchasetItems={item.purchasetItems}
      totalSpend={item.totalSpend}
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

export default CustomerList;

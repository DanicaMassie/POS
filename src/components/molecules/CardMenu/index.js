import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IconSearch} from '../../../assets';
import {Button, TextInput} from '../../../components';
import MenuList from './MenuList';
import MenuList2 from './MenuList2';
import MenuList3 from './MenuList3';
import OrderList from './OrderList';

const CardMenu = () => {
  const [selectedId, setSelectedId] = useState();

  const Category = ({item}) => {
    const color = item.id === selectedId ? 'blue' : 'white';
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={{
          height: '100%',
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 5,
          borderBottomColor: color,
          borderBottomWidth: 2,
        }}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <View style={styles.containerSearch}>
          <IconSearch />
          <Text style={styles.searchText}>Search Here...</Text>
        </View>
        <View style={styles.flatlistStyle}>
          <FlatList
            horizontal
            data={[
              {name: 'All', id: 1},
              {name: 'Makanan', id: 2},
              {name: 'Minuman', id: 3},
              {name: 'Snack', id: 4},
              {name: 'Paket', id: 5},
              {name: 'Others', id: 6},
              {name: 'Minuman', id: 7},
            ]}
            renderItem={Category}
            keyExtractor={item => item.id}
          />
        </View>
        <ScrollView>
          <Text style={{backgroundColor: 'yellow'}}>Makanan</Text>
          <MenuList />
          <Text style={{backgroundColor: 'yellow'}}>Minuman</Text>
          <MenuList2 />
          <Text style={{backgroundColor: 'yellow'}}>Snack</Text>
          <MenuList3 />
        </ScrollView>
      </View>
      <View>
        {/* style={{
          backgroundColor: 'red',
          flex: 2,
          marginTop: 34,
          marginLeft: 35,
        }}> */}
        {/* <Text>Right side</Text>
        <View style={{flex: 1, margin: 30, flexDirection: 'row'}}> */}
        {/* <CardMenu style={styles.card} /> */}
        {/* <View
            style={{
              flex: 2,
              backgroundColor: 'green',
            }}></View> */}
        {/* <View
          style={{
            flex: 2,
            backgroundColor: 'red',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}> */}
        <View style={styles.containerOrder}>
          <View style={styles.orderStyle}>
            <Text style={styles.textBold}>Current Order</Text>
            <Text style={styles.clearAll}>Clear All</Text>
            <Button type="icon-only" icon="icon-clear" />
          </View>
          <OrderList />
        </View>
        <View style={styles.containerPromo}>
          <Text style={styles.textBold}>Select Promo</Text>
          <View style={styles.promoBar}>
            <View style={styles.promoStyle}>
              <Text style={styles.textSize}>20% Promo Makanan</Text>
              <Button
                type="icon-only"
                icon="icon-arrow"
                style={styles.buttonPromo}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerDetail}>
          <Text style={styles.textBold}>Detail Transaksi</Text>
          <Text style={styles.textSize}>Subtotal</Text>
          <Text style={styles.textSize}>Pajak</Text>
          <Text style={styles.textSize}>Diskon</Text>
          <Text style={styles.textBold}>Payment</Text>
          <Button label="Place Order" />
          <Text style={styles.textBold}>Detail Pembayaran</Text>
          <Text style={styles.textSize}>Bayar</Text>
          <Text style={styles.textSize}>Kembalian</Text>
        </View>
      </View>
    </View>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    // height: 660,
    flexDirection: 'row',
    // width: '100%',
    flex: 1,
    // height: '100%',
  },
  containerMenu: {
    backgroundColor: '#ffffff',
    flex: 3,
    margin: 10,
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
  containerSearch: {
    backgroundColor: '#F7F7FC',
    height: 25,
    width: 690,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 14,
    marginLeft: 5,
  },
  flatlistStyle: {
    height: 40,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  },
  containerOrder: {
    padding: 10,
    width: 400,
    height: 300,
    backgroundColor: '#ffffff',
    // marginTop: 25,
    // marginLeft: 5,
    margin: 10,
    borderRadius: 8,
  },
  orderStyle: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    margin: 3,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSize: {
    fontSize: 14,
  },
  clearAll: {
    color: 'red',
    marginLeft: 200,
    fontSize: 14,
  },
  containerPromo: {
    padding: 10,
    width: 400,
    height: 80,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 8,
  },
  promoBar: {
    backgroundColor: '#ffffff',
    height: 40,
    width: 380,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#39A2DB',
  },
  promoStyle: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  buttonPromo: {
    marginLeft: 60,
  },
  containerDetail: {
    padding: 15,
    width: 400,
    height: 300,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 8,
  },
});

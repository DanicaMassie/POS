import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IconSearch} from '../../../assets';
import {Button, Gap} from '../../atoms';
import MenuList from './MenuList';
import MenuList2 from './MenuList2';
import MenuList3 from './MenuList3';
import OrderList from './OrderList';

const CardDashboard = () => {
  const [selectedId, setSelectedId] = useState();

  const Category = ({item}) => {
    const color = item.id === selectedId ? 'blue' : 'white';
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={styles.category(color)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const PaymentType = ({item}) => {
    const color = item.id === selectedId ? '#39A2DB' : 'white';
    const textColor = item.id === selectedId ? 'white' : 'black';
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={styles.buttonText(color)}>
        <Text style={styles.paymentText(textColor)}>{item.name}</Text>
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
          <Text style={styles.textMenu}>Makanan</Text>
          <MenuList />
          <Text style={styles.textMenu}>Minuman</Text>
          <MenuList2 />
          <Text style={styles.textMenu}>Snack</Text>
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
            <TouchableOpacity
              onPress={() => {
                console.log('heheheheh');
              }}>
              <Text style={styles.clearAll}>Clear All</Text>
              <Button type="icon-only" icon="icon-clear" />
            </TouchableOpacity>
          </View>
          <OrderList />
        </View>
        <View style={styles.containerPromo}>
          <Text style={styles.textBold}>Select Promo</Text>
          <View style={styles.promoBar}>
            <View style={styles.promoStyle}>
              <Text style={styles.textSize}>20% Promo Makanan</Text>
              <View style={styles.buttonPromo}>
                <Button
                  type="icon-only"
                  icon="icon-arrow"
                  onPress={() => {
                    console.log('arrow');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerDetail}>
          <Text style={styles.textBold}>Detail Transaksi</Text>
          <Gap height={5} />
          <Text>Subtotal</Text>
          <Gap height={3} />
          <Text>Pajak</Text>
          <Gap height={3} />
          <Text>Diskon</Text>
          <Gap height={3} />
          <Text style={styles.textBold}>Payment</Text>
          <Gap height={8} />
          <View style={styles.containerButton}>
            <View style={styles.buttonPayment}>
              <FlatList
                horizontal
                data={[
                  {name: 'Cash', id: 1},
                  {name: 'Card', id: 2},
                  {name: 'E-Wallet', id: 3},
                ]}
                renderItem={PaymentType}
                keyExtractor={item => item.id}
              />
              {/* <TouchableOpacity style={styles.buttonText}>
                <Text>Cash</Text>
              </TouchableOpacity>
              <Gap width={20} />
              <TouchableOpacity style={styles.buttonText}>
                <Text>Card</Text>
              </TouchableOpacity>
              <Gap width={20} />
              <TouchableOpacity style={styles.buttonText}>
                <Text>E-Wallet</Text>
              </TouchableOpacity> */}
            </View>
            <Gap height={8} />
            <Button label="Place Order" />
          </View>
          <Gap height={8} />
          <Text style={styles.textBold}>Detail Pembayaran</Text>
          <Gap height={5} />
          <Text>Bayar</Text>
          <Gap height={3} />
          <Text>Kembalian</Text>
        </View>
      </View>
    </View>
  );
};

export default CardDashboard;

const styles = StyleSheet.create({
  category: color => ({
    height: '100%',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    borderBottomColor: color,
    borderBottomWidth: 2,
  }),
  container: {
    // backgroundColor: '#F3F3F3',
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
  textMenu: {
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: -25,
  },
  flatlistStyle: {
    height: 40,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  },
  containerOrder: {
    padding: 8,
    width: 400,
    height: 300,
    backgroundColor: '#ffffff',
    // marginTop: 25,
    // marginLeft: 5,
    margin: 10,
    borderRadius: 8,
  },
  orderStyle: {
    backgroundColor: '#ffffff',
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
    marginLeft: 190,
    fontSize: 14,
  },
  containerPromo: {
    padding: 8,
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
    marginHorizontal: 200,
  },
  containerDetail: {
    padding: 8,
    width: 400,
    height: 300,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 8,
  },
  // textDetail: {
  //   marginBottom: 5,
  // },
  // textDetail2: {
  //   fontWeight: 'bold',
  //   marginBottom: 8,
  // },
  containerButton: {
    alignItems: 'center',
  },
  buttonPayment: {
    // flexDirection: 'row',
    width: '100%',
    height: 30,
    alignItems: 'center',
  },

  buttonText: color => ({
    width: 80,
    height: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#39A2DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    backgroundColor: color,
  }),
  paymentText: color => ({
    color: color,
  }),
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Gap} from '../../atoms';
import ItemSold from './ItemSold';
import {
  IconArrow,
  IconRedArrow,
  IconGreenArrow,
  Icon3dots,
} from '../../../assets';
import LatestOrder from './LatestOrder';

const CardAnalytics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.containerSmallCard}>
          <View style={styles.card}>
            <Text style={styles.textVarian}>Pelanggan</Text>
            <Gap width={120} />
            <IconRedArrow />
          </View>
          <Gap height={40} />
          <View style={styles.card}>
            <Text>500</Text>
            <Gap width={120} />
            <Text>-15%</Text>
          </View>
        </View>
        {/* <Gap width={70} /> */}
        <View style={styles.containerSmallCard}>
          <View style={styles.card}>
            <Text style={styles.textVarian}>Pesanan</Text>
            <Gap width={120} />
            <IconGreenArrow />
          </View>
          <Gap height={40} />
          <View style={styles.card}>
            <Text>500</Text>
            <Gap width={120} />
            <Text>+15%</Text>
          </View>
        </View>
        {/* <Gap width={70} /> */}
        <View style={styles.containerSmallCard}>
          <View style={styles.card}>
            <Text style={styles.textVarian}>Pendapatan</Text>
            <Gap width={120} />
            <IconGreenArrow />
          </View>
          <Gap height={40} />
          <View style={styles.card}>
            <Text>Rp. 30.000.000</Text>
            <Gap width={90} />
            <Text>-15%</Text>
          </View>
        </View>
        {/* <Gap width={70} /> */}
        <View style={styles.containerSmallCard}>
          <View style={styles.card}>
            <Text style={styles.textVarian}>Laba Bersih</Text>
            <Gap width={120} />
            <IconGreenArrow />
          </View>
          <Gap height={40} />
          <View style={styles.card}>
            <Text>Rp.20.000.000</Text>
            <Gap width={90} />
            <Text>-15%</Text>
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.pendapatan}>
          <View style={styles.pendapatan1}>
            <Text style={styles.textVarian}>Pendapatan</Text>
            <View style={styles.pendapatan2}>
              <Text>Harian</Text>
              <Gap width={20} />
              <IconArrow />
            </View>
            <Icon3dots />
          </View>
        </View>
        <View style={styles.itemSold}>
          <View style={styles.itemSold2}>
            <Text style={styles.textVarian}>Item Sold</Text>
            <View style={styles.itemSold3}>
              <Text>Best Sellers</Text>
              <Gap width={4} />
              <IconArrow />
            </View>
          </View>
          <ItemSold />
        </View>
      </View>
      <View style={styles.latestOrder}>
        <Text style={styles.textVarian}>Latest Order</Text>
        <View style={styles.orderTop}>
          <Text style={styles.spaceLeft}>No. </Text>
          <Text style={styles.spaceTop}>Item</Text>
          <Text style={styles.spaceTop}>Quantity</Text>
          <Text style={styles.spaceTop}>Date</Text>
          <Text style={styles.spaceTop}>Revenue</Text>
          <Text style={styles.spaceTop}>Net Provit</Text>
        </View>
        <LatestOrder />
      </View>
    </View>
  );
};

export default CardAnalytics;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 20,
    // padding: 15,
  },
  topContainer: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  containerSmallCard: {
    backgroundColor: '#ffffff',
    width: 230,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
  },
  middleContainer: {
    flexDirection: 'row',
  },
  pendapatan: {
    padding: 8,
    width: 708,
    height: 300,
    backgroundColor: 'yellow',
    // marginTop: 25,
    // marginLeft: 5,
    margin: 10,
    borderRadius: 8,
  },
  pendapatan1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#39A2DB',
  },
  pendapatan2: {
    flexDirection: 'row',
    width: 110,
    height: 30,
    marginLeft: 480,
    borderColor: '#39A2DB',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSold: {
    padding: 8,
    width: 400,
    height: 300,
    backgroundColor: '#ffffff',
    // marginTop: 25,
    // marginLeft: 5,
    margin: 10,
    borderRadius: 8,
  },
  itemSold2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#39A2DB',
  },
  itemSold3: {
    flexDirection: 'row',
    width: 110,
    height: 30,
    marginLeft: 210,
    borderColor: '#39A2DB',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  latestOrder: {
    backgroundColor: 'white',
    // width: 1130,
    // height: 285,
    flex: 1,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  orderTop: {
    flexDirection: 'row',
    backgroundColor: '#F7F7FC',
    height: 50,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingHorizontal: 15,
  },
  spaceLeft: {
    width: 30,
    // backgroundColor: 'blue',?
  },
  spaceTop: {
    width: 200,
    // backgroundColor: 'red',
  },
  textVarian: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

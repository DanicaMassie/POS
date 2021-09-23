import React from 'react';
import {View, Text, StyleSheet, YellowBox} from 'react-native';
import {IconSearch, Icon3dots, IconFilter} from '../../../assets';
import Customerlist from './CustomerList';
import {Gap} from '../../atoms';

const CardCustomer = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Customers</Text>
      </View>
      <View style={styles.containerCustomer}>
        <View style={styles.list}>
          <View style={styles.topContainer}>
            <View style={styles.containerSearch}>
              <IconSearch />
              <Text style={styles.searchText}>Search Here...</Text>
            </View>
            <IconFilter />
            <Icon3dots />
          </View>
          <Gap height={30} />
          <View style={styles.customer}>
            <Text style={styles.spaceLeft}>ID </Text>
            <Text style={styles.spaceTop}>Name</Text>
            <Text style={styles.spaceTop}>Join Date</Text>
            <Text style={styles.spaceTop}>Total Visit</Text>
            <Text style={styles.spaceTop}>Purchased Items</Text>
            <Text style={styles.spaceTop}>Total Spend</Text>
          </View>
          <Gap height={5} />
          <Customerlist />
        </View>
      </View>
    </View>
  );
};
export default CardCustomer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    flex: 1,
  },
  containerCustomer: {
    backgroundColor: '#ffffff',
    height: 690,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSearch: {
    backgroundColor: '#F7F7FC',
    height: 40,
    width: 1000,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  list: {
    backgroundColor: '#ffffff',
    height: 650,
    width: 1070,
    borderRadius: 8,
    alignItems: 'center',
  },
  // latestOrder: {
  //   backgroundColor: 'white',
  //   // width: 1130,
  //   // height: 285,
  //   flex: 1,
  //   width: '100%',
  //   borderRadius: 8,
  // },
  customer: {
    flexDirection: 'row',
    backgroundColor: '#F7F7FC',
    height: 50,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  spaceLeft: {
    width: 60,
    // backgroundColor: 'blue',?
  },
  spaceTop: {
    width: 200,
    // backgroundColor: 'red',
  },
  searchText: {
    fontSize: 14,
    marginLeft: 5,
  },
});

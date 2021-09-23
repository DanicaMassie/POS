import React from 'react';
import {BackHandler, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Sidebar, CardProducts} from '../../components';

const Products = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <Sidebar />
        <CardProducts />
      </View>
    </View>
  );
};
export default Products;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

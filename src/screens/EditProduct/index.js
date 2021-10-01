import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Sidebar, CardEditProduct} from '../../components';

const EditProduct = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <Sidebar />
        <CardEditProduct />
      </View>
    </View>
  );
};
export default EditProduct;

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

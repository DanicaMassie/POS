import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Sidebar, CardEmployee} from '../../components';

const Employee = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <Sidebar />
        <CardEmployee />
      </View>
    </View>
  );
};
export default Employee;

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

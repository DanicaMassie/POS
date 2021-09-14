import React from 'react';
import {BackHandler, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Sidebar, CardMenu} from '../../components';
// import MenuList from '../../components/molecules/CardMenu/MenuList';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <Sidebar />
        <CardMenu />
      </View>
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2E2EA',
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

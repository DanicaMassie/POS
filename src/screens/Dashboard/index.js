import React from 'react';
import {BackHandler, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, Sidebar, CardDashboard} from '../../components';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <Sidebar />
        <CardDashboard />
      </View>
    </View>
  );
};
export default Dashboard;

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

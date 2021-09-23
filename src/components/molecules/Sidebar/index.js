import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../../atoms';

const Sidebar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon="icon-dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button
        type="icon-only"
        icon="icon-analytics"
        onPress={() => navigation.navigate('Analytics')}
      />
      <Button
        type="icon-only"
        icon="icon-customer"
        onPress={() => navigation.navigate('Customer')}
      />
      <Button
        type="icon-only"
        icon="icon-product"
        onPress={() => navigation.navigate('Products')}
      />
      <Button
        type="icon-only"
        icon="icon-coupon"
        onPress={() => {
          console.log('coupon');
        }}
      />
      <Button
        type="icon-only"
        icon="icon-employee"
        onPress={() => {
          console.log('employee');
        }}
      />
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <Button
          type="icon-only"
          icon="icon-setting"
          onPress={() => {
            console.log('setting');
          }}
        />
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: 750,
    // flex: 1,
    width: 112,
    // width: 200,
    // flex: 1,
    // position: 'absolute',
    // left: 0,
    alignItems: 'center',
    // bottom: 0,
  },
});

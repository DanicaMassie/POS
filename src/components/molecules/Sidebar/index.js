import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../../../components';

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="icon-dashboard" />
      <Button type="icon-only" icon="icon-analytics" />
      <Button type="icon-only" icon="icon-customer" />
      <Button type="icon-only" icon="icon-product" />
      <Button type="icon-only" icon="icon-coupon" />
      <Button type="icon-only" icon="icon-employee" />
      <View
        style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
        <Button type="icon-only" icon="icon-setting" />
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

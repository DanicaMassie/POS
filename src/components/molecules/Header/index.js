import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ProfilePict} from '../../../assets';
import {Button} from '../..';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <Text style={styles.text1}>Point Of Sales</Text>
      <View style={styles.right}>
        <Button type="icon-only" icon="icon-notification" />
        <Image source={ProfilePict} style={styles.Pict} />
        <View style={styles.text2}>
          <Text>Kim Seon Ho</Text>
          <Text>Chasier</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#000000',
    borderWidth: 1,
    width: 40,
    height: 40,
    marginLeft: 35,
  },
  notification: {
    marginLeft: 828,
    marginTop: 16,
  },
  text1: {
    marginLeft: 15,
  },
  right: {
    margin: 20,
    marginLeft: 900,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2: {
    marginLeft: 15,
  },
});

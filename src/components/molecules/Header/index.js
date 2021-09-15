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
        <View style={{marginLeft: 10}}>
          <Text style={styles.text2}>Kim Seon Ho</Text>
          <Text style={styles.text3}>Chasier</Text>
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
    borderBottomColor: '#000000',
  },
  logo: {
    backgroundColor: '#000000',
    borderRadius: 8,
    width: 40,
    height: 40,
    marginLeft: 30,
    marginTop: 20,
  },
  notification: {
    marginLeft: 828,
    marginTop: 16,
  },
  text1: {
    marginLeft: 7,
    marginTop: 26,
  },
  right: {
    margin: 20,
    marginLeft: 900,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // text2: {
  //   marginLeft: 10,
  //   marginTop: 22,
  // },
  // text3: {
  //   marginLeft: 10,
  //   marginTop: 46,
  // },
  // Pict: {
  //   marginTop: 20,
  // },
});

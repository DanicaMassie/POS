import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import {Icon} from 'react-native-vector-icons/Icon';
import {IconSearch, IconClear, IconArrow} from '../../../assets';
import MenuList from './MenuList';

const CardMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu</Text>
      <View
        style={{
          backgroundColor: '#ffffff',
          flex: 3,
          marginTop: 34,
          alignItems: 'center',
          padding: 15,
          borderRadius: 8,
        }}>
        <View
          style={{
            backgroundColor: '#F7F7FC',
            height: 25,
            width: 630,
            borderRadius: 8,
            flexDirection: 'row',
          }}>
          <IconSearch />
          <Text>Search Here...</Text>
        </View>
        <MenuList />
      </View>
      <View
        style={{
          backgroundColor: 'red',
          flex: 2,
          marginTop: 34,
          marginLeft: 35,
        }}>
        <Text>Right side</Text>
        <View style={{flex: 1, margin: 30, flexDirection: 'row'}}>
          {/* <CardMenu style={styles.card} /> */}
          {/* <View
            style={{
              flex: 2,
              backgroundColor: 'green',
            }}></View> */}
          <View
            style={{
              flex: 2,
              backgroundColor: 'blue',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                padding: 10,
                width: 400,
                height: 400,
                backgroundColor: '#ffffff',
                margin: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  flexDirection: 'row',
                  padding: 3,
                  margin: 3,
                }}>
                <Text>Current Order</Text>
                <Text style={{color: 'red', marginLeft: 180}}>Clear All</Text>
                <IconClear />
              </View>
            </View>
            <View
              style={{
                padding: 10,
                width: 400,
                height: 80,
                backgroundColor: '#ffffff',
                margin: 10,
              }}>
              <Text>Select Promo</Text>
              <View
                style={{
                  backgroundColor: '#F7F7FC',
                  height: 40,
                  width: 380,
                  borderRadius: 8,
                  borderWidth: 2,
                  borderColor: '#39A2DB',
                  flexDirection: 'row',
                }}>
                <Text>20% Promo Makanan</Text>
                <IconArrow />
              </View>
            </View>
            <View
              style={{
                padding: 10,
                flex: 1,
                width: '100%',
                backgroundColor: 'yellow',
                margin: 10,
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: 660,
    flexDirection: 'row',
    // width: '100%',
    flex: 1,
  },
  text: {},
});

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {Menu1} from '../../../assets';
import {Gap} from '../../atoms';

const CardSetting = () => {
  return (
    <View style={styles.firstContainer}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Edit Product</Text>
      <Gap height={10} />
      <View style={styles.secContainer}>
        <View style={styles.cardContainer1}>
          <Image source={Menu1} style={styles.Pict} />
          <View style={styles.card}>
            <Text style={styles.text}>Select company image/logo</Text>
            <Gap height={30} />
            <View style={styles.text}>
              <TouchableOpacity style={styles.browse}>
                <Text>Browse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Business Name</Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>KTP</Text>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Phone Number</Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>08XX XXXX XXXX</Text>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Email</Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>ktp@gmail.com</Text>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Country </Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>Indonesia</Text>
          </View>
        </View>
        <View style={styles.smallContainer}>
          <View style={styles.cardContainer3}>
            <Text style={styles.text}>Province</Text>
            <Gap height={8} />
            <View style={styles.smallBox}>
              <Text>Sulawesi Utara</Text>
            </View>
          </View>
          <View style={styles.cardContainer3}>
            <Text style={styles.text}>City</Text>
            <Gap height={8} />
            <View style={styles.smallBox}>
              <Text>Minahasa Utara</Text>
            </View>
          </View>
          <View style={styles.cardContainer3}>
            <Text style={styles.text}>Postal Code</Text>
            <Gap height={8} />
            <View style={styles.smallBox}>
              <Text>9876</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Address</Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>blalbalbalba blalbalba</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardSetting;

const styles = StyleSheet.create({
  firstContainer: {
    // backgroundColor: 'yellow',
    flex: 1,
    padding: 20,
  },
  secContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flex: 1,
    padding: 15,
    borderRadius: 8,
    // justifyContent: 'center',
  },
  cardContainer1: {
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  Pict: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  card: {
    flexDirection: 'column',
    margin: 15,
  },
  browse: {
    backgroundColor: '#39A2DB',
    height: 25,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardContainer2: {
    margin: 10,
  },
  box: {
    backgroundColor: '#F7F7FC',
    width: '100%',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DBD7F4',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  smallContainer: {
    flexDirection: 'row',
  },
  cardContainer3: {
    margin: 10,
  },
  smallBox: {
    backgroundColor: '#F7F7FC',
    width: 346,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DBD7F4',
    justifyContent: 'center',
  },
});

import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {Menu1} from '../../../assets';
import {Gap} from '../../atoms';

const CardEditProduct = () => {
  return (
    <View style={styles.firstContainer}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}>Edit Product</Text>
      <Gap height={10} />
      <View style={styles.secContainer}>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>ID</Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>001</Text>
          </View>
        </View>
        <View style={styles.cardContainer1}>
          <Image source={Menu1} style={styles.Pict} />
          <View style={styles.card}>
            <Text style={styles.text}>Select Picture</Text>
            <Gap height={30} />
            <View style={styles.text}>
              <TouchableOpacity style={styles.browse}>
                <Text style={styles.variantext}>Browse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Product Name</Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>Nasi Goreng</Text>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Category</Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>Makanan</Text>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Price </Text>
          <Gap height={8} />
          <View style={styles.box}>
            <Text>Rp. 25.000</Text>
          </View>
        </View>
        <View style={styles.cardContainer2}>
          <Text style={styles.text}>Description</Text>
          <Gap height={8} />
          <View style={styles.boxDesc}>
            <Text>blalbalbalba blalbalba</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardEditProduct;

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
  boxDesc: {
    backgroundColor: '#F7F7FC',
    width: '100%',
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DBD7F4',
    // justifyContent: 'center',
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
  variantext: {
    color: 'white',
  },
});

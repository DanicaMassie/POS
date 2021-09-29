import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Gap} from '../../atoms';
import {ProfilePict, IconAdd, IconEdit} from '../../../assets';

const CardEmployee = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topLine}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Employee Shift</Text>
        <TouchableOpacity style={styles.create}>
          <Text>Create New</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <View style={styles.shift}>
          <Text style={styles.textVarian}>Shift 1 (06.00 AM - 12.00 AM)</Text>
          <Gap width={760} />
          <TouchableOpacity>
            <IconEdit />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAdd />
          </TouchableOpacity>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Kim Seon Ho</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.admin}>
                  <Text>Admin</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Lee Jung Suk</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.cashier}>
                  <Text>Cashier</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Kim So Hyun</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.chef}>
                  <Text>Chef</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Song Jong Ki</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.chef}>
                  <Text>Chef</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Lee Dong Wook</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Gong Yo</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Ji Chang Wook</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Hyun Bin</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.shift}>
          <Text style={styles.textVarian}>Shift 2 (12.00 AM - 18.00 PM)</Text>
          <Gap width={760} />
          <TouchableOpacity>
            <IconEdit />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAdd />
          </TouchableOpacity>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Kim Seon Ho</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.admin}>
                  <Text>Admin</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Lee Jung Suk</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.cashier}>
                  <Text>Cashier</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Kim So Hyun</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.chef}>
                  <Text>Chef</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Song Jong Ki</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.chef}>
                  <Text>Chef</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Lee Dong Wook</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Gong Yo</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Ji Chang Wook</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.containerSmallCard}>
            <Image source={ProfilePict} style={styles.Pict} />
            <View style={styles.card}>
              <Text style={styles.textVarian}>Hyun Bin</Text>
              <Gap height={10} />
              <View style={styles.text}>
                <TouchableOpacity style={styles.waitress}>
                  <Text>Waitress</Text>
                </TouchableOpacity>
                <Gap width={10} />
                <TouchableOpacity style={styles.detail}>
                  <Text>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardEmployee;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 20,
    // padding: 15,
    justifyContent: 'space-between',
  },
  topLine: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  create: {
    backgroundColor: '#39A2DB',
    width: 90,
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    margin: 20,
    // padding: 15,
    borderRadius: 8,
  },
  shift: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  firstContainer: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    flex: 1,
  },
  secondContainer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  containerSmallCard: {
    backgroundColor: '#ffffff',
    width: 230,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9A9AB0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
  },
  card: {
    flexDirection: 'column',
    margin: 10,
  },
  Pict: {
    width: 60,
    height: 60,
  },
  text: {
    flexDirection: 'row',
  },
  admin: {
    backgroundColor: '#A2DBFA',
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cashier: {
    backgroundColor: '#42BDA1',
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  chef: {
    backgroundColor: '#EEAF22',
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  waitress: {
    backgroundColor: '#C4C4C4',
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  detail: {
    // backgroundColor: 'yellow',
    width: 50,
    height: 30,
    justifyContent: 'center',
  },
  textVarian: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

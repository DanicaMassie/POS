import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {Menu1} from '../../../assets';
import {Button} from '../../../components';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53acb28ba',
    title: 'Nasi Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53aab28ba',
    title: 'Nasi Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Nasi Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Mie Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ikan Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571231e29d72',
    title: 'Ikan Goreng',
    price: 'Rp. 20.000',
  },
];

const Item = ({title, price}) => (
  <View style={styles.item}>
    <View style={styles.pictureContainer}>
      <Image
        source={Menu1}
        style={{width: '100%', height: '100%', borderRadius: 8}}
      />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title1}>{title}</Text>
      <Text style={styles.title1}>{price}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button type="icon-only" icon="icon-min" />
      <Button type="icon-only" icon="icon-plus" />
    </View>
  </View>
);

const OrderList = () => {
  const renderItem = ({item}) => <Item title={item.title} price={item.price} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
  },
  pictureContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
  titleContainer: {
    flexDirection: 'column',
  },
  title1: {
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default OrderList;

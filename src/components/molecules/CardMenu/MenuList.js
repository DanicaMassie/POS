import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Menu1} from '../../../assets';

const DATA = [
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
];

const Menu = ({title, price}) => (
  <View style={styles.item}>
    <View style={styles.pictureContainer}>
      <Image source={Menu1} />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

const MenuList = () => {
  const renderItem = ({item}) => <Menu title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    width: 150,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});

export default MenuList;

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
    title: 'Pisang Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ubi Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Kentang Goreng',
    price: 'Rp. 20.000',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145p71e29d72',
    title: 'Ice Cream',
    price: 'Rp. 20.000',
  },
  {
    id: '58694a0f-3da1-471f-bo96-145p71e29d72',
    title: 'Banana Split',
    price: 'Rp. 20.000',
  },
];

const Menu = ({title, price}) => (
  <View style={styles.item}>
    <View style={styles.pictureContainer}>
      <Image source={Menu1} style={{width: '100%', height: '100%'}} />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{price}</Text>
  </View>
);

const MenuList3 = () => {
  const renderItem = ({item}) => <Menu title={item.title} price={item.price} />;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: 'white',
    height: 180,
    width: 160,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  pictureContainer: {
    width: 160,
    height: 120,
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 14,
    padding: 5,
  },
});

export default MenuList3;

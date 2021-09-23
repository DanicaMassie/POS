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
import {Gap} from '../../atoms';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53acb28ba',
    title: 'Nasi Goreng',
    items: '40 Items',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53aab28ba',
    title: 'Nasi Goreng',
    items: '40 Items',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Nasi Goreng',
    items: '40 Items',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Mie Goreng',
    items: '40 Items',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ikan Goreng',
    items: '40 Items',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571231e29d72',
    title: 'Ikan Goreng',
    items: '40 Items',
  },
];

const Item = ({title, items}) => (
  <View style={styles.item}>
    <View style={styles.pictureContainer}>
      <Image
        source={Menu1}
        style={{width: '100%', height: '100%', borderRadius: 8}}
      />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title1}>{title}</Text>
      <Gap width={140} />
      <Text style={styles.title1}>{items}</Text>
    </View>
  </View>
);

const ItemSold = () => {
  const renderItem = ({item}) => <Item title={item.title} items={item.items} />;

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
    backgroundColor: '#ffffff',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  title1: {
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 150,
  },
});

export default ItemSold;

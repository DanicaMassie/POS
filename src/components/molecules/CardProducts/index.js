import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconSearch, Icon3dots, IconFilter} from '../../../assets';
import {Gap, Button} from '../../atoms';
import ProductsList from './ProductsList';

const CardProducts = () => {
  const [selectedId, setSelectedId] = useState();
  const ButtonType = ({item}) => {
    const color = item.id === selectedId ? '#39A2DB' : 'white';
    const textColor = item.id === selectedId ? 'white' : 'black';
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={styles.buttonText(color)}>
        <Text style={styles.varianText(textColor)}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Products</Text>
        <View style={styles.add}>
          <FlatList
            horizontal
            data={[{name: 'Add Product', id: 1}]}
            renderItem={ButtonType}
            keyExtractor={item => item.id}
          />
        </View>
        <TouchableOpacity style={styles.add}>
          <Text>Add Products</Text>
        </TouchableOpacity>

        {/* <Gap height={8} />
          <Button label="Place Order" /> */}
      </View>
      <Gap height={10} />

      <View style={styles.containerCustomer}>
        <View style={styles.list}>
          <View style={styles.topContainer}>
            <View style={styles.containerSearch}>
              <IconSearch />
              <Text style={styles.searchText}>Search Here...</Text>
            </View>
            <TouchableOpacity>
              <IconFilter />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon3dots />
            </TouchableOpacity>
          </View>
          <Gap height={30} />
          <View style={styles.customer}>
            <Text style={styles.spaceLeft}>ID </Text>
            <Text style={styles.spaceTop}>Item</Text>
            <Text style={styles.spaceTop}>Category</Text>
            <Text style={styles.spaceTop}>Price</Text>
            <Text style={styles.spaceTop}>Description</Text>
          </View>
          <Gap height={5} />
          <ProductsList />
        </View>
      </View>
    </View>
  );
};
export default CardProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    // alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    flex: 1,
  },
  containerCustomer: {
    backgroundColor: '#ffffff',
    height: 680,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  add: {
    // flexDirection: 'row',
    width: '100%',
    height: 30,
    alignItems: 'center',
  },
  containerSearch: {
    backgroundColor: '#F7F7FC',
    height: 40,
    width: 1000,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  list: {
    backgroundColor: '#ffffff',
    height: 650,
    width: 1070,
    borderRadius: 8,
    alignItems: 'center',
  },
  // latestOrder: {
  //   backgroundColor: 'white',
  //   // width: 1130,
  //   // height: 285,
  //   flex: 1,
  //   width: '100%',
  //   borderRadius: 8,
  // },
  customer: {
    flexDirection: 'row',
    backgroundColor: '#F7F7FC',
    height: 50,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  spaceLeft: {
    width: 60,
    // backgroundColor: 'blue',?
  },
  spaceTop: {
    width: 200,
    // backgroundColor: 'red',
  },
  searchText: {
    fontSize: 14,
    marginLeft: 5,
  },

  buttonText: color => ({
    width: 90,
    height: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#39A2DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    backgroundColor: color,
  }),
  varianText: color => ({
    color: color,
  }),
});

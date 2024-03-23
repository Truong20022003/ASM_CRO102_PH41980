import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Itemshop from './itemshop';
import Top_home from '../../navigation/top_home';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Reload from '../reload';
import Footer_shop from '../giohang/Footer_gioHang';
const Shop = props => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(true);
  /////api
  const [products, setproducts] = useState([]);
  const getAPI = async () => {
    try {
      const respone = await fetch(
        'https://65bb362652189914b5bb6f61.mockapi.io/products',
      );
      const data = await respone.json();
      setproducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Top_home />
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: '20',
          alignItems: 'center',
        }}>
        <View>
          <Text>Liên quan</Text>
          <View style={{height: 1.5, backgroundColor: 'red', width: 70}}></View>
        </View>
        <Text>Mới nhất</Text>
        <Text>Bán chạy</Text>
        <Text>Giá</Text>
      </View>
      {isLoading ? (
        <Reload />
      ) : (
        <FlatList
          style={{marginTop: 5}}
          data={products}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item}) => <Itemshop products={item} />}
          keyExtractor={item => item.id}
        />
      )}
      {/* <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item}) => <Itemshop products={item} />}
      /> */}
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({});

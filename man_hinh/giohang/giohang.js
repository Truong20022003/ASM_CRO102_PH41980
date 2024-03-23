import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  _View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Top_giohang from './top_giohang';
import Item_giohang from './item_giohang';
import {useRoute} from '@react-navigation/native';
import {useCart} from '../../context/myCart';
import Footer_gioHang from './Footer_gioHang';
const Giohang = () => {
  const route = useRoute();
  // const [cartItems, setCartItems] = useState([]);
  const {addToCart, setaddToCart, getCart} = useCart();
  const check_ds = addToCart.length === 0;
  const [nhandlcheckall, setnhandlcheckall] = useState(false);
  const handcheckall = isSelected => {
    setnhandlcheckall(isSelected);
  };
  // const [listcart, setlistcart] = useState(addToCart);
  // const addToCart = item => {
  //   setCartItems([...cartItems, item]);
  // };
  // const getAPI = async () => {
  //   try {
  //     const respone = await fetch(
  //       'https://65bba4ab52189914b5bcbf34.mockapi.io/carts',
  //     );
  //     const data = await respone.json();
  //     setCartItems(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAPI();
  // }, []);
  return (
    <View style={{flex: 1}}>
      <Top_giohang />
      {check_ds ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            Không có sản phẩm yêu thích
          </Text>
        </View>
      ) : (
        <FlatList
          data={addToCart}
          renderItem={({item}) => (
            <Item_giohang data={item} nhancheckall={nhandlcheckall} />
          )}
          keyExtractor={item => item.id}
        />
      )}
      <Footer_gioHang checkall={handcheckall} />
    </View>
  );
};

export default Giohang;

const styles = StyleSheet.create({});

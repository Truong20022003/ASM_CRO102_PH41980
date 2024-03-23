import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {icon} from '../../file_anh';
import NavigationTop from '../../navigation/navigationTop';
import BottonShop from './BottonShop';
import Top from './Top';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCart} from '../../context/myCart';
/////////////////
const Kengang = <View style={{height: 10, backgroundColor: '#d4d4d4'}}></View>;
const giamgia = (
  <View
    style={{
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      height: 40,
    }}>
    <Text style={{}}>Voucher của shop</Text>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          backgroundColor: 'orange',
          color: 'white',
          fontWeight: 'bold',
        }}>
        Giảm10%
      </Text>
      <Text
        style={{
          backgroundColor: 'orange',
          color: 'white',
          fontWeight: 'bold',
          marginHorizontal: 10,
        }}>
        Giảm5%
      </Text>
      <Image source={icon.next} style={{height: 20, width: 20}} />
    </View>
  </View>
);
///////////

const Chi_tiet_sp = props => {
  const navigetion = useNavigation();
  const route = useRoute();
  const formatPrice = price => {
    // Sử dụng toLocaleString để thêm dấu chấm phân cách mỗi 3 số
    return price.toLocaleString('en-US');
  };
  const {addlove, setaddlove, getlove} = useCart();
  const selectedItem = route.params?.selectedItem;
  const [isforcus, setisforcus] = useState(false);
  const toggleIcon = async () => {
    // Khi icon được bấm, đảo ngược giá trị của isforcus
    setisforcus(!isforcus);

    let {
      id,
      name,
      gia,
      url,
      mota,
      sao,
      // isFavorite,
    } = selectedItem;

    console.log(sao, name, id);
    const isFavorite = addlove.some(item => item.id === id);

    if (!isFavorite) {
      // Nếu sản phẩm chưa có trong danh sách yêu thích, thêm nó vào
      const updatedFavorites = [...addlove, {id, name, gia, url, mota, sao}];
      setaddlove(updatedFavorites);
      // Lưu danh sách yêu thích mới vào AsyncStorage
      try {
        await AsyncStorage.setItem(
          'notelove',
          JSON.stringify(updatedFavorites),
        );
      } catch (error) {
        console.log('bắn tùm lum', error);
      }
    } else {
      // Nếu sản phẩm đã có trong danh sách yêu thích, loại bỏ nó
      const updatedFavorites = addlove.filter(item => item.id !== id);
      setaddlove(updatedFavorites);

      // Lưu danh sách yêu thích mới vào AsyncStorage
      try {
        await AsyncStorage.setItem(
          'notelove',
          JSON.stringify(updatedFavorites),
        );
      } catch (error) {
        console.log('lỗi tùm lum', error);
      }
    }

    // Đảo ngược giá trị của isforcus
    setisforcus(!isforcus);
  };

  // console.log(toggleIcon);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Top />
      <ScrollView>
        <Image
          source={{uri: selectedItem.url}}
          style={{
            height: 300,
            width: '100%',
            // borderBottomRightRadius: 10,
            // borderBottomLeftRadius: 10,
          }}
        />
        <ScrollView
          horizontal
          style={{height: 100, borderBottomWidth: 0.5, borderTopWidth: 0.5}}
          // renderItem={({item}) => (
          // )}
        >
          <View>
            <Image source={icon.chuong} style={{height: '100%', width: 100}} />
          </View>
          <View>
            <Image source={icon.chuong} style={{height: '100%', width: 100}} />
          </View>
        </ScrollView>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 17, color: 'red', fontWeight: 'bold'}}>
            đ<Text style={{fontSize: 25}}>{formatPrice(selectedItem.gia)}</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              {selectedItem.name}.
            </Text>
            <View flexDirection={'row'}>
              <Image source={icon.diachi} style={{height: 13, width: 13}} />
              <Text style={{fontSize: 12}}>Địa chỉ: {selectedItem.diachi}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginStart: 5,
              }}>
              <Image
                source={icon.star}
                style={{height: 20, width: 20, marginRight: 3}}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 12,
                  marginEnd: 10,
                }}>
                {selectedItem.sao}/5
              </Text>
              <Text>|</Text>
              <Text style={{color: 'black', marginLeft: 10, fontSize: 12}}>
                Đã bán:
              </Text>
              <Text style={{color: 'black', fontSize: 12}}>
                {selectedItem.daban}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              {/* <TouchableOpacity>
                <Image
                  source={icon.tim}
                  style={{height: 30, width: 30, marginEnd: 10}}
                />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={toggleIcon}>
                <Image
                  source={isforcus ? icon.tim2 : icon.tim}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={icon.comment}
                  style={{height: 30, width: 30, marginHorizontal: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {Kengang}
        {giamgia}
        {Kengang}
        <Text style={{color: 'black', fontWeight: 'bold', marginStart: 10}}>
          Mô tả sản phẩm
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            // backgroundColor: 'red',
            width: '100%',
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          {selectedItem.mota}
        </Text>
      </ScrollView>
      <BottonShop selectedItem={selectedItem} />
    </View>
  );
};

export default Chi_tiet_sp;

const styles = StyleSheet.create({});

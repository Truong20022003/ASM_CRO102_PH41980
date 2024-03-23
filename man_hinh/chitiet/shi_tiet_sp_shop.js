import {
  Image,
  Modal,
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
import Top from './Top';
import BottonShop from './BottonShop';

////
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
const Chi_tiet_sp_shop = props => {
  const [selectedItem2, setSelectedItem2] = useState(null);
  const navigetion = useNavigation();
  const route = useRoute();
  const [modal, setmodal] = useState(false);
  const formatPrice = price => {
    // Sử dụng toLocaleString để thêm dấu chấm phân cách mỗi 3 số
    return price.toLocaleString('en-US');
  };
  const [isforcus, setisforcus] = useState(false);
  const toggleIcon = () => {
    // Khi icon được bấm, đảo ngược giá trị của isforcus
    setisforcus(!isforcus);
  };
  const selectedItem = route.params?.selectedItem;
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
        <View style={{padding: 10}}>
          <Text style={{fontSize: 17, color: 'red', fontWeight: 'bold'}}>
            đ<Text style={{fontSize: 20}}>{formatPrice(selectedItem.gia)}</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: 'bold',
                flex: 4,
              }}>
              {selectedItem.name}.
            </Text>
            <View style={{flexDirection: 'row', flex: 1}}>
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
              <TouchableOpacity onPress={toggleIcon}>
                <Image
                  source={isforcus ? icon.tim2 : icon.tim}
                  style={{height: 30, width: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={icon.comment}
                  style={{height: 30, width: 30, marginEnd: 10}}
                />
              </TouchableOpacity>
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
              justifyContent: 'center',
            }}>
            {selectedItem.mota}
          </Text>
        </View>
      </ScrollView>
      <BottonShop selectedItem={selectedItem} />
    </View>
  );
};

export default Chi_tiet_sp_shop;

const styles = StyleSheet.create({});

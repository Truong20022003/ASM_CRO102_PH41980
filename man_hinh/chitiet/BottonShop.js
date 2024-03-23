import {
  Alert,
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {icon} from '../../file_anh';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCart} from '../../context/myCart';
import {useNavigation} from '@react-navigation/native';
const BottonShop = props => {
  const navigation = useNavigation();
  const {addToCart, setaddToCart, getCart} = useCart();
  const formatPrice = price => {
    // Sử dụng toLocaleString để thêm dấu chấm phân cách mỗi 3 số
    return price.toLocaleString('en-US');
  };
  const {id, name, url, gia, diachi, daban, sao} = props.selectedItem;
  const addToCart2 = async () => {
    let formdata = {
      id: id,
      name: name,
      gia: gia,
      url: url,
    };
    console.log(id);
    const pustCart = [...addToCart, formdata];

    const checkcart = addToCart.find(item => item.id === id); // Tìm sản phẩm có id tương tự trong giỏ hàng
    if (!checkcart) {
      setaddToCart(pustCart);
      await AsyncStorage.setItem('notecart', JSON.stringify(pustCart));
    } else {
      Alert.alert('Sản phẩm đã có trong giỏ hàng');
    }
    console.log(checkcart + 'datagiong');
  };
  const [giohang_muangay, setgiohang_muangay] = useState(true);
  const [modal, setmodal] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#008060',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=50&id=38977&format=png',
            }}
            style={{height: 20, width: 20, tintColor: 'white'}}
          />
          <Text style={{fontSize: 10, color: 'white'}}>Chat ngay</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 25,
            alignSelf: 'center',
            borderRightWidth: 1,
          }}></View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            setmodal(true);
            setgiohang_muangay(false);
          }}>
          <Image
            source={icon.giohang2}
            style={{height: 23, width: 23, tintColor: 'white'}}
          />
          <Text style={{fontSize: 10, color: 'white'}}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          setgiohang_muangay(true);
          setmodal(true);
        }}
        style={{
          backgroundColor: '#ff471a',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          flex: 1,
        }}>
        <Text style={{fontSize: 15, color: 'white'}}>Mua ngay</Text>
      </TouchableOpacity>
      {/* ///////////////
      
      
      
      
      
      */}
      <Modal animationType="fade" transparent={true} visible={modal}>
        <TouchableOpacity
          style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}}
          onPress={() => setmodal(false)}></TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            // backgroundColor: 'gray',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 20,
              height: 400,
              width: '100%',
            }}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', position: 'absolute'}}
              onPress={() => {
                setmodal(false);
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={icon.dong}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 20,
                // backgroundColor: 'pink',
              }}>
              <Image
                source={{
                  uri: url,
                }}
                style={{
                  height: 100,
                  width: 80,
                  flex: 1,
                }}
              />
              <View
                style={{
                  alignSelf: 'flex-end',
                  flex: 2,
                  paddingHorizontal: 20,
                }}>
                <Text style={{color: 'red', fontSize: 20}}>
                  đ{formatPrice(gia)}
                </Text>
                <Text>Kho: 478</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderTopWidth: 0.5,
                paddingVertical: 5,
                paddingHorizontal: 10,
                // backgroundColor: 'green',
              }}>
              <Text>Chọn</Text>
              <View style={{flexWrap: 'wrap', height: 120}}>
                <TouchableOpacity style={st.buttonnho}>
                  <Image source={{uri: url}} style={st.anhnho} />
                  <Text style={st.chu}> {name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={st.buttonnho}>
                  <Image source={{uri: url}} style={st.anhnho} />
                  <Text style={st.chu}> {name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={st.buttonnho}>
                  <Image source={{uri: url}} style={st.anhnho} />
                  <Text style={st.chu}> {name}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
              }}>
              <Text> so luong</Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 0.5,
                  justifyContent: 'center',
                  // paddingHorizontal: 15,
                  // marginStart: 10,
                  borderColor: 'black',
                  height: 25,
                  width: 90,
                  // flex: 1,
                  alignItems: 'center',
                }}>
                <Text style={{flex: 1, textAlign: 'center'}}>-</Text>
                <Text
                  style={{
                    flex: 1.7,
                    borderRightWidth: 0.5,
                    borderLeftWidth: 0.5,
                    // height: 25,
                    lineHeight: 25,
                    textAlign: 'center',
                  }}>
                  1
                </Text>
                <Text style={{flex: 1, textAlign: 'center'}}>+</Text>
              </View>
            </View>
            {giohang_muangay ? (
              <TouchableOpacity
                onPress={() => {
                  setmodal(false);
                  // addToCart2();
                }}
                style={{
                  backgroundColor: 'red',
                  marginTop: 10,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'white'}}>Mua hang</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setmodal(false);
                  addToCart2();
                }}
                style={{
                  backgroundColor: 'red',
                  marginTop: 10,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'white'}}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BottonShop;

const st = StyleSheet.create({
  buttonnho: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.1)',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
    width: '43%',
    margin: 10,
  },
  anhnho: {
    height: 40,
    width: 40,
  },
  chu: {
    fontSize: 12,
    width: '70%',
    textAlign: 'justify',
  },
});

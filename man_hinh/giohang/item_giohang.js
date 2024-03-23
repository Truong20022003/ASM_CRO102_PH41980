import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {icon} from '../../file_anh';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCart} from '../../context/myCart';
const Item_giohang = props => {
  const {id, name, url, gia} = props.data;
  const [isSelected, setSelection] = useState(false);
  const [count, setcount] = useState(1);
  const Cong = () => {
    setcount(count + 1);
  };
  const Tru = () => {
    if (count > 1) {
      setcount(count - 1);
    } else {
      Alert.alert('Ban co chac muon xoa khong', '', [
        {text: 'huy'},
        {
          text: 'ok',
          onPress: () => {
            xoa();
          },
        },
      ]);
    }
  };
  const formatPrice = price => {
    // Sử dụng toLocaleString để thêm dấu chấm phân cách mỗi 3 số
    return price.toLocaleString('en-US');
  };
  const {removeFromCart} = useCart();
  const xoa = async () => {
    removeFromCart(id);
  };
  return (
    <View style={{}}>
      {/* khoi 1 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text style={{}}>Shopee</Text>
          <Image
            source={icon.back}
            style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginEnd: 10,
          }}>
          <Text style={{fontSize: 13, marginEnd: 7}}>Sửa</Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Ban co chac muon xoa khong', '', [
                {text: 'huy'},
                {
                  text: 'ok',
                  onPress: () => {
                    xoa();
                  },
                },
              ]);
            }}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=24&id=K7OXfoF0zHXw&format=png',
              }}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* khoi2 */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          marginTop: 10,
          height: 180,
          alignItems: 'center',
        }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{start: 2}}
        />
        <View style={{flexDirection: 'row', top: -10, padding: 10}}>
          <Image
            style={{height: 120, width: 120}}
            source={{
              uri: url,
            }}
          />
          <View style={{justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 18,
                marginStart: 10,
                color: 'black',
                // width: '70%',
              }}>
              {name}
            </Text>
            {/* //// */}
            <Text style={{marginStart: 10, fontSize: 13, color: 'red'}}>
              đ
              <Text style={{fontSize: 15, marginStart: 10, color: 'red'}}>
                {formatPrice(gia)}
              </Text>
            </Text>
            {/* /// */}
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
                marginStart: 10,
                // flex: 1,
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{flex: 1}} onPress={() => Tru()}>
                <Text style={{textAlign: 'center'}}>-</Text>
              </TouchableOpacity>

              <Text
                style={{
                  flex: 1.7,
                  borderRightWidth: 0.5,
                  borderLeftWidth: 0.5,
                  // height: 25,
                  lineHeight: 25,
                  textAlign: 'center',
                }}>
                {count}
              </Text>
              <TouchableOpacity style={{flex: 1}} onPress={() => Cong()}>
                <Text style={{textAlign: 'center'}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* khoi 3 */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          top: -10,
          borderTopWidth: 0.3,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=80&id=80058&format=png',
            }}
            style={{height: 30, width: 30, tintColor: 'red', marginEnd: 10}}
          />
          <Text style={{color: 'black'}}>Voucher giảm đến xxx%</Text>
        </View>
        <Image
          source={{uri: 'https://img.icons8.com/?size=50&id=61&format=png'}}
          style={{height: 25, width: 25}}
        />
      </View>
      {/* khoi 4 */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          borderTopWidth: 0.2,
          borderColor: 'gray',
          paddingHorizontal: 10,
          top: -10,
          // width: 'auto',
        }}>
        <Image
          style={{height: 30, width: 30, tintColor: 'green', marginEnd: 20}}
          source={{
            uri: 'https://img.icons8.com/?size=48&id=QuNmrRuf4Gjy&format=png',
          }}
        />
        <Text style={{color: 'black', fontSize: 13, width: 300}}>
          Giảm đ15.000 phí vận chuyển đơn tối thiểu đ99.000; Giảm đ25.000 phí
          vận chuyển đơn tối t...
        </Text>
      </View>
    </View>
  );
};

export default Item_giohang;

const styles = StyleSheet.create({});

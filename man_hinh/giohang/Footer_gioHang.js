import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Footer_gioHang = ({checkall}) => {
  const [click, setclick] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [allcheckbox, setallcheckbox] = useState(false);
  const handcheckall = () => {
    checkall(!isSelected);
    setSelection(!isSelected);
  };
  return (
    <View
      style={{
        // height: 100,
        backgroundColor: 'yellow',
        width: '100%',
        // bottom: 120,
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 1,
            shadowRadius: 20,
          },
          android: {
            elevation: 6, // Độ cao của shadow
          },
        }),
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderBottomWidth: 0.3,
          alignItems: 'center',
          paddingVertical: 5,
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
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderBottomWidth: 0.4,
          borderColor: 'gray',
          alignItems: 'center',
          paddingVertical: 4,
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=50&id=66757&format=png',
            }}
            style={{height: 25, width: 25, tintColor: '#ff9900'}}
          />
          <Text style={{color: 'black'}}>
            {'    '}Bạn chưa có Shopee Xu{'   '}
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=24&id=NA8QqPrMsofO&format=png',
              }}
              style={{height: 15, width: 15}}
            />
          </Text>
        </View>
        <Switch
          value={click}
          onValueChange={value => (value ? setclick(true) : setclick(false))}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderBottomWidth: 0.4,
          borderColor: 'gray',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingStart: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <CheckBox
            value={isSelected}
            onValueChange={handcheckall}
            style={{marginEnd: 5}}
          />
          <Text>Tất cả</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 12}}>
            Tổng thanh toán
            <Text style={{fontSize: 14, color: 'red', fontWeight: 'bold'}}>
              đ389.000
            </Text>
          </Text>
          <Text style={{fontSize: 12, marginStart: 40}}>
            Tiết kiệm <Text style={{fontSize: 14, color: 'red'}}> đ11.000</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ff471a',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
          }}>
          <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
            Mua hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer_gioHang;

const styles = StyleSheet.create({});

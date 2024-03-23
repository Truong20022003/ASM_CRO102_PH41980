import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-vector-icons/Icon';
import {icon} from '../../../file_anh';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../../../context/myCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Mon_an = props => {
  const formatPrice = price => {
    // Sử dụng toLocaleString để thêm dấu chấm phân cách mỗi 3 số
    return price.toLocaleString('en-US');
  };
  const {addlove, setaddlove, getlove} = useCart();
  const [isforcus, setisforcus] = useState(false);
  const navigation = useNavigation();
  let {name, gia, status, url, website, mota, id, sao} = props.food;
  const toggleIcon = async () => {
    // Khi icon được bấm, đảo ngược giá trị của isforcus
    setisforcus(!isforcus);
    let formdata = {
      id: id,
      name: name,
      gia: gia,
      url: url,
      mota: mota,
      sao: sao,
      isFavorite: isFavorite,
    };
    // console.log(sao, name);
    const isFavorite = addlove.some(item => item.id === id);

    if (!isFavorite) {
      // Nếu sản phẩm chưa có trong danh sách yêu thích, thêm nó vào
      const updatedFavorites = [...addlove, formdata];
      setaddlove(updatedFavorites);
      // Lưu danh sách yêu thích mới vào AsyncStorage
      try {
        await AsyncStorage.setItem(
          'notelove',
          JSON.stringify(updatedFavorites),
        );
      } catch (error) {
        console.log('Error saving favorite:', error);
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
        console.log('Error saving favorite:', error);
      }
    }

    // Đảo ngược giá trị của isforcus
    setisforcus(!isforcus);
    console.log(formdata);
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={{
          height: 120,
          paddingStart: 10,
          paddingTop: 10,
          flexDirection: 'row',
        }}
        onPress={() => {
          navigation.navigate('Chi_tiet_sp', {
            selectedItem: props.food,
          });
        }}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15,
          }}
          source={{
            uri: url,
          }}
        />

        <View style={{flex: 1, marginRight: 10, bottom: 0, top: 0}}>
          <View
            style={{
              flexDirection: 'row',
              paddingEnd: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              {name}
            </Text>
            <TouchableOpacity onPress={toggleIcon}>
              <Image
                source={isforcus ? icon.tim2 : icon.tim}
                style={{height: 15, width: 15}}
              />
            </TouchableOpacity>
          </View>
          <View style={{height: 1, backgroundColor: 'black'}} />
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'gray', fontSize: 15}}>Trạng thái: </Text>
            <Text style={{color: 'rgb(252,177,0)', fontSize: 15}}>
              {status}
            </Text>
          </View>

          <Text style={{color: 'gray', fontSize: 15}}>
            Giá: {formatPrice(gia)} VND
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingEnd: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontSize: 15}}>
              Loại món: sườn xào
            </Text>
            <TouchableOpacity>
              <Image source={icon.giohang2} style={{height: 20, width: 20}} />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'gray', fontSize: 13}}>website:{website}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Mon_an;
const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'left',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
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
      default: {
        // Trong trường hợp nền tảng không được hỗ trợ
        // không làm gì cả hoặc sử dụng một giải pháp thay thế
      },
    }),
  },
});

import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Top_profile from './top_profile';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {icon, imgbackgr} from '../../file_anh';
const gachduoi = (
  <View
    style={{
      height: 0.5,
      backgroundColor: 'gray',
      marginVertical: 9,
    }}
  />
);

//////////
const Profile = props => {
  const [showdialog, setshowdialog] = useState(false);
  const [dulieulogin, setdulieulogin] = useState({});
  const navigation = useNavigation();

  const getDulieukhilogin = async () => {
    try {
      const value = await AsyncStorage.getItem('keylogin');
      if (value !== null) {
        // value previously stored
        setdulieulogin(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //khi màn hình đc active thì lệnh trong này được hoạt động
      getDulieukhilogin();
    });

    return unsubscribe;
  }, [navigation]);

  const Avatar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        {dulieulogin?.avatar ? ( // Kiểm tra nếu có dữ liệu avatar
          <Image
            source={{uri: dulieulogin.avatar}}
            style={{height: 70, width: 70, borderRadius: 50}}
          />
        ) : (
          <Image
            source={imgbackgr.backgr}
            style={{height: 70, width: 70, borderRadius: 50}}
          />
        )}
        <View style={{marginStart: 10}}>
          {dulieulogin?.fullname ? (
            <Text>Tên tài khoản: {dulieulogin.fullname}</Text>
          ) : (
            <Text>Tên tài khoản: bạn chưa đăng nhập </Text>
          )}
          {dulieulogin?.loaitk ? (
            <Text> {dulieulogin.loaitk}</Text>
          ) : (
            <Text>Loại tài khoản: bạn chưa đăng nhập</Text>
          )}
          <View style={{flexDirection: 'row'}}>
            <Text>Người theo 0|</Text>
            <Text>Đang theo dõi 0</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f5'}}>
      <Top_profile />
      <ScrollView>
        <Avatar />
        {/* cục 1 */}
        <View
          style={{
            height: 170,
            borderRadius: 20,
            backgroundColor: '#ffffff',
            marginTop: 15,
            padding: 10,
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          {/* 1 */}
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={icon.huychuong}
              tintColor={'red'}
              style={{height: 20, width: 20}}
            />
            <Text style={{fontSize: 15, color: 'black'}}>
              Khách hàng thân thiết
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 20, width: 20, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 2 */}
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={icon.time}
              tintColor={'#ffa31a'}
              style={{height: 20, width: 20, marginEnd: 5}}
            />
            <Text style={{fontSize: 15, color: 'black'}}>Đã xem gần đây</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 20, width: 20, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 3 */}
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={icon.qua}
              tintColor={'blue'}
              style={{height: 20, width: 20, marginEnd: 5}}
            />
            <Text style={{fontSize: 15, color: 'black'}}>Săn thưởng</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 20, width: 20, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 4*/}
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={icon.star}
              tintColor={'pink'}
              style={{height: 20, width: 20, marginEnd: 5}}
            />
            <Text style={{fontSize: 15, color: 'black'}}>
              Đánh giá giá của tôi
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 20, width: 20, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
        </View>
        {/* cục 2 */}
        <View
          style={{
            height: 155,
            backgroundColor: 'red',
            borderRadius: 20,
            marginHorizontal: 10,
            backgroundColor: 'white',
            marginTop: 15,
            padding: 10,
          }}>
          <Text style={{fontSize: 13, marginStart: 10, marginBottom: 10}}>
            Tài khoản
          </Text>
          {/* 1 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Tài khoản & Bảo mật
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 2 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Địa chỉ</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 3 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Tài khoản / Thẻ Ngân hàng
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
        </View>
        {/* cục 3 */}
        <View
          style={{
            height: 245,
            backgroundColor: '#ffffff',
            borderRadius: 20,
            marginHorizontal: 10,
            // backgroundColor: 'white',
            marginTop: 15,
            padding: 10,
          }}>
          <Text style={{fontSize: 13, marginStart: 10, marginBottom: 10}}>
            Cài đặt
          </Text>
          {/* 1 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Cài đặt chat</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 2 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Cài đặt thông báo
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 3 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Cài đặt riêng tư</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 4 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Người dùng đã vị chặn
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 5 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontSize: 14, color: 'black'}}>
                Ngôn ngữ/ Language
              </Text>
              <Text style={{fontSize: 13}}> Tiếng việt</Text>
            </View>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
        </View>
        {/* cục 4 */}
        <View
          style={{
            height: 270,
            backgroundColor: '#ffffff',
            borderRadius: 20,
            marginHorizontal: 10,
            // backgroundColor: 'white',
            marginTop: 15,
            marginBottom: 20,
            padding: 10,
          }}>
          <Text style={{fontSize: 13, marginStart: 10, marginBottom: 10}}>
            Hỗ trợ
          </Text>
          {/* 1 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Lien_he');
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Liên hệ</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 2 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Tiêu chuẩn cộng đồng
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 3 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Điều khoản</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 4 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Bạn hài lòng với app? Hãy đánh giá...
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 5 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('GioiThieu')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>Giới thiệu</Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
          {gachduoi}
          {/* 6 */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: 'black'}}>
              Yêu cầu xóa tài khoản
            </Text>
            <View style={{flex: 1}} />
            <Image
              source={icon.back}
              style={{height: 15, width: 15, transform: [{rotateY: '180deg'}]}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setshowdialog(true);
          }}
          style={{
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginHorizontal: 40,
            marginBottom: 30,
            borderWidth: 1,
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>Đăng xuất</Text>
        </TouchableOpacity>
        <Modal
          transparent={true} // Đặt thuộc tính này thành true để làm cho modal trong suốt
          visible={showdialog}
          animationType="slide"
          style={{flex: 1}}>
          <View style={st.centeredView}>
            <View style={st.modalView}>
              <Text style={{color: 'black', fontSize: 15}}>
                Bạn có chắc muốn đăng xuất không?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Mh_dang_nhap');
                    setshowdialog(false);
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>Đăng xuất</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setshowdialog(false); // Đóng dialog khi bấm "Hủy"
                  }}>
                  <Text style={{fontSize: 16, color: 'black'}}>Hủy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Profile;

const st = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 270,
    height: 150,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f5',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

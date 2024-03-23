import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import imgbackgr from '../file_anh/imgbackgr';
import {icon} from '../file_anh';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  isvalidatepassword,
  isvalidatetendangnhap,
} from '../validate/Validatetion';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
const Mh_dang_nhap = props => {
  const navigation = useNavigation();
  const [errusername, seterrusername] = useState('');
  const [errpassword, seterrpassword] = useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [hienpassword, sethienpassword] = useState(false);
  const isvalidateOk = () => {
    if (username == 0 && password == 0) {
      seterrpassword('Nhập mật khẩu');
      seterrusername('Nhập tên đăng nhập');
      return;
    }
    if (
      username.length > 0 &&
      password.length > 0 &&
      isvalidatetendangnhap(username) == true &&
      isvalidatepassword(password) == true
    ) {
      let url_check_login =
        'https://65bb362652189914b5bb6f61.mockapi.io/uer?username=' + username;
      fetch(url_check_login)
        .then(res => {
          return res.json();
        })
        .then(async res_login => {
          if (res_login.length != 1) {
            // Alert.alert('sai tài khoản hãy nhập nhập lại');
            seterrusername('Tài khoản không tồn tại ');
            // seterrpassword('Sai tên đăng nhập hoặc mật khẩu');
            // return;
          } else {
            let objU = res_login[0];
            if (objU.password != password) {
              // Alert.alert('sai mật khẩu');
              seterrpassword('Sai mật khẩu');
              return;
            } else {
              try {
                await AsyncStorage.setItem('keylogin', JSON.stringify(objU));
                navigation.navigate('Tabnavigation');
              } catch (e) {
                // saving error
                console.log(e);
              }
            }
          }
        });
    }
  };
  const [isSelected, setSelection] = useState(true);
  return (
    <ImageBackground
      source={{
        uri: 'https://th.bing.com/th/id/OIP.trgvc8x9hAO3VSs7z5Q9XwAAAA?rs=1&pid=ImgDetMain',
      }}
      style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
          <View
            style={{
              marginHorizontal: 20,
              bottom: 0,
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 10,
                  marginTop: 20,
                }}>
                Hi Welcome Back!
              </Text>
              <Text style={{fontSize: 15, color: 'white', marginBottom: 10}}>
                Hello again you have been missed!
              </Text>
              <Image
                source={{
                  uri: '',
                }}
                style={{
                  height: 120,
                  width: 250,
                  borderRadius: 10,
                  alignSelf: 'center',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                marginBottom: 8,
                paddingVertical: 5,
                paddingHorizontal: 5,
              }}>
              <View style={{paddingTop: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    marginStart: 20,
                    color: 'white',
                  }}>
                  Tên đăng nhập
                </Text>
                <TextInput
                  placeholderTextColor={'#b3ffec'}
                  placeholder="Nhập tên đăng nhập"
                  onChangeText={text => {
                    if (isvalidatetendangnhap(text) == false) {
                      seterrusername('Tên đăng nhập phải có trên 3 kí tự ');
                    } else {
                      seterrusername('');
                    }
                    setusername(text);
                  }}
                  style={{
                    paddingStart: 20,
                    height: 50,
                    fontSize: 17,
                    color: '#b3ffec',
                  }}
                />
                <View
                  style={{
                    height: 1.5,
                    backgroundColor: '#b3ffec',
                    width: '90%',
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 5,
                  }}>
                  {errusername}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    // marginBottom: 5,
                    color: 'white',
                    marginStart: 20,
                  }}>
                  Mật khẩu
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor={'#b3ffec'}
                    onChangeText={text => {
                      if (isvalidatepassword(text) == false) {
                        seterrpassword('Mật khẩu phai có trên 3 kí tự ');
                      } else {
                        seterrpassword('');
                      }
                      setpassword(text);
                    }}
                    style={{
                      paddingStart: 20,
                      // borderBottomWidth: 1,
                      // borderColor: "white",
                      height: 50,
                      color: '#b3ffec',
                      fontSize: 17,
                      width: '100%',
                      // backgroundColor: 'yellow',
                    }}
                    secureTextEntry={hienpassword ? false : true}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      sethienpassword(!hienpassword);
                    }}>
                    {hienpassword ? (
                      <Image
                        source={icon.matdong}
                        style={{
                          height: 25,
                          width: 25,
                          // position: 'absolute',
                          end: 40,
                          tintColor: 'white',
                        }}
                      />
                    ) : (
                      <Image
                        source={icon.mat}
                        style={{
                          height: 25,
                          width: 25,
                          // position: 'absolute',
                          end: 40,
                          tintColor: 'white',
                        }}
                        resizeMode="contain"
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 1.5,
                    backgroundColor: '#b3ffec',
                    width: '90%',
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    color: 'red',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    marginVertical: 10,
                  }}>
                  {errpassword}
                </Text>
              </View>

              <TouchableOpacity
                style={st.login}
                onPress={() => {
                  isvalidateOk();
                }}>
                <Text
                  style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderBottomWidth: 1.5,
                  borderColor: 'white',
                  width: 50,
                  flex: 1,
                }}
              />
              <Text style={{paddingHorizontal: 10, color: 'white'}}>
                Or Login with
              </Text>
              <View
                style={{
                  borderBottomWidth: 1.5,
                  borderColor: 'white',
                  width: 50,
                  flex: 1,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  paddingHorizontal: 25,
                  alignItems: 'center',
                  paddingVertical: 2,
                  borderColor: 'white',
                  borderRadius: 5,
                  marginEnd: 10,
                }}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=48&id=118497&format=png',
                  }}
                  style={{height: 40, width: 40}}
                />
                <Text style={{color: 'white'}}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  paddingHorizontal: 40,
                  borderRadius: 5,
                  paddingVertical: 2,
                  borderColor: 'white',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png',
                  }}
                  style={{height: 35, width: 35}}
                />
                <Text style={{color: 'white'}}>Google</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{flexDirection: 'row', alignSelf: 'center', bottom: 0}}>
              <Text style={{color: 'white'}}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Mh_dang_ky')}>
                <Text
                  style={{
                    marginStart: 10,
                    color: 'red',
                    borderBottomWidth: 0.5,
                    borderColor: 'red',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>

    // <View
    //         style={{
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           top: -10,
    //           marginStart: 19,
    //           marginTop: 10,
    //         }}>
    //         <CheckBox value={isSelected} onValueChange={setSelection} />
    //         <Text style={{color: 'white', fontWeight: 'bold'}}>Remmember</Text>
    //       </View>
  );
};

export default Mh_dang_nhap;

const st = StyleSheet.create({
  login: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4da6ff',
    marginHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#99ffe6',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 11.95,
    elevation: 20,
  },
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
    width: 280,
    height: 150,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f5',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

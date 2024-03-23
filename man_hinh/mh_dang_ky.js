import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {icon} from '../file_anh';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  isvalidatefullname,
  isvalidatepassword,
  isvalidateemail,
  isvalidatephone,
  isvalidatediachi,
  isvalidatetendangnhap,
} from '../validate/Validatetion';
import {Toast} from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Mh_dang_ky = () => {
  /////////////
  const Top_back = () => {
    return (
      <View
        style={{
          height: 50,
          // backgroundColor: '#ffffff',
          flexDirection: 'row',
          // position: 'absolute',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={icon.back}
            style={{height: 40, width: 40, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            flex: 9,
            textAlign: 'center',
          }}>
          Đăng ký
        </Text>
      </View>
    );
  };
  const navigation = useNavigation();
  const [errfullname, seterrfullname] = useState('');
  const [erremail, seterremail] = useState('');
  const [errusername, seterrusername] = useState('');
  const [errpassword, seterrpassword] = useState('');
  const [errdiachi, seterrdiachi] = useState('');
  const [errphone, seterrphone] = useState('');
  const [fullname, setfullname] = useState('');
  const [diachi, setdiachi] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');
  const [username, setusername] = useState('');
  const isvalidateOk = () => {
    let formdata = {
      username: username,
      password: password,
      fullname: fullname,
    };
    if (username == 0 && password == 0 && fullname == 0) {
      seterrpassword('Nhập mật khẩu');
      seterrusername('Nhập tên đăng nhập');
      seterrfullname('Nhập tên tài khoản');
      return;
    }
    if (
      username.length > 0 &&
      password.length > 0 &&
      fullname.length > 0 &&
      isvalidatetendangnhap(username) == true &&
      isvalidatefullname(fullname) &&
      isvalidatepassword(password) == true
    ) {
      let url_check_login =
        'https://65bb362652189914b5bb6f61.mockapi.io/uer?username=' + username;
      fetch(url_check_login)
        .then(res => {
          return res.json();
        })
        .then(res_login => {
          ////////////pust lên server
          let obju = res_login[0];
          if (obju.username == username) {
            seterrusername('Tên username đã tồn tại');
            return;
          } else {
            axios
              .post('https://65bb362652189914b5bb6f61.mockapi.io/uer', formdata)
              .then(res => {
                if (res.length != 1) {
                  navigation.navigate('Mh_dang_nhap');
                }
              })
              .catch(err => console.log(err));
          }
          //////////////
        });
    }
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://veggiefestchicago.org/wp-content/uploads/2019/01/vegetarian-diet-page2-1024x1019.jpg',
      }}>
      <Top_back />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
          <View
            style={{
              top: 10,
              // height: 200,
              marginHorizontal: 20,
            }}>
            <View
              style={{   
                alignItems: 'center',
                // marginBottom: 20,
              }}>
              <Image
                source={{
                  uri: 'https://www.bing.com/images/search?view=detailV2&ccid=eKSPvOel&id=11AB451D1436D2D4F4A3548A796936E2359780E2&thid=OIP.eKSPvOela8VOwpgD1lPEsAHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f48%2fb9%2f8d%2f48b98d3f6830cddf79b8b12558a00488.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.78a48fbce7a56bc54ec29803d653c4b0%3frik%3d4oCXNeI2aXmKVA%26pid%3dImgRaw%26r%3d0&exph=2200&expw=2200&q=food+&simid=607989334844838150&FORM=IRPRST&ck=463174348074B64C932819208D048B54&selectedIndex=2&itb=0',
                }}
                style={styles.img}
              />
            </View>
            <View style={{}}>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={'white'}
                onChangeText={text => {
                  if (isvalidatefullname(text) == false) {
                    seterrfullname('Full name phải đủ lớn hơn 7 kí tự');
                  } else {
                    seterrfullname('');
                  }
                  setfullname(text);
                }}
                style={styles.input}
              />
              <Text style={styles.err}>{errfullname}</Text>
              <TextInput
                placeholder="Username"
                placeholderTextColor={'white'}
                onChangeText={text => {
                  if (isvalidatetendangnhap(text) == false) {
                    seterrusername('username lớn hơn 3 ký tự');
                  } else {
                    seterrusername('');
                  }
                  setusername(text);
                }}
                style={styles.input}
              />
              <Text style={styles.err}>{errusername}</Text>
              {/* <TextInput
            placeholder="Email"
            placeholderTextColor={'white'}
            onChangeText={text => {
              if (isvalidateemail(text)) {
                seterremail(''); // Email hợp lệ, không có lỗi
              } else {
                seterremail('example@gmail.com');
              }
              setemail(text);
            }}
            style={styles.input}
          />
          <Text style={styles.err}>{erremail}</Text> */}
              <TextInput
                placeholder="Password"
                placeholderTextColor={'white'}
                onChangeText={text => {
                  if (isvalidatepassword(text) == false) {
                    seterrpassword('password lớn hơn 3 ký tự');
                  } else {
                    seterrpassword('');
                  }
                  setpassword(text);
                }}
                style={styles.input}
              />
              <Text style={styles.err}>{errpassword}</Text>
              {/* <TextInput
            placeholder="Address"
            placeholderTextColor={'black'}
            onChangeText={text => {
              if (isvalidatediachi(text) == false) {
                seterrdiachi('address lớn hơn 3 ký tự');
              } else {
                seterrdiachi('');
              }
              setdiachi(text);
            }}
            style={styles.input}
          />
          <Text style={styles.err}>{errdiachi}</Text>
          <TextInput
            placeholder="Phone"
            placeholderTextColor={'black'}
            onChangeText={text => {
              if (isvalidatephone(text) == false) {
                seterrphone('phone lớn hơn 3 ký tự');
              } else {
                seterrphone('');
              }
              setphone(text);
            }}
            style={styles.input}
          />
          <Text style={styles.err}>{errphone}</Text> */}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => isvalidateOk()}
            style={styles.button}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Mh_dang_ky;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 170,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    color: 'white',
    borderColor: 'white',
    marginBottom: 10,
    marginHorizontal: 25,
  },
  button: {
    // padding: 12,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4da6ff',
    marginHorizontal: 4,
    marginHorizontal: 55,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 11.95,
    elevation: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  err: {color: 'red', marginBottom: 5, marginHorizontal: 25, top: 0},
});

import React from "react";
import {View, Image, Text, TextInput, TouchableHighlight, TouchableOpacity, Alert, AsyncStorage, KeyboardAvoidingView, ScrollView} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Term from './components/TermOfUse';
import {requestSignup} from "services/user/userRequests";
import styles from "./style";

interface Props {
  navigation: any
}

interface State {
    username: any,
    password: any,
    phone: any,
    token: any,
    checked: any,  
    term: any,  
}

class SignUpScreen extends React.Component<Props, State> {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      phone: '',
      token: '',
      checked: false,
      term: false,
    }
    this._signUp = this._signUp.bind(this);
    this.checkedBox = this.checkedBox.bind(this);
    this.closeTerm = this.closeTerm.bind(this);
  }

  _signUp() {
    if(this.state.username == '') {
      Alert.alert("회원가입 실패", "아이디를 입력해주세요")
    }
    else if(this.state.password == '') {
      Alert.alert("회원가입 실패", "비밀번호를 입력해주세요")
    }
    else if(this.state.phone == '') {
      Alert.alert("회원가입 실패", "전화번호를 입력해주세요")
    }
    else if(this.state.checked) {
      requestSignup(this.state.username, this.state.password, this.state.phone).then((response) => {
        const token = response.data.data
        this.setState({token}, async () => {
          await AsyncStorage.setItem('token', this.state.token)
          this.props.navigation.navigate('App')
        })
      })
      .catch ((error) => {
        const message = error.response.data.message
        if(message == "Empty id") {
          Alert.alert("회원가입 실패", "아이디를 입력해주세요")
        }
        else if(message == "Empty pw") {
          Alert.alert("회원가입 실패", "비밀번호를 입력해주세요")
        }
        else if(message == "Empty phone") {
          Alert.alert("회원가입 실패", "전화번호를 입력해주세요")
        }
        else if(message == "Short id" || message == "Long id") {
          Alert.alert("회원가입 실패", "아이디는 5자 이상 20자 이하로 해주세요")
        }
        else if(message == "Uppercase id") {
          Alert.alert("회원가입 실패", "아이디에는 소문자만 사용해주세요.")
        }
        else if(message == "special characters id") {
          Alert.alert("회원가입 실패", "아이디에는 특수문자를 사용 할 수 없습니다.")
        }
        else if(message == "Duplicate account") {
          Alert.alert("회원가입 실패", "이미 존재하는 아이디 입니다.")
        }
        else if(message == "Short pw" || message == "Long pw") {
          Alert.alert("회원가입 실패", "비밀번호는 8자 이상 16자 이하로 해주세요.")
        }
        else if(message == "Invalid number") {
          Alert.alert("회원가입 실패", "전화번호를 정확하게 입력해주세요.")
        }
      })
    }
    else {
      Alert.alert("개인정보처리방침", "개인정보처리방침에 동의해주세요.")
    }
  }

  checkedBox() {
    this.setState({checked: !this.state.checked})
  }

  closeTerm() {
    this.setState({term: false});
  }

  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
                { this.state.term
                    ? <Term close={this.closeTerm}/>
                    : null
                }
                <View style={styles.imgContainer}>
                    <Image
                        source={require('../../../assets/test.png')}
                        style={styles.img}/>
                </View>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>샵치즈 회원가입</Text>
                    </View>
                    <View style={styles.inputBoxContainer}>
                        <TextInput
                            style={styles.inputBox} value={this.state.username}
                            placeholder="아이디" placeholderTextColor="rgb(152, 169, 188)"
                            onChangeText={(username)=>this.setState({username})}/>
                        <Text style={styles.describeText}>5~20자의 영문 소문자, 숫자만 사용 가능합니다.</Text>
                        <TextInput
                            style={styles.inputBox} value={this.state.password}
                            placeholder="비밀번호" placeholderTextColor="rgb(152, 169, 188)"
                            onChangeText={(password)=>this.setState({password})}/>
                        <Text style={styles.describeText}>8~16자 영문 대 소문자, 숫자, 특수문자만 사용 가능합니다.</Text>
                        <TextInput
                            style={styles.inputBox} value={this.state.phone}
                            placeholder="핸드폰 번호" placeholderTextColor="rgb(152, 169, 188)"
                            onChangeText={(phone)=>this.setState({phone})}/>
                    </View>
                    <View style={styles.termContainer}>
                        <TouchableOpacity onPressOut={this.checkedBox}>
                            { this.state.checked
                                ? <MaterialCommunityIcons
                                    size={20} name='checkbox-marked-circle-outline'/>
                                : <MaterialCommunityIcons
                                    size={20} name='checkbox-blank-circle-outline'/>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.setState({term: true})}}>
                            <Text style={styles.termLink}>개인정보처리방침과 약관</Text>
                        </TouchableOpacity>
                        <Text>에 동의합니다.</Text>
                    </View>
                    <View style={styles.buttonBox}>
                        <TouchableHighlight
                            style={styles.registButton}
                            onPress={() => this.props.navigation.navigate('AuthHome')}>
                            <Text style={styles.registText}>뒤로가기</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.loginButton}
                            onPress={this._signUp}>
                            <Text style={styles.loginText}>회원가입</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                <View style={{flex:1}}/>
        </KeyboardAvoidingView>
    );
}}

export default SignUpScreen;
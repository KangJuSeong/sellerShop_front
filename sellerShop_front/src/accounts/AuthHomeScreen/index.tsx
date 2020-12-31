import React from "react";
import {Image, AsyncStorage, View, Text, TextInput, TouchableHighlight, Alert, KeyboardAvoidingView} from "react-native";

import {requestLogin} from "services/user/userRequests";
import {getToken} from "libs/getToken";
import styles from "./styles";


interface Props {
  navigation: any
}

interface State {
  username?: string;
  password?: string;
}

class AuthHomeScreen extends React.Component<Props, State> {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this._signIn = this._signIn.bind(this);
  }

  componentDidMount() {
    getToken().then(token => {
      if (token) {
        this.props.navigation.navigate('App');
      }
    });
  }

  _signIn() {
    requestLogin(this.state.username, this.state.password).then((response) => {
      this._signInAsync(response.data.data)
    })
    .catch ((error) => {
      const message = error.response.data.message
      if(message == "incorrect password") {
        Alert.alert("로그인 실패", "비밀번호가 맞지 않습니다.")
      }
      else if(message == "not exist") {
        Alert.alert("로그인 실패", "가입하지 않은 아이디입니다.")
      }
    })
  }

  _signInAsync = async (token) => {
    try {
      await AsyncStorage.setItem('token', token).then(() => {
        this.props.navigation.navigate('App');
      })
    } catch (error) {
    }
  };

  render() {
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.imgContainer}>
            <Image source={require('../../../assets/test.png')} style={styles.img}/>
        </View>
        <View style={styles.loginTitleContainer}>
        <Text style={styles.loginTitle}>샵치즈 로그인</Text>
        </View>
        <View style={styles.inputBoxContainer}>
            <TextInput 
                style={styles.inputBox} placeholder="아이디" 
                placeholderTextColor="rgb(152, 169, 188)" value={this.state.username} 
                onChangeText={(username)=>this.setState({username})}/>
            <TextInput 
                style={styles.inputBox} placeholder="비밀번호" 
                placeholderTextColor="rgb(152, 169, 188)"
                value={this.state.password} secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}/>
        </View>
        <View style={styles.buttonBox}>
            <TouchableHighlight 
                style={styles.regist_button}
                onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.inputRegistText}>회원가입</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.login_button}
                onPress={this._signIn}>
                <Text style={styles.inputLoginText}>로그인</Text>
            </TouchableHighlight>
        </View>
        <View style={{flex:1}} />
    </KeyboardAvoidingView>
    );
  }
}

export default AuthHomeScreen;
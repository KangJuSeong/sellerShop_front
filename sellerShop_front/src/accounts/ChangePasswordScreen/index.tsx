import {
  Alert,
  View,
  TextInput,
  Text,
  TouchableHighlight, KeyboardAvoidingView
} from "react-native";
import React from "react";

import {requestChangePW} from "../../../services/user/userRequests"
import {AppState} from "../../../services/reducer";
import {getToken} from "../../../libs/getToken";
import styles from "./style";

type TotalProps = StateProps & Props;

interface Props {
  navigation: any
}

interface State {
  current_password?: string;
  new_password?: string;
  check_new_password?: string;
}


class ChangePasswordScreen extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      current_password: "",
      new_password: "",
      check_new_password: "",
    }
    this._changePassword = this._changePassword.bind(this);
  }


  _changePassword() {
    if(this.state.new_password != this.state.current_password) {
      if (this.state.new_password == this.state.check_new_password) {
        getToken().then((token) => {
          requestChangePW(token, this.state.current_password, this.state.new_password).then((response) => {
            Alert.alert("비밀번호 변경 성공", "비밀번호가 변경되었습니다.")
            this.props.navigation.navigate('Setting')
          })
          .catch((error) => {
            const message = error.response.data.message
            if (message == "incorrect password") {
              Alert.alert("비밀번호 변경 실패", "비밀번호가 맞지 않습니다.")
            } else if (message == "Short pw" || message == "Long pw") {
              Alert.alert("회원가입 실패", "비밀번호는 8자 이상 16자 이하로 해주세요.")
            }
          })
        })
      } else {
        Alert.alert("비밀번호 변경 실패", "새 비밀번호를 정확하게 입력해주세요.")
      }
    }
    else {
      Alert.alert("비밀번호 변경 실패", "이미 사용중인 비밀번호 입니다.")
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.titleContainer}>
          <Text style={styles.title}>비밀번호 재설정</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"기존 비밀번호"}
            secureTextEntry={true}
            placeholderTextColor="rgb(152, 169, 188)"
            onChangeText={(current_password)=>this.setState({current_password})}/>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={"새 비밀번호"}
            placeholderTextColor="rgb(152, 169, 188)"
            onChangeText={(new_password)=>this.setState({new_password})}/>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={"새 비밀번호 재입력"}
            placeholderTextColor="rgb(152, 169, 188)"
            onChangeText={(check_new_password)=>this.setState({check_new_password})}/>
        </View>
        <Text style={styles.text}>
          • 안전한 계정 사용을 위해 비밀번호는 주기적으로 변경해주세요.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Setting')}>
            <Text style={styles.buttonText}>뒤로가기</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.changeButton}
            onPress={() => this._changePassword()}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex:1}} />
      </KeyboardAvoidingView>
    );
  }
}
export default ChangePasswordScreen;

const mapStateToProps = (state: AppState) => {
  return {
    userState: {
      token: state.user.token,
    }
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
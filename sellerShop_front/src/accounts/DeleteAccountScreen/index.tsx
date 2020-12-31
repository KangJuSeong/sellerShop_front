import {
	AsyncStorage,
	Alert,
	View,
	TextInput,
	Text,
	TouchableHighlight, KeyboardAvoidingView, ScrollView, TouchableOpacity
} from "react-native";
import React from "react";

import {requestDelete} from "../../../services/user/userRequests"
import {getToken} from "../../../libs/getToken";
import styles from "./style";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface Props {
	navigation: any
}

interface State {
	password?: string;
	check_password?: string;
	checked?: false,
}


class DeleteAccountScreen extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			password: "",
			check_password: "",
			checked: false,
		}
		this._deleteAccount = this._deleteAccount.bind(this)
		this.deleteToken = this.deleteToken.bind(this)
		this.checkedBox = this.checkedBox.bind(this)
	}

	checkedBox() {
		this.setState({checked: !this.state.checked})
	}

	_deleteAccount() {
		if(this.state.checked) {
			if (this.state.password == this.state.check_password) {
				getToken().then((token) => {
					requestDelete(token, this.state.password).then((response) => {
						this.deleteToken()
						Alert.alert("회원탈퇴 성공", "회원탈퇴가 성공적으로 되었습니다.")
					})
					.catch((error) => {
						const message = error.response.data.message
						if (message == "incorrect password") {
							Alert.alert("회원탈퇴 실패", "비밀번호가 틀립니다.")
						}
					})
				})
			} else {
				Alert.alert("회원탈퇴 실패", "비밀번호를 정확하게 입력해주세요.")
			}
		}
		else {
			Alert.alert("회원탈퇴 실패", "약관에 동의해주세요.")
		}
	}

	deleteToken = async () => {
		try {
			await AsyncStorage.removeItem('token')
			this.props.navigation.navigate('AuthHome')
		} catch (error) {
		}
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.titleContainer}>
					<Text style={styles.title}>회원탈퇴</Text>
				</View>
				<View style={styles.scrollContainer}>
					<ScrollView>
						<Text>
							•샵치즈 회원탈퇴 후, 재가입할 경우 탈퇴 전의 회원정보와 포인트, 쿠폰정보 등은 복구되지 않습니다.
						</Text>
						<Text>
							•샵치즈 회원탈퇴 후, 재가입할 경우 탈퇴 전의 회원정보와 포인트, 쿠폰정보 등은 복구되지 않습니다.
						</Text>
						<Text>
							•샵치즈 회원탈퇴 후, 재가입할 경우 탈퇴 전의 회원정보와 포인트, 쿠폰정보 등은 복구되지 않습니다.
						</Text>
						<Text>
							•샵치즈 회원탈퇴 후, 재가입할 경우 탈퇴 전의 회원정보와 포인트, 쿠폰정보 등은 복구되지 않습니다.
						</Text>
						<Text>
							•샵치즈 회원탈퇴 후, 재가입할 경우 탈퇴 전의 회원정보와 포인트, 쿠폰정보 등은 복구되지 않습니다.
						</Text>
						<Text>
							•샵치즈 회원탈퇴 후, 재가입할 경우 탈퇴 전의 회원정보와 포인트, 쿠폰정보 등은 복구되지 않습니다.
						</Text>
						<Text>
							•샵치즈 회원탈퇴 후, 재가입할 경우 탈퇴 전의 회원정보와 포인트, 쿠폰정보 등은 복구되지 않습니다.
						</Text>
					</ScrollView>
				</View>
				<View style={styles.checkContainer}>
					<TouchableOpacity onPressOut={this.checkedBox}>
						{ this.state.checked
							? <MaterialCommunityIcons
								size={20} name='checkbox-marked-circle-outline'/>
							: <MaterialCommunityIcons
								size={20} name='checkbox-blank-circle-outline'/>
						}
					</TouchableOpacity>
					<Text style={{paddingLeft: 10}}>보유하신 포인트 등은 탈퇴 시 함께 소멸됩니다.</Text>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder={"기존 비밀번호"}
						secureTextEntry={true}
						placeholderTextColor="rgb(152, 169, 188)"
						onChangeText={(password)=>this.setState({password})}/>
					<TextInput
						style={styles.input}
						secureTextEntry={true}
						placeholder={"비밀번호 재입력"}
						placeholderTextColor="rgb(152, 169, 188)"
						onChangeText={(check_password)=>this.setState({check_password})}/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableHighlight
						style={styles.backButton}
						onPress={() => this.props.navigation.navigate('Setting')}>
						<Text style={styles.buttonText}>뒤로가기</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.changeButton}
						onPress={() => this._deleteAccount()}>
						<Text style={styles.buttonText}>확인</Text>
					</TouchableHighlight>
				</View>
				<View style={{flex:1}} />
			</KeyboardAvoidingView>
		);
	}
}

export default DeleteAccountScreen


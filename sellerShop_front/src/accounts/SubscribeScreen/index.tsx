import React from "react";
import {AsyncStorage, View, Text, TextInput, TouchableHighlight, Alert} from "react-native";

import {requestSubscribe, requestUnsubscribe, requestUserProfile} from "services/user/userRequests";
import {getToken} from "libs/getToken";
import styles from "./style";


interface Props {
	navigation: any
}

class SubscribeScreen extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
		}
		this._subscribe = this._subscribe.bind(this)
		this._unsubscribe = this._unsubscribe.bind(this)
	}

	componentDidMount() {
		getToken().then((token) => {
			requestUserProfile(token).then((response) => {
				const username = response.data.data.username
				this.setState({username})
			})
			.catch((error) => {
				const username = error.response.data.data.username
				this.setState({username})
			})
		})
	}

	_subscribe() {
		getToken().then((token) => {
			requestSubscribe(token).then((response) => {
				Alert.alert("구독 완료", "구독 완료되셨습니다.")
				this.props.navigation.navigate('Setting')
			})
			.catch((error) => {
				Alert.alert("구독 실패", "이미 구독중입니다.")
			})
		})
	}

	_unsubscribe() {
		getToken().then((token) => {
			requestUnsubscribe(token).then((response) => {
				Alert.alert("구독 취소 완료", "구독이 취소되었습니다.")
				this.props.navigation.navigate('Setting')
			})
			.catch((error) => {
				Alert.alert("구독 취소 실패", "구독중이 아닙니다.")
			})
		})
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						유료 멤버십
					</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={{fontSize: 20, paddingLeft: 50, paddingRight: 50, paddingTop: 60}}>
						{this.state.username} 님 안녕하세요:)
					</Text>
					<Text style={styles.info}>
						샵치즈 구독 회원이 되어보시는 건
					</Text>
					<Text style={styles.info}>
						어떨까요?
					</Text>
					<Text>

					</Text>
					<Text style={styles.info}>
						구독하시게 된다면 광고가
					</Text>
					<Text style={styles.info}>
						스킵되며, 쇼핑몰 계정 무제한
					</Text>
					<Text style={styles.info}>
						등록하실 수 있습니다.
					</Text>
				</View>
				<View style={styles.buttonContiner}>
					<TouchableHighlight
						style={styles.unsubButton}
						onPress={() => this._unsubscribe()}>
						<Text>구독 취소하기</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.subButton}
						onPress={() => this._subscribe()}>
						<Text>지금 바로 구독하기</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

export default SubscribeScreen
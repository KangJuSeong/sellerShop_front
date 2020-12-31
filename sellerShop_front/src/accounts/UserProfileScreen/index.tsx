import {
	View,
	ScrollView,
	Text,
	Alert,
	TouchableOpacity,
	AsyncStorage,
	Button,
	Image,
	TouchableHighlight
} from "react-native";
import React from "react";

import styles from "./style";
import {getToken} from "../../../libs/getToken";
import {requestUserProfile} from "../../../services/user/userRequests"


interface Props {
	navigation: any;
}

class UserProfileScreen extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			phone: '',
			subscribe: '',
		};
		this.requestProfile = this.requestProfile.bind(this)
	}

	componentDidMount() {
		this.requestProfile()
	}

	requestProfile() {
		getToken().then((token) => {
			requestUserProfile(token).then((response) => {
				const username = response.data.data['username']
				const phone = response.data.data['phone']
				const subscribe = response.data.data['subscribe']
				this.setState({username,phone,subscribe})
			})
			.catch((error) => {
				const username = error.response.data.data['username']
				const phone = error.response.data.data['phone']
				const subscribe = error.response.data.data['subscribe']
				this.setState({username,phone,subscribe})
			})
		})
	}

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>
					계정 정보 관리
				</Text>
				<View style={styles.imageContainer}>
					<Image
						source={require('../../../assets/profile.jpg')}
						style={styles.profileImg}/>
				</View>
				<View style={styles.profileContainer}>
					<Text style={styles.id}>
						아이디
					</Text>
					<Text style={styles.username}>
						{this.state.username}
					</Text>
				</View>
				<View style={styles.profileContainer}>
					<Text style={styles.id}>
						전화번호
					</Text>
					<Text style={styles.username}>
						{this.state.phone}
					</Text>
				</View>
				<View style={styles.profileContainer}>
					<Text style={styles.id}>
						결제 정보
					</Text>
					<Text style={styles.username}>
						{this.state.subscribe}
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableHighlight
						style={styles.backButton}
						onPress={() => this.props.navigation.navigate('Setting')}>
						<Text>뒤로가기</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('Subscribe')}
						style={styles.membershipButton}>
						<Text>구독하기</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}

}

export default UserProfileScreen
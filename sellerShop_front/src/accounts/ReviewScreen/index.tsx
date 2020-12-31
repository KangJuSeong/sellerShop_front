import {View, Text, TextInput, TouchableHighlight, Alert, AsyncStorage, KeyboardAvoidingView} from "react-native";
import React from "react";

import styles from "./style";
import GradeBoard from './components/GradeBoard';
import {requestReview} from "../../../services/user/userRequests";
import {getToken} from "../../../libs/getToken";

interface Props {
	navigation: any;
}

interface State {
	review: String;
	grade: String;
	count: Number;
}

class ReviewScreen extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			review: '',
			grade: '',
			count: 0,
		}

		this.writeReview = this.writeReview.bind(this)
	}

	writeReview() {
		this.getGrade()
		getToken().then((token) => {
			requestReview(token, this.state.review, this.state.grade).then((response) => {
				this.props.navigation.navigate('Setting')
				Alert.alert('','리뷰를 남기셨습니다.')
			})
			.catch((error) => {
			})
		})
	}

	async getGrade () {
		const grade = await AsyncStorage.getItem('grade')
		this.setState({grade: grade})
	}

	countText() {
		this.setState({count: this.state.review.length})
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<View style={styles.title_container}>
					<Text style={styles.title}>
						리뷰 남기기
					</Text>
					<Text style={styles.sub_title}>
						리뷰를 남겨주신다면 500포인트 지급해드립니다.
					</Text>
				</View>
				<View style={styles.grade_container}>
					<Text style={styles.grade_title}>
						만족하셨나요?
					</Text>
					<GradeBoard/>
				</View>
				<View style={styles.review_container}>
					<Text style={styles.review_title}>
						어떤 점이 좋았나요?
					</Text>
					<TextInput
						onChangeText={(review)=>this.setState({review})}
						style={styles.review}
						placeholder={'최소 30자 이상 입력해주세요'}
						placeholderTextColor="rgb(152, 169, 188)"
						onChange={()=>this.countText()}
						maxLength={200}>
					</TextInput>
					<Text style={styles.counting}>
						{this.state.count}/200
					</Text>
				</View>
				<Text style={{color: "rgb(248, 156, 61)", marginTop: 20, width: 317,}}>
					서비스 리뷰와 무관한 내용은 통보없이 삭제 및 적립 혜택 회수될 수도 있습니다.
				</Text>
				<View style={styles.buttonContainer}>
					<TouchableHighlight
						style={styles.backButton}
						onPress={() => this.props.navigation.navigate('Setting')}>
						<Text>뒤로가기</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => {this.writeReview()}}
						style={styles.membershipButton}>
						<Text>확인</Text>
					</TouchableHighlight>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default ReviewScreen
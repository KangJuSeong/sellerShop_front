import {TouchableHighlight, View, Image, AsyncStorage} from "react-native";
import React from "react";

import styles from "./style";
import GradeButton from "../GradeButton/index"

interface Props {
}

class GradeBoard extends React.Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			grade: 0,
			one_grade: 0,
			two_grade: 0,
			three_grade: 0,
			four_grade: 0,
			five_grade: 0,
		};
		this.check = this.check.bind(this);
		this.setGrade = this.setGrade.bind(this);
	}

	check(one, two, three, four, five, grade) {
		this.setState({one_grade: one,
												 two_grade: two,
												 three_grade: three,
												 four_grade: four,
												 five_grade: five})
		this.setGrade(grade)
	}

	async setGrade(grade) {
		const str_grade = String(grade)
		await AsyncStorage.setItem('grade', str_grade)
	}

	render() {
		return (
			<View style={styles.container}>
				<GradeButton
					grade = {this.state.one_grade}
					onButton = {() => this.check(1, 0, 0, 0, 0, 1)}/>
				<GradeButton
					grade = {this.state.two_grade}
					onButton = {() => this.check(1, 1, 0, 0, 0, 2)}/>
				<GradeButton
					grade = {this.state.three_grade}
					onButton = {() => this.check(1, 1, 1, 0, 0, 3)}/>
				<GradeButton
					grade = {this.state.four_grade}
					onButton = {() => this.check(1, 1, 1, 1, 0, 4)}/>
				<GradeButton
					grade = {this.state.five_grade}
					onButton = {() => this.check(1, 1, 1, 1, 1, 5)}/>
			</View>
		)
	}
}

export default GradeBoard
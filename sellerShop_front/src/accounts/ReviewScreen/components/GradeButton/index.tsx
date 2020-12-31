import {TouchableHighlight, View, Image, AsyncStorage} from "react-native";
import React from "react";

import styles from "./style";

interface Props {
}

class GradeButton extends React.Component<Props> {

	constructor(props) {
		super(props);
	}

	render () {
		return(
			<TouchableHighlight
				style={styles.grade}
				underlayColor={'rgb(255, 255, 255)'}
				onPress={this.props.onButton}>
				{this.props.grade
					? <Image source={require('/assets/yellow_star.png')} style={styles.button_img}/>
					: <Image source={require('/assets/white_star.png')} style={styles.button_img}/>
				}
			</TouchableHighlight>
		)
	}
}

export default GradeButton


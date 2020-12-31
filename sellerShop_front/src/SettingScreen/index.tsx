import {View, ScrollView, Text, Alert, TouchableOpacity, AsyncStorage} from "react-native";
import React from "react";
import styles from "./style";
import AntIcon from "react-native-vector-icons/AntDesign";
import {getToken} from "../../libs/getToken";

interface Props {
	navigation: any;
}

class SettingScreen extends React.Component<Props> {

	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this)
	}

	logout = async () => {
		try {
			await AsyncStorage.removeItem('token')
			this.props.navigation.navigate('AuthHome')
			Alert.alert("로그아웃", "로그아웃 되었습니다.")
		} catch (error) {
		}
	};

  render() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.labelSetContainer}>
                <TouchableOpacity
                    style={styles.labelAlign}
                    onPress={() => this.props.navigation.navigate("Notice")}>
                    <AntIcon name="notification" size={25}/>
                    <Text style={styles.labelText}>공지사항</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.labelSetContainer}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>계정</Text>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}
                        onPress={() => this.props.navigation.navigate("UserProfile")}>
                        <AntIcon name="user" size={25}/>
                        <Text style={styles.labelText}>계정 정보</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}
                        onPress={() => this.props.navigation.navigate("ChangePassword")}>
                        <AntIcon name="swap" size={25}/>
                        <Text style={styles.labelText}>비밀번호 변경</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}
                        onPress={() => this.logout()}>
                        <AntIcon name="logout" size={25} color="red"/>
                        <Text style={styles.labelText}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}
                        onPress={() => this.props.navigation.navigate('DeleteAccount')}>
                        <AntIcon name="deleteuser" size={25}/>
                        <Text style={styles.labelText}>회원탈퇴</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.labelSetContainer}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>도움말</Text>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}>
                        <AntIcon name="customerservice" size={25} color="blue"/>
                        <Text style={styles.labelText}>FAQ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}>
                        <AntIcon name="message1" size={25} color="brown"/>
                        <Text style={styles.labelText}>건의하기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}
                        onPress={() => this.props.navigation.navigate('Review')}>
                        <AntIcon name="star" size={25} color="yellow"/>
                        <Text style={styles.labelText}>리뷰하기</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.label}>
                    <TouchableOpacity
                        style={styles.labelAlign}>
                        <AntIcon name="info" size={25}/>
                        <Text style={styles.labelText}>약관</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
  }
}

export default SettingScreen;
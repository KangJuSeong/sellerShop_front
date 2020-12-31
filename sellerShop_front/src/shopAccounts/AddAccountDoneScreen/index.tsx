import {TouchableOpacity, Text, View, Image} from "react-native";
import React from "react";
import {getImgSource} from "libs/getShop";
import styles from "./style";

interface Props {
  navigation: any;
}

class AddAccountDoneScreen extends React.Component<Props> {

  constructor(props) {
      super(props);
  };

  render() {
    const {navigate, pop} = this.props.navigation;
    const shop = this.props.navigation.state.params.shop
    const id = this.props.navigation.state.params.id

    return (
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title_bold}>{shop} 판매자 </Text>
                <Text style={styles.title_normal}>연동</Text>
            </View>
            <View style={styles.shop_image_container}>
                <Image 
                    source={getImgSource(shop)}
                    style={styles.shop_image}
                    resizeMode="contain"/>
            </View>
            <View style={styles.message_container}>
                <Text style={styles.message_bold}>{id} </Text>
                <Text style={styles.message_normal}>계정 연동이 완료되었습니다!</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.more_button} onPress={() => {pop() && pop()}}>
                    <Text style={styles.more_button_text}>더 연동하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home_button} onPress={() => {pop() && pop() && navigate('Home')}}>
                    <Text style={styles.home_button_text}>홈으로 가기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

export default AddAccountDoneScreen;
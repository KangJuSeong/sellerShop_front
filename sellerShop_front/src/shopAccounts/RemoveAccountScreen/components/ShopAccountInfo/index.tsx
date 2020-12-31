import React from "react";
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {requestAccountShopLogout} from "services/stat/statRequests";
import {getImgSource} from "libs/getShop";
import styles from "./style";

interface Props {
  navigation?: any;
  id: any,
  shop: any,
  login_id: any,
  update: any,
}

class ShopAccountInfo extends React.Component<Props> {

  constructor(props) {
    super(props);
  };

  requestCheck() {
    Alert.alert(
        '정말로 계정을 삭제하시겠습니까?',
        '',
        [
          {text: '아니요'},
          {text: '네', onPress: () => this.requestLogout()},
        ]
      );
  }

  requestLogout() {
      requestAccountShopLogout(this.props.id).then(response => {
          if(response.data.message == "success") {
              Alert.alert("성공적으로 로그아웃했습니다.");
          }
    }).then(() => {
        this.props.update();
    }).catch((error) => {
        Alert.alert(error.response.data.message);
    })
  }

  render() {
    return(
        <View style={styles.container}>
            <View>
                <Image
                    source={getImgSource(this.props.shop)}
                    style={styles.account_img}
                    resizeMode="contain"/>
            </View>
            <View style={styles.container_content}>
                <View>
                    <Text>{this.props.login_id}</Text>
                    <Text style={styles.shop_name}>{this.props.shop}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => this.requestCheck()}>
                        <Text style={styles.button_name}>해제하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
  }
}

export default ShopAccountInfo;
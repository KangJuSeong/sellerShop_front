import {View, Text, Image, KeyboardAvoidingView} from "react-native";
import React from "react";
import ShopLoginForm from "./components/ShopLoginForm";
import {ScrollView} from "react-native-gesture-handler";
import {getImgSource} from "libs/getShop";
import styles from "./style";


interface Props {
  navigation: any;
}


class AddAccountDetailScreen extends React.Component<Props> {

  constructor(props) {
    super(props);
  };

  render() {
    const shop = this.props.navigation.getParam("shop");
    return (
        <ScrollView style={styles.container} ref="scroll">
        <KeyboardAvoidingView style={styles.keyboard_avoid} behavior='position'>
            <View style={styles.title_container}>
                <Text style={styles.title_bold}>{shop} 판매자</Text>
                <Text style={styles.title_regular}> 연동</Text>
            </View>
            <View style={styles.image_container}>
                <Image
                    source={getImgSource(shop)}
                    style={styles.account_image}
                    resizeMode="contain"/>
            </View>
            <ShopLoginForm
                navigation={this.props.navigation}
                shop={shop}/>
            <View style={{flex: 1}}></View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
  }
}

export default AddAccountDetailScreen;
import {Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import {getImgSource} from "libs/getShop";
import styles from "./style";

interface Props {
    navigation: any;
    shop: any;
    key: any;
}

class ChoiceShopLabel extends React.Component<Props> {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.shop_label}>
                <Image
                    source={getImgSource(this.props.shop)}
                    style={styles.shop_label_images}
                    resizeMode="contain"/>
                <Text style={styles.shop_label_title}>{this.props.shop}</Text>
                <TouchableOpacity 
                    style={styles.shop_label_button}
                    onPress={() => this.props.navigation.navigate('AddAccountDetail', {shop: this.props.shop})}>
                    <Text style={styles.shop_label_button_text}>연동하기</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ChoiceShopLabel;
import {ScrollView, Text, View} from "react-native";
import React from "react";
import ChoiceShopLabel from './components/ChoiceShopLabel';
import {shops} from 'libs/getShop';
import styles from "./style";


interface Props {
  navigation: any;
}

class AddAccountScreen extends React.Component<Props> {
    constructor(props) {
        super(props);
    };

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title_bold}>판매자 계정</Text>
                <Text style={styles.title_regular}> 연동</Text>
            </View>
            <ScrollView contentContainerStyle={styles.shop_label_container}>
                {shops.map((item, index) => { return (
                    <ChoiceShopLabel navigation={this.props.navigation} 
                                     shop={item} key={index}/>
                )})}
            </ScrollView>
        </View>
    );
  }
}

export default AddAccountScreen;
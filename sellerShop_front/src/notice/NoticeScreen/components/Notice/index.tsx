import {TouchableOpacity, Text, View, Button} from "react-native";
import React from "react";
import styles from "./style";


interface Props {
  navigation: any;  
  title: any;
  content: any;
  key: any;
}

class Notice extends React.Component<Props> {

  constructor(props) {
      super(props);
  };

  render() {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    this.props.navigation.navigate("NoticeDetail", {
                        title: this.props.title, 
                        content: this.props.content
                })}}>
                <Text numberOfLines={1} style={styles.button_text}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

export default Notice;
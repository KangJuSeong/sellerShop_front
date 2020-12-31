import {Text, View, ScrollView} from "react-native";
import React from "react";
import styles from "./style";


interface Props {
  navigation: any;
}

class NoticeDetailScreen extends React.Component<Props> {

  constructor(props) {
      super(props);
  };

  render() {
    const title = this.props.navigation.getParam("title");
    const content = this.props.navigation.getParam("content");
    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <Text>{content}</Text>
            </View>
        </ScrollView>
    );
  }
}

export default NoticeDetailScreen;
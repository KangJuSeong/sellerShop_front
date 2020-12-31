import {View, ScrollView, Text, Alert} from "react-native";
import React from "react";
import Notice from "./components/Notice";
import {requestGetNoticeList} from "services/stat/statRequests";
import styles from "./style";

interface Props {
  navigation: any;
}

interface State {
  notices: any;
}

class NoticeScreen extends React.Component<Props, State> {

  constructor(props) {
      super(props);
      this.state = {
        notices: [],
      };
  };

  componentDidMount() {
      requestGetNoticeList().then((response) => {
          this.setState({notices: response.data.data.notices});
      }).catch((error) => {
          Alert.alert("네트워크 에러가 발생했습니다.");
      });
  };

  render() {
    return (
        <ScrollView style={styles.container}>
            {this.state.notices.map((item, i) => (
                <View key={i}>
                    <Notice title={item.title} content={item.content}
                            key={i} navigation={this.props.navigation}/>
                    <View style={styles.noticeBoundary}></View>
                </View>
            ))}
        </ScrollView>
    );
  }
}

export default NoticeScreen;
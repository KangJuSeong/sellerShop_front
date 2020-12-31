import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import styles from "./styles";
import AntIcon from "react-native-vector-icons/AntDesign";

interface Props {
    close: any;
}

class Term extends React.Component<Props> {

  constructor(props) {
      super(props);
  };

  render() {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <AntIcon
                        name="close" size={30}
                        onPress={this.props.close}/>
                </View>
                <ScrollView>
                    <Text>약관</Text>
                </ScrollView>
            </View>
    );
  }
}

export default Term;
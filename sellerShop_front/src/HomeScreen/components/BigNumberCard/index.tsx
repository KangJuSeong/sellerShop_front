import React from "react";
import {View, Text} from "react-native";

import styles from "./style";

interface Props {
  number: number;
}

export const BigNumberCard: React.FunctionComponent<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.number}</Text>
    </View>
  )
};

export default BigNumberCard;
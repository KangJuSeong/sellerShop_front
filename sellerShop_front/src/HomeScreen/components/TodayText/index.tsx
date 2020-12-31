import React from "react";

import {View, Text} from "react-native";

import styles from "./style";

interface Props {
}


function getDateText() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  return [`${month}월 ${date}일`, ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][today.getDay()]];
}

export const TodayText: React.FunctionComponent<Props> = () => {
  const dateTexts = getDateText();
  return (
    <View style={styles.dateContainer}>
      <Text style={[styles.dateText, styles.textBold]}>{dateTexts[0]},</Text>
      <Text style={styles.dateText}> </Text>
      <Text style={styles.dateText}>{dateTexts[1]}</Text>
    </View>
  )
};

export default TodayText;

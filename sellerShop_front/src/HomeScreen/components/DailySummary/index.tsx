import React from 'react';
import {View, Text} from "react-native";
import {AppState} from "services/reducer";
import {connect} from "react-redux";
import BigNumberCard from "../BigNumberCard";
import styles from "./style";


type TotalProps = DispatchProps & StateProps;


interface State {
}


class DailySummary extends React.Component<TotalProps, State> {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>총 주문건</Text>
          <View style={styles.gap} />
          <Text style={styles.titleText}>배송 처리건</Text>
        </View>
        <View style={styles.cardContainer}>
          <BigNumberCard number={this.props.total} />
          <View style={styles.gap} />
          <BigNumberCard number={this.props.shipped} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    total: state.dailySummary.total,
    shipped: state.dailySummary.shipped
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;


export default connect(mapStateToProps, mapDispatchToProps)(DailySummary);

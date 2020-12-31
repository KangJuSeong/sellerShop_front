import React from "react";
import {View, Text, Image} from "react-native";
import {AppState} from "services/reducer";
import {connect} from "react-redux";
import {requestDailyStatByAccount} from "services/stat/statRequests";
import {DailySummaryActions} from "services/stat/statActions";
import {getToken} from "libs/getToken";
import styles from "./style";


type TotalProps = DispatchProps & Props;

interface Props {
  shopIdx: number;
  count: number;
}


interface State {
  total: number;
  shipped: number;
  logoUri?: string;
  account?: string;
  shop?: string;
}


class ShopSummaryCard extends React.Component<TotalProps, State> {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      shipped: 0,
    };
  }

  componentDidMount() {
    const param = {count: this.props.count, shop: this.props.shopIdx};
    const that = this;
    try{
      getToken().then((token) => {
        requestDailyStatByAccount(token, param).then((response) => {
          const data = response.data.data;
          that.setState({
            total: data.total, shipped: data.shipped, logoUri: data.shop_logo_uri, account: data.account, shop: data.shop
          });
          this.props.increaseSummary({total: data.total, shipped: data.shipped});
        });
      });
    } catch (e) {
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: this.state.logoUri}} style={styles.image}/>
        </View>
        <View style={styles.accountContainer}>
          <Text style={[styles.accountText, styles.accountTextColor]}>{this.state.account}</Text>
          <Text style={[styles.accountText, styles.shopTextColor]}>{this.state.shop}</Text>
        </View>
        <View style={styles.countContainer}>
          <View>
            <Text style={styles.count}>{this.state.total}개</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseSummary: (value) => dispatch(DailySummaryActions.increaseSummary(value)),
  }
};

type DispatchProps = ReturnType<typeof mapDispatchToProps>;


export default connect(mapStateToProps, mapDispatchToProps)(ShopSummaryCard);

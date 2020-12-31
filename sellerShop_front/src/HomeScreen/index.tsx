import {Button, RefreshControl, ScrollView, AsyncStorage, Alert, View, TextInput} from "react-native";
import React from "react";
import DailySummary from "./components/DailySummary";
import TodayText from "./components/TodayText";
import DailyShopSummary from "./components/DailyShopSummary";
import {AppState} from "services/reducer";
import {connect} from "react-redux";
import {AccountByShopActions} from "services/stat/statActions";
import {getToken} from "libs/getToken";
import styles from "./style";

type TotalProps = DispatchProps & StateProps & Props;

interface Props {
  navigation: any;
}


interface State {
  refreshing: boolean;
}

class HomeScreen extends React.Component<TotalProps, State> {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
    this._handleRefresh = this._handleRefresh.bind(this)
  };

  componentDidMount() {
    if (!this.props.accountByShopState.isInitialized) {
      this._handleRefresh();
    }
  };

  _handleRefresh = () => {
    getToken().then(token => {
      if (token) {
        this.props.dispatchAccountByShop(token)
      }
    });
  };
 
  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this._handleRefresh} />
        }
      >
        <TodayText />
        <DailySummary />
        <DailyShopSummary navigate={this.props.navigation.navigate} />
        <Button title={'move Loading'} onPress={() => this.props.navigation.navigate('AuthHome')} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    accountByShopState: {
      isInitialized: state.accountByShop.isInitialized,
      isFetching: state.accountByShop.isFetching,
      data: state.accountByShop.accountByShop
    },
  }
};


const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchAccountByShop: (token) => dispatch(AccountByShopActions.loadAccountByShopRequest(token)),
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

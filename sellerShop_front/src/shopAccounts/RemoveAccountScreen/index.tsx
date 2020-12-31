import {View, ScrollView, Text, RefreshControl} from "react-native";
import React from "react";
import {AppState} from "services/reducer";
import {connect} from "react-redux";
import {ShopListActions, AccountByShopActions} from "services/stat/statActions";
import AccountInfo from "./components/ShopAccountInfo";
import {getToken} from "libs/getToken";
import styles from "./style";


type TotalProps = DispatchProps & StateProps & Props;

interface Props {
  navigation: any;
  accounts: any;
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
    this._handleRefresh = this._handleRefresh.bind(this);
  };

  componentDidMount() {
    if(!this.props.isInitialized) {
      getToken().then((token) => {
          if(token) {
              this.props.dispatchShopList(token);
          }
      })
    }
  };

  _handleRefresh = () => {
    getToken().then((token) => {
      if(token) {
          this.props.dispatchShopList(token);
          this.props.dispatchAccountByShop(token);
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.title_container}>
              <Text style={styles.bold}>판매자 계정 </Text>
              <Text style={styles.regular}>연동 해제</Text>
          </View>
          <ScrollView 
                contentContainerStyle={styles.account_container} 
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} 
                                    onRefresh={this._handleRefresh}/>
                }>
                {this.props.ShopList.shops.map((item, i) => (
                    <AccountInfo update={this._handleRefresh} id={item.id}
                                 login_id={item.account} shop={item.shop} key={i}/>
                ))}
          </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    isInitialized: state.shopList.isInitialized,
    ShopList: state.shopList.stat,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchShopList: (token) => dispatch(ShopListActions.loadShopListRequest(token)),
    dispatchAccountByShop: (token) => dispatch(AccountByShopActions.loadAccountByShopRequest(token)),
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
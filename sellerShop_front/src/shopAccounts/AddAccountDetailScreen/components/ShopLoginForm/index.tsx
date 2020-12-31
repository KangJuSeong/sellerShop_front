import {View, Text, TextInput, Alert} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {connect} from "react-redux";
import {AccountByShopActions, ShopListActions} from "services/stat/statActions";
import {getToken} from "libs/getToken"
import {requestAccountShopLogin} from "services/stat/statRequests";
import {returnShopNum} from "libs/getShop";
import styles from "./style";


type TotalProps = DispatchProps & Props;

interface Props {
  navigation: any;
  shop: any;
}


interface State {
    login_id: any,
    login_pw: any,
}

class ShopLoginForm extends React.Component<TotalProps, State> {

  constructor(props) {
    super(props);
    this.state = {
      login_id: "",
      login_pw: "",
    };

    this._handleRefresh = this._handleRefresh.bind(this);
    this.requestLogin = this.requestLogin.bind(this);
  };

  _handleRefresh = () => {
    getToken().then(token => {
      if (token) {
        this.props.dispatchAccountByShop(token);
        this.props.dispatchShopList(token);
      }
    });
  };

  requestLogin() {
    if(this.state.login_id == '' || this.state.login_pw == '') {
        Alert.alert("아이디나 비밀번호가 입력되지 않았습니다.");
        return;
    };

    const shop = returnShopNum(this.props.shop);
    getToken().then((token) => {
        requestAccountShopLogin(
            token, this.state.login_id, this.state.login_pw, shop
        ).then((response) => {
            if (response.data.message == "success") {
                this._handleRefresh();
                Alert.alert("성공적으로 연동하였습니다.");
                const id = this.state.login_id;
                this.setState({login_id: '', login_pw: ''});
                this.props.navigation.navigate('AddAccountDone', {
                    "shop": this.props.shop,
                    "id": id,
                });
            }
        }).catch((error) => {
            const code = error.response.data.data.code;
            if (code == 0) {
                Alert.alert("Invalid request");
            }
            if (code == 1) {
                Alert.alert("유효하지 않는 계정입니다.");
            }
            if (code == 2) {
                Alert.alert("이미 연동된 계정입니다.", "다른 계정을 연동해주세요");
            }
        })
    })
  }

  render() {
    return (
        <View>
            <View style={styles.input_container}>
                <TextInput placeholder="판매자 계정 아이디" value={this.state.login_id} 
                            onChangeText={(login_id) => this.setState({login_id})}/>
            </View>
            <View style={styles.input_container}>
                <TextInput placeholder="판매자 계정 비밀번호" value={this.state.login_pw} 
                           secureTextEntry={true} onChangeText={(login_pw) => this.setState({login_pw})}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => this.requestLogin()}>
                <Text style={styles.button_text}>연동하기</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      dispatchShopList: (token) => dispatch(ShopListActions.loadShopListRequest(token)),
      dispatchAccountByShop: (token) => dispatch(AccountByShopActions.loadAccountByShopRequest(token)),
    }
  };
  
  type DispatchProps = ReturnType<typeof mapDispatchToProps>;
  
  
export default connect(null, mapDispatchToProps)(ShopLoginForm);
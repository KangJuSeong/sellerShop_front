import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {AppState} from "services/reducer";
import {connect} from "react-redux";
import {Feather} from '@expo/vector-icons';
import ShopSummaryCard from "../ShopSummaryCard";
import styles from "./style";


type TotalProps = DispatchProps & StateProps & Props;

interface Props {
  navigate: any
}


interface State {
}


class DailyShopSummary extends React.Component<TotalProps, State> {

  render() {
    const {navigate} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>쇼핑몰 계정별 주문건</Text>
        </View>
        <View style={styles.cardContainer}>
          {this.props.accountByShopState.data.map((data, idx) => {
            const cards = [];
            for (let i=0; i<data.count; i++) {
              const key = idx.toString() + '-' + i.toString()
              cards.push(<ShopSummaryCard shopIdx={data.shop} count={i} key={key} />);
            }
            return cards;
          })}
        </View>
        <View style={styles.addContainer}>
          <TouchableOpacity style={{flexDirection: "row"}} onPress={() => navigate('AddAccount')}>
            <Feather name={'plus-circle'} size={14} color={'#4d7cfe'} />
            <Text style={styles.addText}> 쇼핑몰 계정 추가하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    accountByShopState: {
      isInitialized: state.accountByShop.isInitialized,
      isFetching: state.accountByShop.isFetching,
      data: state.accountByShop.accountByShop
    }
  }
};

const mapDispatchToProps = () => {
  return {
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;


export default connect(mapStateToProps, mapDispatchToProps)(DailyShopSummary);

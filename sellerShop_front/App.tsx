import React from 'react';
import {Platform} from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {fromRight} from "react-navigation-transitions";
import {Provider} from "react-redux";
import HomeScreen from "./src/HomeScreen";
import {configureStore} from "./configureStore";
import AddAccountScreen from "./src/shopAccounts/AddAccountScreen";
import AddAccountDetailScreen from "./src/shopAccounts/AddAccountDetailScreen";
import AddAccountDoneScreen from "./src/shopAccounts/AddAccountDoneScreen";
import AuthHomeScreen from "./src/accounts/AuthHomeScreen";
import SignUpScreen from "./src/accounts/SignUpScreen";
import RemoveAccountScreen from "./src/shopAccounts/RemoveAccountScreen";
import NoticeScreen from "./src/notice/NoticeScreen";
import NoticeDetailScreen from "./src/notice/NoticeDetailScreen";
import SettingScreen from "./src/SettingScreen";
import TabBarIcon from "./src/tabBar/TabBarIcon";

import ChangePasswordScreen from "./src/accounts/ChangePasswordScreen/";
import DeleteAccountScreen from "./src/accounts/DeleteAccountScreen";
import UserProfileScreen from "./src/accounts/UserProfileScreen"
import SubscribeScreen from "./src/accounts/SubscribeScreen";
import ReviewScreen from "./src/accounts/ReviewScreen";

const store = configureStore();


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  transitionConfig: () => fromRight(1000),
});

const AddAccountStack = createStackNavigator({
  AddAccount: {
    screen: AddAccountScreen
  },
  AddAccountDetail: {
    screen: AddAccountDetailScreen
  },
  AddAccountDone: {
    screen: AddAccountDoneScreen
  }
}, {
});

const RemoveAccountStack = createStackNavigator({
  RemoveAccount: {
    screen: RemoveAccountScreen,
  }
});

const SettingStack = createStackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      title: "설정",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
  Notice: {
    screen: NoticeScreen,
    navigationOptions: {
      title: "공지사항",
      headerTitleStyle: {
        fontWeight: "bold",
      }
    },
  },
  NoticeDetail: {
    screen: NoticeDetailScreen,
  },
  ChangePassword: {
    screen: ChangePasswordScreen,
  },
  DeleteAccount: {
    screen: DeleteAccountScreen,
  },
  UserProfile: {
    screen: UserProfileScreen,
  },
  Subscribe: {
    screen: SubscribeScreen,
  },
  Review: {
    screen: ReviewScreen,
  }
}, {
  headerLayoutPreset: "center",
});

const TabNavigator = createBottomTabNavigator({
    "홈": {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon 
                    focused={focused} 
                    name={Platform.OS === "ios" ? "ios-home" : "md-home"}/>),
        }
    },
    "계정 추가": {
        screen: AddAccountStack,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon 
                    focused={focused} 
                    name={Platform.OS === "ios" ? "ios-add" : "md-add"}/>)
        }
    },
    "계정 관리": {
        screen: RemoveAccountStack,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon 
                    focused={focused} 
                    name={Platform.OS === "ios" ? "ios-list" : "md-list"}/>)
        }
    },
    "설정": {
        screen: SettingStack,
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon 
                    focused={focused} 
                    name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}/>)
        }
    }
}, 
{
    tabBarOptions: {
        activeTintColor: "rgb(77, 124, 254)",
        inactiveTintColor: "rgb(128, 128, 128)",
    }
})


const AuthNavigator = createStackNavigator({
  AuthHome: {
    screen: AuthHomeScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    }
  },
});


let RootNavigator = createAppContainer(createSwitchNavigator({
  Auth: AuthNavigator,
  App: TabNavigator,
},
  {
  initialRouteName: 'Auth',
}));


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

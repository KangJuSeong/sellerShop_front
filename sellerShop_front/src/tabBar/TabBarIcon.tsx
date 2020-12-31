import React from "react";
import Icon from "react-native-vector-icons/Ionicons";



 interface Props {
    name: any;
    focused: any;
  }

 class TabBarIcon extends React.Component<Props> {

    constructor(props) {
      super(props);
    };
  
    render() {
      return (
        <Icon name={this.props.name}
              size={30}
              color={this.props.focused
                ? "rgb(77, 124, 254)" 
                : "rgb(128, 128, 128)"} />
      );
    }
  }

 export default TabBarIcon;
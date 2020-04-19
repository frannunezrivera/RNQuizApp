import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

class AlertProvider extends Component {
  static get childContextTypes() {
    return {
      alertWithType: PropTypes.func.isRequired,
      alert: PropTypes.func.isRequired,
    };
  }

  static get propTypes() {
    return {
      children: PropTypes.node.isRequired,
    };
  }

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
  }

  render() {
    const { children } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(children)}
        <DropdownAlert
          ref={(ref) => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}

export default AlertProvider;

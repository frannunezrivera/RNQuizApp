import React from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

import configureStore from './config/store';

import NavigationService from './utils/NavigationService';
import DropDownHolder from './utils/DropDownHolder';

EStyleSheet.build({
  $primaryRed: '#D85746',
  $primaryBlue: '#0074D9',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#57B17A',
  $primaryPurple: '#9E768F',
  $brightRed: '#ed3330',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});

export default class extends React.Component {
  constructor(props) {
    super(props);

    const {
      store,
    } = configureStore();
    this.state = {
      store,
    };
  }

  render() {
    const {
      store,
    } = this.state;
    return (
      <Provider store={store}>
        <AlertProvider>
          <View style={{ width: '100%', height: '100%' }}>
            <Navigator
              ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
              onNavigationStateChange={null}
            />
            <DropdownAlert ref={ref => DropDownHolder.setDropDown(ref)} closeInterval={3000} />
          </View>
        </AlertProvider>
      </Provider>
    );
  }
}

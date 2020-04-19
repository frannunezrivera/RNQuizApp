import { Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Results from '../screens/Results';


const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
  },
  {
    headerMode: 'none',
  },
);

const HomeModalCancelButton = (navigation, onCancel) => (
  <Button
    onPress={() => {
      navigation.navigate('Home');
      if (onCancel) {
        onCancel();
      }
    }}
    title="Cancel"
    color="#0074D9"
  />
);

const QuizStack = createStackNavigator({
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Do your best!',
      headerRight: HomeModalCancelButton(navigation),
    }),
  },
});

const ResultsStack = createStackNavigator(
  {
    screen: Results,
  }, {
    headerMode: 'none',
  },
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Quiz: {
      screen: QuizStack,
    },
    Results: {
      screen: ResultsStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);


export default createAppContainer(AppStack);

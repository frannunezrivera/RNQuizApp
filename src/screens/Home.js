import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-native-elements';
import { BottomContainer, Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';
import NavigationService from '../utils/NavigationService';
import { startGame } from '../actions/game';
import { connectAlert } from '../components/Alert';
import { Text, Title } from '../components/Texts';

const Home = ({ dispatch }) => {
  const [difficultyIndex, setDifficultyIndex] = useState(1);
  const buttons = ['Easy', 'Medium', 'Hard'];

  const handleStartPress = () => {
    dispatch(startGame(buttons[difficultyIndex].toLowerCase()));
    NavigationService.navigate('Quiz');
  };

  return (
    <Container>
      <Container>
        <View>
          <Title>Welcome to the</Title>
          <Title>Trivia Challenge!</Title>
        </View>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <View>
          <Text style={{ textAlign: 'center' }}>Select difficulty level</Text>
          <ButtonGroup
            onPress={setDifficultyIndex}
            selectedIndex={difficultyIndex}
            buttons={buttons}
            containerStyle={{ height: 40, width: '100%' }}
          />
        </View>
      </Container>
      <BottomContainer>
        <PrimaryButton buttonStyle={{ width: 150 }} onPress={handleStartPress} title="BEGIN" />
      </BottomContainer>
    </Container>
  );
};

Home.defaultProps = {};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(connectAlert(Home));

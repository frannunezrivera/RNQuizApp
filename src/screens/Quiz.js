import React from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import { BottomContainer, Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { checkAnswer } from '../actions/city';
import { connectAlert } from '../components/Alert';
import { Title, Text } from '../components/Texts';

const ANSWERS = {
  TRUE: 'True',
  FALSE: 'False',
};


const Quiz = ({ currentQuestion, questionNumber, dispatch }) => {
  if (!currentQuestion) {
    return <LoadingOverlay />;
  }

  const handleAnswerPress = (userAnswer) => {
    dispatch(checkAnswer(currentQuestion, userAnswer));
  };


  return (
    <Container>
      <Container>
        <Animatable.View key={Math.random()} animation="bounceInDown">
          <Title>{currentQuestion.category}</Title>
        </Animatable.View>
        <Animatable.View key={Math.random()} animation="bounceInUp">
          <View style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 50 }}>
            <Text>{currentQuestion.question}</Text>
          </View>
        </Animatable.View>
        <Text>
          {questionNumber}
          {' '}
          of 10
        </Text>
      </Container>
      <BottomContainer>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <PrimaryButton
              title="True"
              buttonStyle={{ width: 100 }}
              onPress={() => handleAnswerPress(ANSWERS.TRUE)}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <PrimaryButton
              title="False"
              buttonStyle={{ width: 100 }}
              onPress={() => handleAnswerPress(ANSWERS.FALSE)}
            />
          </View>
        </View>
      </BottomContainer>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentQuestion: state.game.questions && state.game.questions[0],
  questionNumber: state.game.questions && 11 - state.game.questions.length,
});

Quiz.defaultProps = {
  currentQuestion: null,
};

Quiz.propTypes = {
  dispatch: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  currentQuestion: PropTypes.shape(),
};

export default connect(mapStateToProps)(connectAlert(Quiz));

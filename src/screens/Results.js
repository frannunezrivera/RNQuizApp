import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BottomContainer, Container } from '../components/Container';
import { PrimaryButton } from '../components/Button';
import NavigationService from '../utils/NavigationService';
import { startGame } from '../actions/city';
import { Text, Title } from '../components/Texts';
import { Result } from '../components/Result';

const Results = ({
  dispatch, score, results, difficulty,
}) => {
  const handleStartPress = () => {
    dispatch(startGame(difficulty));
    NavigationService.navigate('Quiz');
  };

  return (
    <Container scroll>
      <Container>
        <Title>You scored</Title>
        <Title>
          {score}
          /10
        </Title>
        <Text>{`(${difficulty} level)`}</Text>
      </Container>
      <View>
        {
          results.map(question => (
            <Result
              key={question.id}
              title={question.category}
              subtitle={question.question}
              correct={question.userAnswerCorrect}
            />
          ))
        }
      </View>
      <BottomContainer>
        <PrimaryButton title="PLAY AGAIN?" onPress={handleStartPress} />
      </BottomContainer>
    </Container>
  );
};

Results.defaultProps = {
  score: 0,
};

Results.propTypes = {
  dispatch: PropTypes.func.isRequired,
  score: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  difficulty: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  score: state.game.score,
  results: state.game.results,
  difficulty: state.game.difficulty,
});

export default connect(mapStateToProps)(Results);

import {
  takeEvery,
  call,
  put,
  select,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import { Html5Entities } from 'html-entities';
import {
  GAME_START,
  QUESTIONS_FETCH_SUCCESS,
  GAME_ERROR,
  NEXT_QUESTION,
  CHECK_ANSWER,
  GAME_RESULTS,
} from '../actions/city';

import NavigationService from '../utils/NavigationService';
import DropDownHolder from '../utils/DropDownHolder';

const htmlEntities = new Html5Entities();
const fetchQuestions = difficulty => fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`);

const loadQuestions = function* (action) {
  try {
    const { difficulty } = action;
    const response = yield call(fetchQuestions, difficulty);


    if (response.error) {
      yield put({
        type: GAME_ERROR,
        error: response.error,
      });
      DropDownHolder.getDropDown()
        .alertWithType('error', 'Sorry!', 'ERROR FETCHING QUESTIONS, PLEASE TRY AGAIN');
      NavigationService.navigate('Home');
    } else {
      const questions = yield response.json();
      const questionsFormatted = questions.results.map((question, i) => Object.assign(question, {
        question: htmlEntities.decode(question.question),
        id: `question_${i}`,
      }));

      yield put({
        type: QUESTIONS_FETCH_SUCCESS,
        questions: questionsFormatted,
      });
    }
  } catch (error) {
    DropDownHolder.getDropDown()
      .alertWithType('error', 'Sorry!', 'ERROR FETCHING QUESTIONS, PLEASE TRY AGAIN');
    yield put({
      type: GAME_ERROR,
      error: 'ERROR FETCHING QUESTIONS, PLEASE TRY AGAIN',
    });
    NavigationService.navigate('Home');
  }
};

const goToNextQuestion = function* (action) {
  try {
    const { currentQuestion, userAnswer } = action;
    const answerCorrect = currentQuestion.correct_answer === userAnswer;

    yield put({
      type: NEXT_QUESTION,
      correct: answerCorrect,
      currentQuestion: Object.assign(
        { userAnswer, userAnswerCorrect: answerCorrect },
        currentQuestion,
      ),
    });

    const questionsLeft = yield select(state => state.game.questions.length);
    if (!questionsLeft) {
      yield put({
        type: GAME_RESULTS,
      });
      NavigationService.navigate('Results');
    }
  } catch (error) {
    DropDownHolder.getDropDown()
      .alertWithType('error', 'Sorry!', error.message);
    yield put({
      type: GAME_ERROR,
      error: 'GAME ERROR, PLEASE TRY AGAIN',
    });
    NavigationService.navigate('Home');
  }
};

const rootSaga = function* () {
  yield takeEvery(GAME_START, loadQuestions);
  yield takeEvery(CHECK_ANSWER, goToNextQuestion);
};

export default rootSaga;

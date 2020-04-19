import {
  GAME_START,
  GAME_STOP,
  GAME_ERROR,
  QUESTIONS_FETCH_SUCCESS,
  NEXT_QUESTION,
} from '../actions/city';

const initialState = {
  currentGame: false,
  questions: [],
  score: null,
  results: [],
  difficulty: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
      return { ...initialState, currentGame: true, difficulty: action.difficulty };
    case QUESTIONS_FETCH_SUCCESS:
      return { ...state, questions: action.questions };
    case GAME_STOP:
    case GAME_ERROR:
      return { ...state, currentGame: false };
    case NEXT_QUESTION:
      return {
        ...state,
        questions: [...state.questions.slice(1)],
        score: action.correct ? state.score + 1 : state.score,
        results: [...state.results.concat([action.currentQuestion])],
      };
    default:
      return state;
  }
};

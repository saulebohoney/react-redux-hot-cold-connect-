import * as actions from '../actions/index.js';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!!!!!!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const HotColdreducer = (state=initialState, action) => {
  if(action.type === actions.START_GAME){
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!!!!!!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
  }
  return state;
}

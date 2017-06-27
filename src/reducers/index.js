import * as actions from '../actions/index.js';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!!!!!!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export const HotColdreducer = (state=initialState, action) => {
  if(action.type === actions.START_GAME){
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!!!!!!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
  }
  else if(action.type===actions.MAKE_GUESS){
    const guess = parseInt(action.guess, 10);
      if (isNaN(guess)) {
          return {...state, feedback: 'Please enter a valid number'};
      }
      const difference = Math.abs(guess - state.correctAnswer);
      let feedback;
      if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
      }
      else if (difference >= 30) {
          feedback = 'You\'re Cold...';
      }
      else if (difference >= 10) {
          feedback = 'You\'re Warm';
      }
      else if (difference >= 1) {
          feedback = 'You\'re Hot!';
      }
      else {
          feedback = 'You got it!';
      }
      console.log("This is feedback " + feedback);
    return Object.assign({},state,{
      feedback,
      guesses: [...state.guesses, action.guess]
    })
  }
  else if (action.type===actions.OPEN_CLOSE_MODAL){
      if(state.showInfoModal===true){
        return Object.assign({},state,{
          showInfoModal: false
        })
      }
      else{
        return Object.assign({},state,{
          showInfoModal: true
        })
      }
      
  }
  return state;
}
// else if(action.type===actions.OPEN_MODAL){
  //     return Object.assign({},state,{
  //         ['action.oModal']: false
  //     })
  // }
  // else if(action.type===actions.CLOSE_MODAL){
  //     return Object.assign({},state,{
  //         ['action.cModal']: true,
  //         ['action.oModal']: false
  //     })
  // }
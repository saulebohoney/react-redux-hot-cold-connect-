import store from './store';
import * as actions from './actions/index.js';

console.log(store.getState());
store.dispatch(actions.makeGuess(3));
console.log(store.getState());
// store.dispatch(actions.openModal());
// console.log(store.getState());
// store.dispatch(actions.closeModal());
store.dispatch(actions.openCloseModal(true));
console.log("Below it should show true for infoModal");
console.log(store.getState());

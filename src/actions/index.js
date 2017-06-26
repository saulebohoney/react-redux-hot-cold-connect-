//start new Game
//open modal
//make a guess
export const START_GAME = 'START_GAME';
export const startGame = () => ({
  type: START_GAME,
});

export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = oModal => ({
  type: OPEN_MODAL,
  oModal
});

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = cModal => ({
  type: CLOSE_MODAL,
  cModal
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

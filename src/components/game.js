import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


import {startGame} from '../actions';

import {openCloseModal} from '../actions';

import {makeGuess} from '../actions';


export  class Game extends React.Component {
    startGame(){
     this.props.dispatch(startGame());
    }
    openCloseModal(){
        this.props.dispatch(openCloseModal());
    }
    
    makeGuess(guess){
        this.props.dispatch(makeGuess(guess));
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.makeGuess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}
Game.defaultProps = {
  guesses: [],
  feedback: 'Make your guess!!!!!!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer:state.correctAnswer,
    showInfoModal:state.showInfoModal
});

export default connect(mapStateToProps)(Game);


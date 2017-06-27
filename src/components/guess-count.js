import React from 'react';
import './guess-count.css';
import {connect} from 'react-redux';

export function GuessCount(props) {
    console.log("This is the log we want? " + props.guesses);
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}
const mapStateToProps=state=>({
    count: state.guesses.length
})
export default connect(mapStateToProps)(GuessCount);
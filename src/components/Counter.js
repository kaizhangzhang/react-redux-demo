import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component{
  increment = () => {
      const { dispatch } = this.props;
      console.log(this.props)
      dispatch({
        type: "INCREMENT",
      });

    }
    decrement = () => {
      const { dispatch } = this.props;
      console.log(this.props)
      dispatch({
        type: "DECREMENT",
      });

    }
    render() {
        const { value } = this.props
        console.log(this.props);
        return (
          <p>
            Clicked: {value} times

            <button onClick={this.increment}>
              increment
            </button>
            {' '}
            <button onClick={this.decrement}>
              decrement
            </button>
          </p>
        )
      }
}

Counter.propTypes = {
    value: PropTypes.number,
}

function mapStateToProps (state) {
  console.log('mapStateToProps', state);
  return {
    value: state
  }
  
};


export default connect(mapStateToProps)(Counter); 
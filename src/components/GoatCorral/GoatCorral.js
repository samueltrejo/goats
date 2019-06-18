import React from 'react';

import Goat from '../Goat/Goat';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  render() {
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      <Goat key={goat.id} goat={goat} />
    ));
    return (
      <div className="d-flex flex-wrap">
        { makeGoats }
      </div>
    );
  }
}

export default GoatCorral;

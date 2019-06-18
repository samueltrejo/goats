import React from 'react';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  render() {
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      <h2>{goat.name}</h2>
      // <Goat goat={goat} />
    ));
    return (
      <div>
        { makeGoats }
      </div>
    );
  }
}

export default GoatCorral;

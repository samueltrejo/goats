import React from 'react';

import goatShape from '../../helpers/propz/goatShape';

import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
  }

  render() {
    const { goat } = this.props;
    const cardClass = `card bg-${goat.color}`;
    return (
      <div className="Goat col-3 p-5">
        <div className={cardClass}>
          <img src={goat.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.favPose}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;

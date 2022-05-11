import React from 'react';
import { Link } from 'react-router-dom';

import VehicleIndex from '../containers/vehicle_index';

const App = (props) => {
  return (
    <div className="app">
      <VehicleIndex channelFromParams={props.match.params.vehicles} />
      <Link className="btn btn-primary btn-cta" to="/vehicles/new">
        Add new car
      </Link>
    </div>
  );
};

export default App;

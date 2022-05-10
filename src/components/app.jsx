import React from 'react';
import VehicleList from '../containers/vehicle_list';

const App = (props) => {
  return (
    <div className="app">
      <VehicleList channelFromParams={props.match.params.vehicles} />
    </div>
  );
};

export default App;

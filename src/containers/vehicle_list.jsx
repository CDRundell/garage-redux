import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVehicles } from '../actions';
import { Link } from 'react-router-dom'

class VehicleList extends Component {
  componentWillMount() {
    this.props.setVehicles();
  }

  render () {
    const { vehicles } = this.props.vehicles;
    return (
      <div>
        {vehicles.map((item) => {
          return (
            <li key={item.id}>
              {/* <p><strong>Owner:</strong> {item.owner} <strong>Car Brand:</strong> {item.brand}</p> */}
              <Link to={`/vehicles/${item.id}`}>{item.plate}</Link>
            </li>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vehicles: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { setVehicles: setVehicles },
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);

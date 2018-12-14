import React from 'react';
import PropTypes from 'prop-types';

function Placemark(props){
  const placemarkRepresentation = {
    geoObjectType: placemark,
    coordinates: props.coordinates
  }
  return null;
}

Placemark.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number);
}

export default Placemark;

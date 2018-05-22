import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HotelItem(props) {
    const { id, locationName, label } = props;

    return (
        <li>
            <NavLink to={`/hotel/${id}`}>{label}</NavLink>
            <h3>{locationName}</h3>
        </li>
    );
}

HotelItem.propTypes = {
    locationName: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
};

export default HotelItem;

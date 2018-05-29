import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HotelItem(props) {
    const { id, locationName, label } = props;

    return (
        <li className='hotelItem'>
            <NavLink to={`/hotel/${id}`} className='hotelItemLink'>
                <p className='hotelItemName'>{label}</p>
                <p className='hotelItemCityName'>{locationName}</p>
            </NavLink>
        </li>
    );
}

HotelItem.propTypes = {
    locationName: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
};

export default HotelItem;

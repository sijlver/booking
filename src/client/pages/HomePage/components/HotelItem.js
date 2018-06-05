import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { hotelsConstants } from '../../../constants';

function HotelItem(props) {
    const { id, locationName, label } = props;

    return (
        <li className='hotelItem'>
            <NavLink to={`/hotel/${id}`} className='hotelItemLink'>
                <img className='hotelItemImg' src={`${hotelsConstants.URL_HOTEL_PHOTO}${id}_1/190/150.auto`} />
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

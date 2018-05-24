import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HotelItem from './HotelItem';

function ListHotels(props) {
    const { listHotels } = props;

    return (
        <div className='listHotels'>
            <ul>
                {
                    listHotels.map((hotel) => (
                        <HotelItem key={hotel.id} {...hotel} />
                    ))
                }
            </ul>
        </div>
    );
}

ListHotels.propTypes = {
    listHotels: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ListHotels;

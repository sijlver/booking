import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { BusyIndicator } from '../../../components';
import HotelItem from './HotelItem';

class ListHotels extends Component {
    render() {
        const { busyIndicator, listHotels } = this.props;

        return (
            <div>
                <ul>
                    {
                        listHotels.map((hotel) => (
                            <HotelItem key={hotel.id} {...hotel} />
                        ))
                    }
                </ul>
                <BusyIndicator show={busyIndicator} />
            </div>
        );
    }
}

ListHotels.propTypes = {
    busyIndicator: PropTypes.bool,
    listHotels: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

const mapStateToProps = state => ({
    busyIndicator: state.commonReducer.busyIndicator,
    listHotels: state.hotelsReducer.listHotels,
});

const mapActionToProps = dispatch => ({
});

export default connect(mapStateToProps, mapActionToProps)(ListHotels);

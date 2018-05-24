import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hotelsActions } from '../../actions';
import { BusyIndicator } from '../../components';

class HotelPage extends Component {
    componentDidMount() {
        const { match: { params: { id }, location: { search } }, requestHotelInformation } = this.props;
        const searchParams = new URLSearchParams(search);

        requestHotelInformation(id);
    }
    render() {
        const { hotelInformation: { label }, busyIndicator } = this.props;

        return (
            <div>
                <p>{label}</p>
                <BusyIndicator show={busyIndicator} />
            </div>
        );
    }
}

HotelPage.propTypes = {
    hotelInformation:  PropTypes.shape({
        label: PropTypes.string,
        locationName: PropTypes.string,
    }),
    busyIndicator:  PropTypes.bool,
};

const mapStateToProps = state => ({
    hotelInformation: state.hotelsReducer.hotelInformation,
    busyIndicator: state.commonReducer.busyIndicator,
});

const mapActionToProps = dispatch => ({
    requestHotelInformation(id) {
        dispatch(hotelsActions.getHotelInformation(id));
    },
});

export default connect(mapStateToProps, mapActionToProps)(HotelPage);

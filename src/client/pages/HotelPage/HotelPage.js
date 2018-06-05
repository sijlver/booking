import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hotelsConstants } from '../../constants';
import { hotelsActions } from '../../actions';
import { BusyIndicator, Carousel, MapContainer } from '../../components';
import './styles.css';

class HotelPage extends Component {
    componentWillMount() {
        const { match: { params: { id } }, requestHotelInformation } = this.props;

        requestHotelInformation(id);
    }
    render() {
        const { hotelInformation: { label, locationName, lat, lng }, match: { params: { id } }, busyIndicator } = this.props;

        return (
            <div>
                <h1 className='titleNameHotel'>{label}</h1>
                <h2 className='titleLocationNameHotel'>{locationName}</h2>
                <div className='mainContentWrapper'>
                    <Carousel id={id} />
                    <MapContainer lat={lat} lng={lng} locationName={locationName} />
                </div>
                <BusyIndicator show={busyIndicator} />
            </div>
        );
    }
}

HotelPage.propTypes = {
    hotelInformation:  PropTypes.shape({
        label: PropTypes.string,
        locationName: PropTypes.string,
        lat: PropTypes.number,
        lng: PropTypes.number,
    }),
    busyIndicator:  PropTypes.bool,
};

HotelPage.fetchData = (dispatch, match) => {
    return dispatch(hotelsActions.getHotelInformation(match.params.id))
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

export { HotelPage };
export default connect(mapStateToProps, mapActionToProps)(HotelPage);

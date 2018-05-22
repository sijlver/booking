import { hotelsConstants } from '../constants';
import { setBusyIndicator, requestFailure } from './commonActions';

//request for getting list of hotels
function getListHotels(city) {
    return function(dispatch) {
        const url = `${hotelsConstants.URL_HOTELS}?query=${city}&lang=en&lookFor=hotel`;

        dispatch(setBusyIndicator(true));
        fetch(url)
            .then((oData) => oData.json())
            .then((oData) => {
                const hotels = oData.results.hotels.map((hotel) => {
                    const { id, locationName, label } = hotel;

                    return { id, locationName, label };
                });

                dispatch(setBusyIndicator(false));
                dispatch(receivedListHotels(hotels));
            })
            .catch((err) => requestFailure(err));
    }
};

function receivedListHotels(listHotels) {
    return { type: hotelsConstants.RECEIVED_HOTELS, payload: { listHotels }};
};

//request for getting hotel information
function getHotelInformation(id) {
    return function(dispatch) {
        const url = `${hotelsConstants.URL_HOTELS}?query=${id}&lang=en`;

        dispatch(setBusyIndicator(true));
        fetch(url)
            .then((oData) => oData.json())
            .then((oData) => {
                dispatch(setBusyIndicator(false));
                dispatch(receivedHotelInformation(oData.results.hotels[0]));
            })
            .catch((err) => requestFailure(err));
    }
};

function receivedHotelInformation(hotelInformation) {
    return { type: hotelsConstants.RECEIVED_HOTEL, payload: { hotelInformation }};
};

export { getListHotels, getHotelInformation };
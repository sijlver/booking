import { hotelsConstants } from '../constants';
import { setBusyIndicator } from './commonActions';
import helperFunctions from '../utils';

// change search name in a filter panel
function changeFilterNames(searchName, dateStart, dateEnd, limit) {
    return {
        type: hotelsConstants.CHANGE_FILTER_NAMES,
        payload: {
            searchName, dateStart, dateEnd, limit,
        },
    };
}

function receivedListHotels(listHotels) {
    return { type: hotelsConstants.RECEIVED_HOTELS, payload: { listHotels } };
}

// request for getting list of hotels
const getListHotels = (city, dateStart, dateEnd, limit) => (dispatch) => {
    const url = `${hotelsConstants.URL_HOTELS}?query=${city}&lang=en&lookFor=hotel&limit=${limit}`;

    dispatch(setBusyIndicator(true));
    dispatch(changeFilterNames(city, dateStart, dateEnd, limit));
    return fetch(url)
        .then(helperFunctions.checkStatusError)
        .then(oData => oData.json())
        .then((oData) => {
            const hotels = oData.results.hotels.map((hotel) => {
                const { id, locationName, label } = hotel;

                return { id, locationName, label };
            });

            dispatch(setBusyIndicator(false));
            dispatch(receivedListHotels(hotels));
        })
        .catch(err => Promise.reject(err));
};

function receivedHotelInformation(hotelInformation) {
    return { type: hotelsConstants.RECEIVED_HOTEL, payload: { hotelInformation } };
}

// request for getting hotel information
const getHotelInformation = id => (dispatch) => {
    const url = `${hotelsConstants.URL_HOTELS}?query=${id}&lang=en`;

    dispatch(setBusyIndicator(true));
    return fetch(url)
        .then(helperFunctions.checkStatusError)
        .then(oData => oData.json())
        .then((oData) => {
            dispatch(setBusyIndicator(false));
            dispatch(receivedHotelInformation(oData.results.hotels[0]));
        })
        .catch(err => Promise.reject(err));
};

export { getListHotels, getHotelInformation, receivedListHotels, receivedHotelInformation, changeFilterNames };

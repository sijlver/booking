import { hotelsConstants, commonConstants } from '../constants';
import { hotelsActions } from '../actions';
import helperFunction from '../utils';

const initialState = {
    searchName: '',
    dateStart: helperFunction.changeFormatDate(new Date()),
    dateEnd: helperFunction.changeFormatDate(new Date(), 1),
    limit: 10,
    listHotels: [],
    hotelInformation: {},
};

const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
    case hotelsConstants.RECEIVED_HOTELS: {
        const { listHotels } = action.payload;

        return {...state, listHotels };
    }
    case hotelsConstants.RECEIVED_HOTEL: {
        const { hotelInformation: { label, locationName } } = action.payload;

        return {...state, hotelInformation: { label, locationName } };
    }
    case hotelsConstants.CHANGE_FILTER_NAMES: {
        const { searchName, dateStart, dateEnd, limit } = action.payload;

        return {...state, searchName, dateStart, dateEnd, limit };
    }
    default: {
        return state;
    }
    }
};

export default hotelsReducer;

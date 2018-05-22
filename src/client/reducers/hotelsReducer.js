import { hotelsConstants, commonConstants } from '../constants';
import { hotelsActions } from '../actions';

const initialState = {
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
    default: {
        return state;
    }
    }
};

export default hotelsReducer;

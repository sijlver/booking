// @flow
import { hotelsConstants } from '../constants';
import helperFunction from '../utils';

type TypesStateHotelsReducer = {
    searchName: string,
    dateStart: Date,
    dateEnd: Date,
    limit: string,
    listHotels: [],
    hotelInformation: {
        label: string,
        locationName: string,
        lat: number,
        lng: number,
    },
};

type TypesActionHotelsReducer = {
    type: string,
    payload: {
        ...TypesStateHotelsReducer,
        hotelInformation: {
            label: string,
            locationName: string,
            location: {
                lat: number,
                lon: number,
            },
        }
    },
};

const initialState = {
    searchName: '',
    dateStart: helperFunction.changeFormatDate(new Date()),
    dateEnd: helperFunction.changeFormatDate(new Date(), 1),
    limit: '10',
    listHotels: [],
    hotelInformation: {
        label: '',
        locationName: '',
        lat: 0,
        lng: 0,
    },
};

const hotelsReducer = (state: TypesStateHotelsReducer = initialState, action: TypesActionHotelsReducer): TypesStateHotelsReducer => {
    switch (action.type) {
    case hotelsConstants.RECEIVED_HOTELS: {
        const { listHotels } = action.payload;

        return { ...state, listHotels };
    }
    case hotelsConstants.RECEIVED_HOTEL: {
        const { hotelInformation: { label, locationName, location: { lat, lon } } } = action.payload;

        return {
            ...state,
            hotelInformation: {
                label, locationName, lat, lng: lon,
            },
        };
    }
    case hotelsConstants.CHANGE_FILTER_NAMES: {
        const {
            searchName, dateStart, dateEnd, limit,
        } = action.payload;

        return {
            ...state, searchName, dateStart, dateEnd, limit,
        };
    }
    default: {
        return state;
    }
    }
};

export default hotelsReducer;

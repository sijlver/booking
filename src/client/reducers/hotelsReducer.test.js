import React from 'react';

import hotelsReducer from './hotelsReducer';
import { hotelsActions } from '../actions';
import { commonConstants, hotelsConstants } from '../constants';
import helperFunction from '../utils';

describe('hotelsReducer', () => {
    const initialState = {
        searchName: '',
        dateStart: helperFunction.changeFormatDate(new Date()),
        dateEnd: helperFunction.changeFormatDate(new Date(), 1),
        limit: '10',
        listHotels: [],
        hotelInformation: {},
    };

    it('should return the initial state', () => {
        expect(hotelsReducer(initialState, { type: commonConstants.BUSY_INDICATOR })).toEqual(initialState);
    });
    it('should return received hotels', () => {
        const action = {
            type: hotelsConstants.RECEIVED_HOTELS,
            payload: {
                listHotels: [{}],
            },
        };

        expect(hotelsReducer(initialState, action)).toEqual({ ...initialState, listHotels: action.payload.listHotels });
    });
    it('should return received hotel', () => {
        const action = {
            type: hotelsConstants.RECEIVED_HOTEL,
            payload: {
                hotelInformation: {
                    label: 'label',
                    locationName: 'locationName',
                    location: {
                        lat: 'lat',
                        lon: 'lon',
                    },
                },
            },
        };
        const information = {
            label: 'label',
            locationName: 'locationName',
            lat: 'lat',
            lng: 'lon',
        };

        expect(hotelsReducer(initialState, action)).toEqual({ ...initialState, hotelInformation: { ...information } });
    });
    it('should return change filter names', () => {
        const action = {
            type: hotelsConstants.CHANGE_FILTER_NAMES,
            payload: {
                searchName: 'searchName',
                dateStart: helperFunction.changeFormatDate(new Date(), 1),
                dateEnd: helperFunction.changeFormatDate(new Date(), 2),
                limit: '9',
            },
        };

        expect(hotelsReducer(initialState, action)).toEqual({ ...initialState, ...action.payload });
    });
});

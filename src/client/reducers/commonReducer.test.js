import React from 'react';

import commonReducer from './commonReducer';
import { commonConstants, hotelsConstants } from '../constants';

describe('commonReducer', () => {
    const initialState = {
        busyIndicator: false,
    };

    it('should return the initial state', () => {
        expect(commonReducer(initialState, { type: hotelsConstants.RECEIVED_HOTELS })).toEqual(initialState);
    });
    it('should return true', () => {
        const action = {
            type: commonConstants.BUSY_INDICATOR,
            payload: {
                busyIndicator: true,
            },
        };

        expect(commonReducer(initialState, action)).toEqual({ ...initialState, ...action.payload });
    });
});

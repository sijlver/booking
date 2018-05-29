import React from 'react';

import { setBusyIndicator } from './commonActions';
import { commonConstants } from '../constants';

describe('commonActions', () => {
    it('setBusyIndicator function', () => {
        const action = {
            type: commonConstants.BUSY_INDICATOR,
            payload: {
                busyIndicator: true
            },
        };

        expect(setBusyIndicator(true)).toEqual(action);
    });
});

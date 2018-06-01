import React from 'react';

import { checkStatusError, changeFormatDate, checkType } from './helperFunctions';

describe('helperFunctions', () => {
    it('checkType function', () => {
        expect(checkType('text')).toEqual('string');
        expect(checkType(10)).toEqual('number');
        expect(checkType({})).toEqual('object');
        expect(checkType([])).toEqual('array');
        expect(checkType(undefined)).toEqual('undefined');
        expect(checkType(true)).toEqual('boolean');
    });
    it('changeFormatDate function', () => {
        const dateStart = '2018-05-09';
        const dateEnd = '2018-05-10';
        const checkMonthDate = '2018-11-09';

        expect(changeFormatDate(new Date(dateStart))).toEqual(dateStart);
        expect(changeFormatDate(new Date(dateStart), 1)).toEqual(dateEnd);
        expect(changeFormatDate(new Date(checkMonthDate))).toEqual(checkMonthDate);
    });
    it('checkStatusError function', () => {
        const responseSuccess = {
            ok: true,
        };
        const responseError = {
            ok: false,
            statusText: 'error',
        };

        expect(checkStatusError(responseSuccess)).toEqual(responseSuccess);
        expect(() => checkStatusError(responseError)).toThrow(responseError.statusText);
    });
});

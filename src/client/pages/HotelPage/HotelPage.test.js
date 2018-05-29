import React from 'react';
import { mount  } from "enzyme";
import jest from 'jest-mock';

import { HotelPage } from './HotelPage';

describe('HotelPage', () => {
    it('should render self', () => {
        const props = {
            busyIndicator: false,
            hotelInformation: {
                label: 'Atlantis The Palm'
            },
            match: {
                params: {
                    id: '1'
                }
            },
            requestHotelInformation: jest.fn()
        };
        const wrapper = mount (
            <HotelPage {...props} />
        );

        expect(wrapper.prop('busyIndicator')).toBeFalsy();
        expect(wrapper.prop('hotelInformation').label).toEqual('Atlantis The Palm');
        expect(wrapper.prop('match').params.id).toEqual('1');
        expect(wrapper.prop('requestHotelInformation')).toBeDefined();
    });
});

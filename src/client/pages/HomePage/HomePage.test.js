import React from 'react';
import { HomePage } from './HomePage';
import { shallow  } from "enzyme";
import jest from 'jest-mock';

describe('HomePage', () => {
    it('should render self', () => {
        const props = {
            listHotels: [{ label: 'SelimVseh" Apartment at Shchorsa', key: '1' }],
            searchName: 'searchName',
            dateStart: '10-08-1991',
            dateEnd: '11-12-1991',
            limit: '10',
            busyIndicator: true,
            requestListHotels: jest.fn()
        };
        const wrapper = shallow (
            <HomePage {...props} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});

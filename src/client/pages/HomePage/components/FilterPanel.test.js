import React from 'react';
import { shallow  } from "enzyme";
import jest from 'jest-mock';

import FilterPanel from './FilterPanel';

describe('FilterPanel', () => {
    it('should render self', () => {
        const props = {
            searchName: 'searchName',
            dateStart: '10-08-1991',
            dateEnd: '11-12-1991',
            limit: '10',
            requestListHotels: jest.fn()
        };
        const wrapper = shallow (
            <FilterPanel {...props} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});

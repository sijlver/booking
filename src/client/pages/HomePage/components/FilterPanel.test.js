import React from 'react';
import { shallow } from 'enzyme';
import jest from 'jest-mock';

import FilterPanel from './FilterPanel';

describe('FilterPanel', () => {
    it('should render self', () => {
        const searchName = 'searchName';
        const dateStart = '2018';
        const dateEnd = '2018-05-29';
        const limit = '10';
        const requestListHotels = jest.fn();
        const props = {
            searchName, dateStart, dateEnd, limit, requestListHotels,
        };
        const wrapper = shallow(
            <FilterPanel {...props} />,
        );
        wrapper.setState({
            minStartDate: '2018-05-28',
            minEndDate: '2018-05-29',
        });

        expect(wrapper).toMatchSnapshot();
        wrapper.simulate('submit', { preventDefault: jest.fn() });
        wrapper.find('Field').at(1).simulate('change', { target: { name: 'dateStart', value: 'dateStart' } });
    });
});

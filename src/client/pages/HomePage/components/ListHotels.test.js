import React from 'react';
import { shallow } from 'enzyme';

import ListHotels from './ListHotels';

describe('ListHotels', () => {
    it('should render self', () => {
        const props = {
            listHotels: [{
                locationName: 'Hurghada, Egypt',
                id: '1',
                label: 'Steigenberger Al Dau Beach Hotel',
            }],
        };
        const wrapper = shallow(
            <ListHotels {...props} />,
        );

        expect(wrapper).toMatchSnapshot();
    });
});

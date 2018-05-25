import React from 'react';
import { shallow  } from "enzyme";
import { wrap } from 'module';

import ListHotels from './ListHotels';

describe('ListHotels', () => {
    it('should render self', () => {
        const props = {
            listHotels: [{
                locationName: 'Hurghada, Egypt',
                id: '1',
                label: 'Steigenberger Al Dau Beach Hotel'
            }]
        };
        const wrapper = shallow (
            <ListHotels {...props} />
        );

        expect(wrapper.find('ul')).toHaveLength(1);
        expect(wrapper.find('HotelItem').key()).toEqual('1');
        expect(wrapper.find('HotelItem').props()).toEqual(props.listHotels[0]);
        expect(wrapper.hasClass('listHotels')).toBeTruthy();
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import HotelItem from './HotelItem';

describe('HotelItem', () => {
    it('should render self', () => {
        const props = {
            locationName: 'Hurghada, Egypt',
            id: '1',
            label: 'Steigenberger Al Dau Beach Hotel',
        };
        const wrapper = shallow(
            <HotelItem {...props} />,
        );

        expect(wrapper.hasClass('hotelItem')).toBeTruthy();
        expect(wrapper.find('.hotelItemName').text()).toEqual('Steigenberger Al Dau Beach Hotel');
        expect(wrapper.find('.hotelItemCityName').text()).toEqual('Hurghada, Egypt');
        expect(wrapper.find('.hotelItemLink').props().to).toEqual('/hotel/1');
    });
});

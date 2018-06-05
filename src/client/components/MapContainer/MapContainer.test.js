import React from 'react';
import { shallow  } from "enzyme";

import MapContainer from './MapContainer';

describe('MapContainer', () => {
    it('should render self', () => {
        const props = {
            google: {},
            lat: 12,
            lng: 12,
            locationName: 'Amora hotel',
        }
        const wrapper = shallow (
            <MapContainer {...props} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow  } from "enzyme";

import Header from './Header';

describe('Header', () => {
    it('should render self', () => {
        const wrapper = shallow (
            <Header />
        );

        expect(wrapper.find('NavLink').length).toBe(2);
    });
});

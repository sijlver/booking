import React from 'react';
import Header from './Header';
import { shallow  } from "enzyme";

describe('Header', () => {
    it('should render self', () => {
        const wrapper = shallow (
            <Header />
        );

        expect(wrapper.find('NavLink').length).toBe(2)
    });
});

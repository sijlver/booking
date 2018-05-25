import React from 'react';
import AboutPage from './AboutPage';
import { shallow } from "enzyme";

describe('AboutPage', () => {
    it('should render self', () => {
        const wrapper = shallow(<AboutPage />);

        expect(wrapper.hasClass('aboutPageMainContent')).toBeTruthy();
        expect(wrapper.find('h1').text()).toEqual('About Page');
        expect(wrapper.find('p')).toBeDefined();
    });
});

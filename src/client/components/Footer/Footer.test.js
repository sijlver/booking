import React from 'react';
import Footer from './Footer';
import { shallow } from "enzyme";

describe('Footer', () => {
    it('should render self', () => {
        const wrapper = shallow(<Footer />);
        const pElement = wrapper.find('p');

        expect(pElement.hasClass('footerText')).toBeTruthy();
        expect(pElement.text()).toEqual('hotels information');
    });
});

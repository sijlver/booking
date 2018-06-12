import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
    it('should render self', () => {
        const wrapper = shallow(<Footer />);
        const pElement = wrapper.find('p');

        expect(pElement.hasClass('footerText')).toBeTruthy();
        expect(pElement.text()).toEqual('hotels information');
    });
});

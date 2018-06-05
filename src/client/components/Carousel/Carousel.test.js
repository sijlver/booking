import React from 'react';
import { shallow  } from "enzyme";

import Carousel from './Carousel';

describe('Carousel', () => {
    it('should render self', () => {
        const props = {
            id: '29126',
        };
        const wrapper = shallow (
            <Carousel {...props} />
        );

        expect(wrapper).toMatchSnapshot();
    });
});

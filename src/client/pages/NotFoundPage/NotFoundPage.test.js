import React from 'react';
import { shallow } from "enzyme";

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
    it('should render self', () => {
        const wrapper = shallow(<NotFoundPage />);

        expect(wrapper.text()).toEqual('Not found Page!');
    });
});

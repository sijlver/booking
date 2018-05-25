import React from 'react';
import NotFoundPage from './NotFoundPage';
import { shallow } from "enzyme";

describe('NotFoundPage', () => {
    it('should render self', () => {
        const wrapper = shallow(<NotFoundPage />);

        expect(wrapper.text()).toEqual('Not found Page!');
    });
});

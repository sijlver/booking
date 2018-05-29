import React from 'react';
import { shallow  } from "enzyme";
import jest from 'jest-mock';

import Field from './Field';

describe('Field', () => {
    it('should render self', () => {
        const wrapper = shallow (
            <Field 
                name='searchName'
                value='Moscow'
                onChange={jest.fn()}
            />
        );

        expect(wrapper.prop('name')).toEqual('searchName');
        expect(wrapper.prop('value')).toEqual('Moscow');
        expect(wrapper.prop('onChange')).toBeDefined();
    });
});

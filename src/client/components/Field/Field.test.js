import React from 'react';
import Field from './Field';
import { shallow  } from "enzyme";
import jest from 'jest-mock';

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

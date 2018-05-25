import React from 'react';
import BusyIndicator from './BusyIndicator';
import { mount  } from "enzyme";

describe('BusyIndicator', () => {
    it('should render self', () => {
        const wrapper = mount (
            <BusyIndicator show={true} />
        );

        expect(wrapper.text()).toBe('');
        expect(wrapper.prop('show')).toBeTruthy();
    });
});

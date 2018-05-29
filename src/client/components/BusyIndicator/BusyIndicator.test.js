import React from 'react';
import { mount  } from "enzyme";

import BusyIndicator from './BusyIndicator';

describe('BusyIndicator', () => {
    it('should render self', () => {
        const wrapper = mount (
            <BusyIndicator show={true} />
        );

        expect(wrapper.text()).toBe('');
        expect(wrapper.prop('show')).toBeTruthy();
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import RootNavigation from './RootNavigation';

describe('RootNavigation', () => {
    it('should render self', () => {
        const wrapper = shallow(
            <RootNavigation />,
        );

        expect(wrapper).toMatchSnapshot();
    });
});

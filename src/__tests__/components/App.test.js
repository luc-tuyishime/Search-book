import React from 'react';
import { mount } from '../../../config/enzymeConfig';

import App from '../../App';

describe('<Card /> test card component', () => {
    test("render", () => {
        const wrapper = mount(<App />);
        expect(wrapper).toHaveLength(1);
    })
});
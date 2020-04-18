import React from 'react';
import { mount } from '../../config/enzymeConfig';

import App from '../App';


describe('<App /> test effect hooks', () => {
    const container = mount(<App />);

    it('should have the login enabled with valid values', () => {
        container.find('input[type="search"]').simulate('change', {
            target: {
                value: 'validpassword',
            },
        });
    });
});
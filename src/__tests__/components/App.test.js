import React from 'react';
import { mount } from '../../../config/enzymeConfig';

import App from '../../App';


describe('<App /> test effect hooks', () => {
    const container = mount(<App />);
    jest.useFakeTimers();

    it('should have the App component rendered', () => {
        container.find('input[type="search"]').simulate('change', {
            target: {
                value: 'php book',
            },
        });

    });

    it('Test timeOut', () => {
        jest.runAllTimers();
    })
});
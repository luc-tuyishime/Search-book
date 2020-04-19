import React from 'react';
import { shallow } from '../../../config/enzymeConfig';

import ViewBook from '../../page/ViewBook';

const props = {
    location: {
        state: {
            book: {
                volumeInfo: {
                    imageLinks: 'imageLInk',
                    authors: 'bible',
                    publisher: 'publisher'
                }
            }
        }
    }
}

describe('<Card /> test card componet', () => {
    test("render", () => {
        const wrapper = shallow(<ViewBook {...props} />);
        expect(wrapper).toHaveLength(1);
    })
});
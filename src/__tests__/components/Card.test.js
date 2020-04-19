import React from 'react';
import { shallow } from '../../../config/enzymeConfig';

import { Card } from '../../components/card/card.component';

const props = {
    book: {
        volumeInfo: {
            imageLinks: 'imageLInk',
            authors: 'bible',
            publisher: 'publisher'
        }
    }
}

describe('<Card /> test card componet', () => {
    test("render", () => {
        const wrapper = shallow(<Card {...props} />);
        expect(wrapper).toHaveLength(1);
    })
});
import React from 'react';
import { shallow } from '../../../config/enzymeConfig';

import { CardList } from '../../components/card-list/card-list.component';

const result = [
    {
        id: 1,
        imageLinks: 'imageLInk',
        authors: 'bible',
        publisher: 'publisher'
    },
    {
        id: 2,
        imageLinks: 'imageLInk',
        authors: 'bible',
        publisher: 'publisher'
    },

]

describe('<CardList /> test card-list componet', () => {
    test("render", () => {
        const wrapper = shallow(<CardList result={result} />);
        expect(wrapper).toHaveLength(1);
    })
});
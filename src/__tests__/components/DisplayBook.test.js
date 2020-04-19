import React from 'react';
import { shallow } from '../../../config/enzymeConfig';

import { DisplayBook } from '../../helper/displayBook';

let result = [
    {
        volumeInfo: {
            title: 'php',
        },
    },
    {
        volumeInfo: {
            title: 'javascript',
        },
    },
]

const book = 'javascript'


describe('<DisplayBook /> test componet', () => {

    test("render", () => {
        expect(DisplayBook(result, book));
    })
});
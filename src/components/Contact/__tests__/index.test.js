import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders',() => {
        render(<Contact></Contact>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact></Contact>);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('h1 visibility', () => {
    it('is visible', () => {
        const { getByTestId } = render(<Contact></Contact>);
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    })
})

describe('button is visible', () => {
    it('is visible', () => {
        const { getByTestId } = render(<Contact></Contact>);
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })
})
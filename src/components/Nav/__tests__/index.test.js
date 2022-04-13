import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import Nav component to test
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// test emoji visibility
describe('Emoji visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange
        // query element by its aria-label value
        const { getByLabelText } = render(<Nav />);
        // use a custom matcher to compate expected value to one received by our query
        expect(getByLabelText('camera')).toHaveTextContent('📸');
        //Assert

    })
})

// chech to see if our links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
        //Arrange
        const { getByTestId } = render(<Nav />)
        //Assert the valid outcomes using the matcher 'toHaveTextContent
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})
// we need react to enable the components to function properly
import React from 'react';
// import functions from React Testing Library
import { render, cleanup } from '@testing-library/react';
// import the extend-expect library from the jest-dom package
import '@testing-library/jest-dom/extend-expect'
// import About component
import About from '..';
// return a snapshot of the About component
const { asFragment } = render(<About />);

//ensure that after each test, there is no leftover memory data to affect results
afterEach(cleanup);

//use desribe function to declare the component we are testing
describe(`About component`, () => {
    // First test 
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        // test and compare whether the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})




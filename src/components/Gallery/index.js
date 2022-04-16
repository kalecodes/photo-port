import React from 'react';
// import helper funciton to capitalize first letter in name
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from './PhotoList';

function Gallery({ currentCategory }) {
    // get name and description from object
    const { name, description } = currentCategory;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList/>
        </section>
    );
}

export default Gallery;
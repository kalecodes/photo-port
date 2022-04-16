import React from 'react';
// import helper funciton to capitalize first letter in name
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

function Gallery({ props }) {
    // get name and description from object
    const { currentCategory } = props;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;
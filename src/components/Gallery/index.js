import React from 'react';
// import helper funciton to capitalize first letter in name
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
    // get name and description from object
    const currentCategory = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects'
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img
                    src={photo}
                    alt='Commercial Example'
                    className='img-thumbnail mx-1'
                />
            </div>
        </section>
    );
}

export default Gallery;
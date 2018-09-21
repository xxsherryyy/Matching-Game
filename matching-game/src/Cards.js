import React from 'react';
import image from './images/arya-stark.jpeg';
import image from './images/daenerys-targaryen.jpeg';
import image from './images/jamie-lannister.jpeg';
import image from './images/john-snow.jpeg';
import image from './images/sansa-stark.jpeg';
import image from './images/tyrion-lannister.jpeg';

const Cards = () => {
    // import all images
    // store on an array
    // use .map() to return an array  of <img /> to display in you cards component
    return <img src={image} />
};

export default Cards; 
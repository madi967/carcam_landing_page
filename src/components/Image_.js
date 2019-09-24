import React from 'react';
import ImageSlider from 'ac-react-simple-image-slider';
import chauffeur from './images/chauffeur.jpg';
import mariage from  './images/mariage.jpg';
import luxe from './images/luxe.jpg';
import volant from './images/volant.jpg';
import voiture from './images/voiture.jpg';
import ville from './images/ville.jpg'

const imageData = [
    {
        src:mariage,
        title:'Voiture de mariage',
    },
    {
        src : luxe,
        title: 'voiture de luxe',
    },
    {
       src:chauffeur,
        title:'chauffeur',
    },
    {
        src:volant,
        title:' volant',
    },
    {
        src:voiture,
        title:'Voiture',
    },
    {
        src:ville,
        title:'Ville',
    },
];
function Image_() {
    return (
       <ImageSlider   data={imageData}/>
    );
  }
  
  export default Image_;
  
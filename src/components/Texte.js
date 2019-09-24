import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


 

const content=[	
  {
		title: 'Mieux qu\'une auto de location',
		description:
		'Réservez des voitures uniques auprès d’hôtes de confiance à travers le Cameroun',
		button: 'En savoire plus',
  },
  {
    title: 'Oubliez le comptoir de location',
    description:
    'camcar La plus grande plateforme d’autopartage du Cameroun',
    button: 'S\'informer',
  },
  {
    title: 'Partagez votre voiture et gagnez de l’argent',
    description:
    'Allégez le fardeau de vos paiements automobiles mensuels ou augmentez simplement vos revenus en partageant votre voiture sur camcar lorsque vous ne l’utilisez pas.',
    button: 'Nous contacter',	
  }
];
  function Texte() {
    return (
      <Slider autoplay={5000/*temps de transition*/}  className="slider">
        {content.map((article, index) => 
          <div key={index}
          className="slider-content">
          <h2>{article.title}</h2>
          <div className="inner">{article.description}</div>
          <a href="#login" className="button-text"><button>{article.button}</button></a>
           </div>)}
      </Slider>
    );
  }
  export default Texte;
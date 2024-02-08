import React from 'react';

export default function Logo() {
  const images = [
    { id: 1, image: 'moredrobe_logo.jpg', description: 'Logo' },
    { id: 2, image: './prettiest_on_the_planet.jpg', description: 'Cute little Planet' },
    { id: 3, image: './spaceship.jpg', description: 'Spaceship' }
  ];

  return (
    <div>
      <h2>
        by Alex Bain
      </h2>
      <img src="moredrobe_logo.jpg" alt="Logo" style={{ width: '40px', height: '40px' }} />
      {/* Assuming the logo image is named "moredrobe_logo.jpg" and you want to display it */}
      <div>
        {images.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.description} style={{ width: '40px', height: '40px' }} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

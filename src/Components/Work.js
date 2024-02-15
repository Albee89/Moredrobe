import React from 'react';

const Work = () => {
  const images = [
    'path/to/design.png',
    'path/to/form.png',
    'path/to/Overview.png',
    'path/to/SC.png',
    'path/to/plan.png',
    'path/to/wdesign.png',
    'path/to/WebsitePlan.png',
    'path/to/1.png',
    'path/to/2.png',
    'path/to/3.png',
    'path/to/4.png'
  ];

  return (
    <div>
      <h1>My Work</h1>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Work Image ${index + 1}`} style={styles.image} />
      ))}
    </div>
  );
};

const styles = {
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
  },
};

export default Work;

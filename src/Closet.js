import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentTop, setCurrentTop] = useState(0);
  const [currentBottom, setCurrentBottom] = useState(0);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [popUpText, setPopUpText] = useState('');

  const topImages = ['./images/1.png', './images/2.png', './images/b&w.png', './pictures/greenFaux.png', './pictures/leatherJacket.png'];
  const bottomImages = ['./images/Overvieww.png', './pictures/jacket.png', './images/WebsitePlan.png', './pictures/cargoPants.png', './pictures/twoPiece.png'];

  const clickSound = new Audio('path/to/lclick-13694.mp3');
  const wrongSound = new Audio('path/to/mixkit-wrong-long-buzzer-954.wav');
  const correctSound = new Audio('path/to/mixkit-winning-chimes-2015.wav');

  useEffect(() => {
    // Initialize audio objects here
    clickSound.load();
    wrongSound.load();
    correctSound.load();
  }, []);

  const carouselBtnHandler = (carousel, isTop, isNext) => {
    const currentIndex = isTop ? currentTop : currentBottom;
    const nextIndex = (currentIndex + (isNext ? 1 : 3)) % 4;

    carousel[currentIndex].classList.add('noDisplay');
    carousel[nextIndex].classList.remove('noDisplay');

    if (isTop) {
      setCurrentTop(nextIndex);
    } else {
      setCurrentBottom(nextIndex);
    }

    clickSound.play();
    clickSound.currentTime = 0;
  };

  const dressMeBtnHandler = () => {
    console.log("Today is a great day for you!");
    // You can add more actions or display a message on the page here.

    // Example: Display an alert
    alert("Today is a great day for you!");

    // Your existing logic for pop-up visibility
    setPopUpVisible(true);
    setTimeout(() => setPopUpVisible(false), 1000);
  };

  return (
    <div>
      {/* Render your carousels and other UI components here */}
      <button onClick={() => carouselBtnHandler(topImages, true, true)}>
        Next Top
      </button>
      <button onClick={() => carouselBtnHandler(topImages, true, false)}>
        Prev Top
      </button>
      <button onClick={() => carouselBtnHandler(bottomImages, false, true)}>
        Next Bottom
      </button>
      <button onClick={() => carouselBtnHandler(bottomImages, false, false)}>
        Prev Bottom
      </button>
	  <button onClick={dressMeBtnHandler}>Boop Me</button>
	  {popUpVisible && <div>{popUpText}</div>}
</div>
);
};

     
	
export default App;

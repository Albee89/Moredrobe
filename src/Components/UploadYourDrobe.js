import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import BackgroundRemover from './BackgroundRemover'; // Assuming this is the correct path

function OutfitDisplay({ topImage, bottomImage }) {
  return (
    <div>
      <h2>Your Outfit</h2>
      <div className="outfit-display">
        <img src={topImage} alt="Top" />
        <img src={bottomImage} alt="Bottom" />
      </div>
    </div>
  );
}

function UploadYourDrobe() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [topImages, setTopImages] = useState([]);
  const [bottomImages, setBottomImages] = useState([]);
  const [currentTop, setCurrentTop] = useState(0);

  // Use the useNavigate hook to get access to the navigation function
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        // Assuming BackgroundRemover is an asynchronous function that returns a promise
        const { top, bottom } = await BackgroundRemover(selectedFile);
        
        setTopImages([...topImages, top]);
        setBottomImages([...bottomImages, bottom]);

        // Update currentTop based on the index of the newly added image
        setCurrentTop(topImages.length);
        
        console.log('Uploading file:', selectedFile);
      } catch (error) {
        console.error('Background removal failed:', error);
      }
    }
  };

  const dressMe = () => {
    // Redirect to the OutfitDisplay component with selected outfit URLs
    // Use the navigate function to navigate to a new route
    navigate('/outfit');
  };

  return (
    <Router>
      <div>
        <button onClick={dressMe} className="bigBtn" id="dressMeBtn">
          DRESS ME
        </button>

        <Route path="/outfit">
          <OutfitDisplay topImage={topImages[currentTop]} bottomImage={bottomImages[currentTop]} />
        </Route>

        <div>
          <Route>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default UploadYourDrobe;
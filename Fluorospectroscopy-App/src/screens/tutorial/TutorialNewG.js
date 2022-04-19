import React, { useRef } from 'react';
import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import ImageA from '../../resources/tutorial/image6.svg'
import ImageB from '../../resources/tutorial/image7.svg'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Popup from 'reactjs-popup';
import Correct from '../../resources/sounds/correct-6033.mp3'
import Incorrect from '../../resources/sounds/wrong-buzzer-6268.mp3'

const TutorialNewG = () => {
  var correct_audio = new Audio(Correct);
  correct_audio.volume = 0.3;
  const correctRef = useRef();
  const openCorrectPopup = () => {
    correct_audio.play();
    correctRef.current.open();
  }

  var incorrect_audio = new Audio(Incorrect);
  incorrect_audio.volume = 0.05;
  const incorrectRef = useRef();
  const openIncorrectPopup = () => {
    incorrect_audio.play();
    incorrectRef.current.open();
  }
  const closeIncorrectPopup = () => incorrectRef.current.close();

  return (
    <>
      <header>
        <Paper className="paper-header">
          <div className="title-and-buttons">
            <div className="header-logo">
              <img src={TechGold} alt="TechGold" />
            </div>

            <div className="header-title">
              <Typography className= "general-text" variant="h2" color="primary">
                Fluorescence Spectroscopy Tutorial
              </Typography>
            </div>

            <div className="header-buttons">
              <Link to="/">
                <button className="home-button"></button>
              </Link>
            </div>
          </div>

          <LinearProgress color="secondary" variant="determinate" value={(100.0/13) * 6} />
        </Paper>
      </header>

      <div className="tutorial-body">
        <Typography className= "general-text" variant="h3" color="secondary">
          Bandwidths for excitation and emission wavelengths can be changed independently!
        </Typography>

        <Typography className= "general-text" variant="h3" color="secondary">
          Speculate. What effect would increasing the excitation bandwidth have on the resulting Trp fluorescence spectrum?
        </Typography>

        <div className="side-by-side-container-quiz">
          <div className="general-text-quiz-div">
            <Typography onClick={openCorrectPopup} className= "general-text-quiz" variant="h4">
              Increase intensity
            </Typography>
          </div>

          <div className="general-text-quiz-div">
            <Typography onClick={openIncorrectPopup} className= "general-text-quiz" variant="h4">
              Decrease intensity
            </Typography>
          </div>

          <div className="general-text-quiz-div">
            <Typography onClick={openIncorrectPopup} className= "general-text-quiz" variant="h4">
              No change
            </Typography>
          </div>
        </div>
      </div>

      <Popup ref={correctRef} modal>
        <div className="popup-correct">
          <Typography variant="h4" color="secondary">
            That's correct! Take a look at these Trp measurements:
          </Typography>
          <div className="side-by-side-container">
            <div className="vertical-container">
              <Paper className="paper-img1" elevation={10}>
                <img className="img2" src={ImageA} alt=""/>
              </Paper>
              <Typography className= "general-text" variant="h6" style={{ fontWeight: 600 }}>
                Excitation Bandwidth = 2.5nm
              </Typography>
            </div>
            <div className="vertical-container">
              <Paper className="paper-img1" elevation={10}>
                <img className="img2" src={ImageB} alt=""/>
              </Paper>
              <Typography className= "general-text" variant="h6" style={{ fontWeight: 600 }}>
                Excitation/Emission Bandwidth = 5nm
              </Typography>
            </div>
          </div>
          <Box display="flex" justifyContent="right" m={2}>
            <Button variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/tutorial/7">
              Next
            </Button>
          </Box>
        </div>
      </Popup>

      <Popup ref={incorrectRef} modal>
        <div className="popup-correct">
          <button className="popup-close" onClick={closeIncorrectPopup}>
            &times;
          </button>
          <Typography variant="h4" color="secondary">
            Not quite! Think about the previous section of the tutorial.
          </Typography>
        </div>
      </Popup>
    </>
  );
}

export default TutorialNewG;
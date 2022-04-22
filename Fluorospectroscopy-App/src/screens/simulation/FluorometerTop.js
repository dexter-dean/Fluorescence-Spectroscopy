import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';

import FluorometerOpenEmpty from '../../resources/simulation/top - open.svg'
import FluorometerOpenNotEmpty from '../../resources/simulation/top - open_cuvette.svg'
import FluorometerClosedEmpty from '../../resources/simulation/top - closed.svg'

import React, { useRef } from 'react';
import Popup from 'reactjs-popup';

const FluorometerTop = () => {
  const cuvetteSelectionRef = useRef();
  const openCuvetteSelectionPopup = () => {
    cuvetteSelectionRef.current.open();
  }

  var fluorometer_image;

  const updateState = () => {
    console.log("UPDATE");
    if (sessionStorage.getItem("bIsOpen") === "true")
    {
      if (sessionStorage.getItem("bHasCuvette") === "true")
      {
        fluorometer_image = FluorometerOpenNotEmpty;
      }
      else
      {
        fluorometer_image = FluorometerOpenEmpty;
      }
    }
    else
    {
      fluorometer_image = FluorometerClosedEmpty;
    }
  }

  updateState();

  const addCuvette = () => {
    sessionStorage.setItem("bHasCuvette", "true");
    updateState();
    cuvetteSelectionRef.current.close();
  }

  const removeCuvette = () => {
    sessionStorage.setItem("bHasCuvette", "false");
    updateState();
  }

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
                Fluorescense Spectroscopy Simulation
              </Typography>
            </div>

            <div className="header-buttons">
              <Link to="/">
                <button className="home-button"></button>
              </Link>
            </div>
          </div>
        </Paper>
      </header>

      <Box display="flex" m={2}>
        <Button variant="contained" endIcon={<NavigateNext/>} component={Link} to="/simulation">
          Return to Table
        </Button>
      </Box>

      <div className='fluorometer-body'>
        <div className='center'>
          <img className="FluorometerOpenEmpty" src={fluorometer_image} alt="FluorometerOpenEmpty" id="imgClickAndChange" width={1000}/>
        </div>
        <Box display="flex" justifyContent="center" m={0} >
          <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/side">
            Side
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/front">
            Front
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary" onClick={openCuvetteSelectionPopup}>
            Chemicals
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary" onClick={removeCuvette}>
            Remove Cuvette
          </Button>
          <Button className="cuvette-Select" variant="contained" color="primary">
            Open/Close Hood
          </Button>
        </Box>
      </div>

      <Popup ref={cuvetteSelectionRef} modal>
        <div className="popup-correct">
          <div className="side-by-side-container-quiz">
            <div onClick={addCuvette}>
              <Box className="cuvette-button" margin={2}>
                <Typography align='center' variant="h1">
                  A
                </Typography>
              </Box>
            </div>
            <div onClick={addCuvette}>
              <Box className="cuvette-button" margin={2}>
                <Typography align='center' variant="h1">
                  B
                </Typography>
              </Box>
            </div>
            <div onClick={addCuvette}>
              <Box className="cuvette-button" margin={2}>
                <Typography align='center' variant="h1">
                  C
                </Typography>
              </Box>
            </div>
          </div>
        </div>
      </Popup>

    </>
  );
}

export default FluorometerTop;
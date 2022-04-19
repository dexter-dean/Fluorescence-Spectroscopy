import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import FluorometerSideClosed from '../../resources/simulation/Fluorometer-SideView.png'
import FluorometerSideClosedOn from '../../resources/simulation/Fluorometer-SideView-On.png'
import FluorometerSideClosedOff from '../../resources/simulation/Fluorometer-SideView-Off.png'

const FluorometerSide = () => {
  var fluorometer_image;
  if (sessionStorage.getItem("bIsActivated") === "true") {
    fluorometer_image = FluorometerSideClosedOn;
  } else {
    fluorometer_image = FluorometerSideClosedOff;
  }
  const toggleFluorometer = () => {
    if (sessionStorage.getItem("bIsActivated") === "true")
    {
      sessionStorage.setItem("bIsActivated", "false");
      document.getElementById("imgClickAndChange").src = FluorometerSideClosedOff;
    }
    else
    {
      sessionStorage.setItem("bIsActivated", "true");
      document.getElementById("imgClickAndChange").src = FluorometerSideClosedOn;
    }
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
                Fluorescence Spectroscopy Simulation
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
          <div className='side-by-side-container'>
            <div className='button-spacing'>
              <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/top">
                Top
              </Button>
            </div>
            <div className='button-spacing'>
              <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/front">
                Front
              </Button>
            </div>
            <div className='button-spacing'>
              <Button className="cuvette-Select" variant="contained" color="primary" onClick={toggleFluorometer}>
                Toggle Fluorometer
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default FluorometerSide;
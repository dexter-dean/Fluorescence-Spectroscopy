import { Button, Typography, Box, Paper, LinearProgress } from '@mui/material';
import TechGold from '../../resources/GeorgiaTech_TechGold.png'
import '../../styles/tutorial_styles.css';
import { Link } from 'react-router-dom';
import NavigateNext from '@mui/icons-material/NavigateNext';
import FluorometerFrontClosed from '../../resources/simulation/Fluorometer-FrontView-Closed.png'
import FluorometerFrontOpen from '../../resources/simulation/Fluorometer-FrontView-Open.png'

const FluorometerFront = () => {
  var fluorometer_image;
  if (sessionStorage.getItem("bIsOpen") != null)
  {
    if (sessionStorage.getItem("bIsOpen") === "true")
    {
      fluorometer_image = FluorometerFrontOpen;
    }
    else
    {
      fluorometer_image = FluorometerFrontClosed;
    }
  }
  else
  {
    fluorometer_image = FluorometerFrontClosed;
  }

  const openFluorometer = () => {
    if (sessionStorage.getItem("bIsOpen") === "true")
    {
      document.getElementById("fluorometer-body").src = FluorometerFrontClosed;
      sessionStorage.setItem("bIsOpen", "false");
    }
    else
    {
      document.getElementById("fluorometer-body").src = FluorometerFrontOpen;
      sessionStorage.setItem("bIsOpen", "true");
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
          <img className="FluorometerOpenEmpty" src={fluorometer_image} alt="FluorometerOpenEmpty" id="fluorometer-body" width={1000}/>
        </div>
        <Box display="flex" justifyContent="center" m={0} >
          <div className='side-by-side-container'>
            <div className='button-spacing'>
              <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/side">
                Side
              </Button>
            </div>
            <div className='button-spacing'>
              <Button className="cuvette-Select" variant="contained" color="primary" endIcon={<NavigateNext/>} component={Link} to="/simulation/fluorometer/top">
                Top
              </Button>
            </div>
            <div className='button-spacing'>
              <Button className="cuvette-Select" variant="contained" color="primary" onClick={openFluorometer}>
                Open/Close Hood
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default FluorometerFront;
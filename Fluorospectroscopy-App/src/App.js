import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './screens/Menu'

import Tutorial from './screens/Tutorial'
import TutorialNewA from './screens/tutorial/TutorialNewA'
import TutorialNewB from './screens/tutorial/TutorialNewB'
import TutorialNewC from './screens/tutorial/TutorialNewC'
import TutorialNewD from './screens/tutorial/TutorialNewD'
import TutorialNewE from './screens/tutorial/TutorialNewE'
import TutorialNewF from './screens/tutorial/TutorialNewF'
import TutorialNewG from './screens/tutorial/TutorialNewG'
import TutorialNewH from './screens/tutorial/TutorialNewH'
import TutorialNewI from './screens/tutorial/TutorialNewI'
import TutorialNewJ from './screens/tutorial/TutorialNewJ'
import TutorialNewK from './screens/tutorial/TutorialNewK'
import TutorialNewL from './screens/tutorial/TutorialNewL'
import TutorialNewM from './screens/tutorial/TutorialNewM'
import TutorialNewN from './screens/tutorial/TutorialNewN'

import TopScreen from './screens/simulation/TopScreen'

import FluorometerTop from './screens/simulation/FluorometerTop'
import FluorometerSide from './screens/simulation/FluorometerSide'
import FluorometerFront from './screens/simulation/FluorometerFront'

import ComputerScreen from './screens/simulation/ComputerScreen'

import Lab from './screens/Lab'
import Settings from './screens/Settings'
import ScrollToTop from './ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Menu />}/>

        <Route path="/tutorial" element={<TutorialNewA />}/>
        <Route path="/tutorial/1" element={<TutorialNewB />}/>
        <Route path="/tutorial/2" element={<TutorialNewC />}/>
        <Route path="/tutorial/3" element={<TutorialNewD />}/>
        <Route path="/tutorial/4" element={<TutorialNewE />}/>
        <Route path="/tutorial/5" element={<TutorialNewF />}/>
        <Route path="/tutorial/6" element={<TutorialNewG />}/>
        <Route path="/tutorial/7" element={<TutorialNewH />}/>
        <Route path="/tutorial/8" element={<TutorialNewI />}/>
        <Route path="/tutorial/9" element={<TutorialNewJ />}/>
        <Route path="/tutorial/10" element={<TutorialNewK />}/>
        <Route path="/tutorial/11" element={<TutorialNewL />}/>
        <Route path="/tutorial/12" element={<TutorialNewM />}/>
        <Route path="/tutorial/13" element={<TutorialNewN />}/>

        <Route path="/simulation" element={<TopScreen />}/>
          
        <Route path="/simulation/fluorometer/front" element={<FluorometerFront />}/>
        <Route path="/simulation/fluorometer/side" element={<FluorometerSide />}/>
        <Route path="/simulation/fluorometer/top" element={<FluorometerTop />}/>

        <Route path="/simulation/computer" element={<ComputerScreen />}/>

        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </Router>
  );
}

export default App;

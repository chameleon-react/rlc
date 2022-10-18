import { useEffect } from 'react';

import axios from 'axios'
import backendIP from '../../backendIP';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen3 from './components/Screen3';




function Home() {
  useEffect(() => {
    axios.post(`${backendIP}analatics`)
  }, [])

  return (
    <div className="home w-full overflow-y-hidden">
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Footer />
    </div>
  );
}

export default Home;





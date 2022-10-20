import { useEffect } from 'react';

import axios from 'axios'
import backendIP from '../../backendIP';
import Footer from '../common/Footer';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import MobileFooter from '../filter/mobile/components/Footer'




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
      <div className="block lg:hidden">
      <MobileFooter />
      </div>
      <div className="hidden lg:block">

      <Footer />
      </div>
    </div>
  );
}

export default Home;





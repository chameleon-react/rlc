import { useEffect } from 'react';

import axios from 'axios'
import backendIP from '../../backendIP';
import Footer from '../common/Footer';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import MobileFooter from '../filter/mobile/components/Footer'
import { useNavigate } from 'react-router-dom';




function Home() {
  useEffect(() => {
    axios.post(`${backendIP}analatics`)
  }, [])
const navigate = useNavigate()
  return (
    <div className="home w-full overflow-y-hidden">
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <div className="block lg:hidden">
        <div className="fixed  -bottom-2 z-50 w-full h-[80px]">
          <img src="/mobile/filter/footer.png" className="w-full" alt="" />
          <img src="/mobile/filter/home.png" className='cursor-pointer absolute top-[25px] left-[70px]' alt=""  />
          <div className="h-[63px] w-[63px] bg-[#AE0C37] rounded-full absolute z-50 -top-5 inset-x-0 mx-auto flex justify-center items-center" onClick={() => navigate('/filter')}>
            
          <img src="/mobile/filter/search.png" className='cursor-pointer' alt=""/>
          </div>
          <img src="/mobile/filter/profile.png" className='cursor-pointer absolute top-[25px] right-[70px]' onClick={() => navigate('/auth')} alt="" />
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}

export default Home;





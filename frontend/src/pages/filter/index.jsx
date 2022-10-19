import React, { useState } from 'react'
import { useEffect } from 'react'
import NavBar from '../common/NavBar'
import axios from 'axios'
import backendIP from '../../backendIP'
import Platinum from './components/Platinum'
import Gold from './components/Gold'
import Silver from './components/Silver'
import None from './components/None'
import Footer from '../common/Footer'
import SearchBar, { Languages, Nationality } from './components/SearchBar'
import LoginModal from '../profile/components/LoginModal'
import shuffle from './shuffle'
import { useSelector } from 'react-redux'
import FilterMobile from './mobile'


function Filter() {
  const { region } = useSelector(state => state.ads)
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({})
  const fetchData = () => {
    if (region) {
      axios.post(`${backendIP}filter`, { ...filter, region }).then(res => {
        setData(shuffle(res.data))
      })
    } else {
      axios.post(`${backendIP}filter`, { ...filter }).then(res => {
        setData(shuffle(res.data))
      })
    }
  }
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])
  const [page, setPage] = useState(1)
  const [showSearch, setShowSearch] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      <div className="filter hidden lg:block">
        {
          !isLogin && <LoginModal setIsLogin={setIsLogin} />
        }
        <NavBar />
        <div className="min-h-screen w-full pb-5 " style={{ background: 'linear-gradient(to bottom, #701013, #5c0c12, #48090f, #350709, #250000)' }}>
          <div className="ads w-[1244px] h-[144px] mx-auto bg-white rounded-t-[20px]">

          </div>
          <SearchBar fetchData={fetchData} setFilter={setFilter} filter={filter} setShowSearch={setShowSearch} />
          <div className="max-w-[1440px] mx-auto">
            <div className={`platinum ${page === 1 ? 'flex' : 'hidden'} justify-center flex-wrap gap-2 mt-6`}>
              {
                data.map((e, index) => e?.membershipType === 'Platinum' && <Platinum setIsLogin={setIsLogin} key={index} id={e.id} adsTitle={e.adsTitle} profilePhoto={e.profilePhoto} introduction={e.introduction} age={e.appearance.age} />)
              }
            </div>
            <div className={`gold ${page === 1 ? 'flex' : 'hidden'} flex justify-center flex-wrap gap-2 mt-6`}>
              {
                data.map((e, index) => e?.membershipType === 'Gold' && <Gold setIsLogin={setIsLogin} key={index} id={e.id} adsTitle={e.adsTitle} profilePhoto={e.profilePhoto} introduction={e.introduction} age={e.appearance.age} />)
              }
            </div>
            <div className={`silver ${page === 1 ? 'flex' : 'hidden'} flex justify-center flex-wrap gap-2 mt-6`}>
              {
                data.map((e, index) => e?.membershipType === 'Silver' && <Silver setIsLogin={setIsLogin} key={index} id={e.id} adsTitle={e.adsTitle} profilePhoto={e.profilePhoto} introduction={e.introduction} age={e.appearance.age} />)
              }

            </div>
            <div className="none flex justify-center max-w-[1440px] mx-auto  flex-wrap gap-2 mt-6">

              {
                page === 1 && data.slice(0, 17).map((e, index) => e?.membershipType === 'none' && <None setIsLogin={setIsLogin} key={index} id={e.id} adsTitle={e.adsTitle} profilePhoto={e.profilePhoto} introduction={e.introduction} age={e.appearance.age} />)
              }

              {
                page !== 1 && data.slice((page - 1) * 33, page * 33).map((e, index) => e?.membershipType === 'none' && <None setIsLogin={setIsLogin} key={index} id={e.id} adsTitle={e.adsTitle} profilePhoto={e.profilePhoto} introduction={e.introduction} age={e.appearance.age} />)
              }
            </div>
          </div>
          <div className="parrent relative mt-[40px] w-[360px] h-[51px] mx-auto">

            <div className="bg-[#990F02] mx-auto h-full w-full  rounded-3xl  overflow-hidden blur-sm   absolute inset-x-0 "></div>
            <div className="pagination bg-[#990F02] rounded-3xl  h-full w-full  flex justify-center items-center gap-3  mx-auto absolute inset-x-0 ">
              <img src="/image/filter/left.png" className='w-5 h-5 cursor-pointer' alt="" onClick={() => page !== 1 && setPage(page - 1)} />
              <PaginationButton page={page} setPage={setPage} pageNo={1} />
              <PaginationButton page={page} setPage={setPage} pageNo={2} />
              <PaginationButton page={page} setPage={setPage} pageNo={3} />
              <PaginationButton page={page} setPage={setPage} pageNo={4} />
              <PaginationButton page={page} setPage={setPage} pageNo={5} />
              <PaginationButton page={page} setPage={setPage} pageNo={6} />
              <img src="/image/filter/right.png" className='w-5 h-5 cursor-pointer' alt="" onClick={() => page !== 7 && setPage(page + 1)} />
            </div>
          </div>
        </div>
        {
          showSearch && <Search setShowSearch={setShowSearch} />
        }
        <Footer />
      </div>
      <div className="block lg:hidden">
        <FilterMobile />
      </div>
    </>
  )
}

export default Filter

const PaginationButton = ({ page, pageNo, setPage }) => {
  return (

    <button className={`${page === pageNo ? 'bg-[#FB0202] text-white' : 'bg-white text-black'} w-[29px] h-[29px] rounded-full font-medium duration-500 blur-none z-50`} onClick={() => { setPage(pageNo) }}>{pageNo}</button>
  )
}


const Search = ({ setShowSearch }) => {
  return (
    <div className="fixed w-[960px] h-[500px] inset-0 m-auto bg-[#0B0B0B] z-50 rounded-lg px-[15px]">
      <div className="w-full h-[80px] border-b border-white flex items-center justify-between px-5">
        <span className='text-2xl font-medium text-white'>Advanced Search</span>
        <span className='text-2xl font-medium text-white' onClick={() => { setShowSearch(false) }}>X</span>
      </div>
      <div className="w-full min-h-[292px] flex flex-wrap mt-5">
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Ads Title</h1>
          <input className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Stacy' />
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Location</h1>
          <input className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='DownTown' />
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Height</h1>
          <div className="w-full flex justify-between gap-3">
            <input className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='150' />
            <input className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='170' />
          </div>
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Weight in KG</h1>
          <div className="w-full flex justify-between gap-3">
            <input className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='40' />
            <input className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='65' />
          </div>
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Nationality</h1>
          <select className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='UAE' >
            <Nationality />
          </select>
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Languages</h1>
          <select className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='English' >
            <Languages />
          </select>
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Age</h1>
          <div className="w-full flex justify-between gap-3">
            <input className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='20' />
            <input className='bg-white rounded w-1/2 h-[34px] pl-2' type="number" name="" id="" placeholder='30' />
          </div>
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Eye Color</h1>
          <select className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Brown' >
            <option value="Brown">Brown</option>
            <option value="Blue">Blue</option>
            <option value="Hazel">Hazel</option>
            <option value="Amber">Amber</option>
            <option value="Green">Green</option>
            <option value="Gray">Gray</option>
          </select>
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Region</h1>
          <input className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Dubai' />

        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Service</h1>
          <input className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Party' />
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Hair Color</h1>
          <select className='bg-white rounded w-full h-[34px] pl-3' type="text" name="" id="" placeholder='Black' >
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="Blond">Blond</option>
            <option value="White/Gray">White/Gray</option>
            <option value="Red">Red</option>
          </select>
        </div>
        <div className="w-[232px] h-[86px] px-[15px]">
          <h1 className='text-lg text-white '>Measurement</h1>
          <div className="w-full flex justify-between gap-3">
            <input className='bg-white rounded w-1/3 h-[34px] pl-2' type="number" name="" id="" placeholder='90' />
            <input className='bg-white rounded w-1/3 h-[34px] pl-2' type="number" name="" id="" placeholder='80' />
            <input className='bg-white rounded w-1/3 h-[34px] pl-2' type="number" name="" id="" placeholder='85' />
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100%-80px-292px)] flex justify-end  items-center">
        <button className='w-[129px] h-[46px] bg-[#f4b827] text-[#333333] rounded-xl text-lg font-medium' onClick={() => { setShowSearch(false) }}>Search</button>
      </div>
    </div>
  )
}









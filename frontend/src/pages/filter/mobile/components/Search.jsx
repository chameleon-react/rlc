import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../../../../redux/slice/adsSlice';
import region from '../../../common/region';

const Search = ({ searchbar,fetchData,setFilter,filter }) => {
    const [hair, setHair] = useState('Black')
    const [eye, setEye] = useState('Brown')
    const dispatch = useDispatch()
    const [price, setPrice] = useState([3900,5500])
    
    const priceChanger = (event, newValue, activeThumb)=>{
        if (!Array.isArray(newValue)) {
            return;
          }
      
          if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - 1000), price[1]]);
          } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + 1000)]);
          }
    }
    return (
        searchbar && <div className={`${searchbar && 'backdrop-blur-md'} h-screen fixed bottom-0 w-full duration-200 delay-75 z-[45]`}>

            <div className={`${searchbar ? 'border bg-white' : 'h-0 border-0'}  fixed duration-500 bottom-0 w-full rounded-t-[30px] z-[45]  overflow-hidden  pb-[100px] p-[30px] blur-none`}>
                <div className="w-full flex justify-between">
                    <span>Price Range</span>
                    <select name="" id="" className='outline-none bg-transparent'>
                        <option value="">InCall</option>
                        <option value="">OutCall</option>
                    </select>
                </div>
                <div className="text-red-600">
                    <Slider
                        min={900}
                        max={10000}
                        step={500}
                        value={price}
                        onChange={priceChanger}
                        valueLabelDisplay={'on'}
                        disableSwap
                    />
                </div>
                <div className="w-full flex justify-between ">
                    <select className='w-[138px] h-[22px] rounded-xl border outline-none pl-[11px] text-xs bg-transparent'type="text" onChange={e=>{dispatch(setRegion(e.target.value))}}>
                        <option value="">Select Your Region</option>
                        {
                            region.map(e=><option key={e} value={e}>{e}</option>)
                        }
                    </select>
                    <select className='w-[138px] h-[22px] rounded-xl border outline-none pl-[11px] text-xs bg-transparent' placeholder='18-25' type="text" >
                        <option value="18-25">18 - 25</option>
                        <option value="25-30">25 - 30</option>
                        <option value="30-35">30 - 35</option>
                        <option value="35-40">35 - 40</option>
                    </select>
                </div>
                <div className="mt-3">
                    <span>Hair Color</span>
                    <div className=" ml-flex flex flex-wrap gap-x-5 gap-y-3 mt-3">
                        <button className={`${hair === 'Black' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setHair('Black');setFilter({...filter,appearance:{...filter.appearance,hair:'Black'}}) }}>Black</button>
                        <button className={`${hair === 'Brown' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setHair('Brown');setFilter({...filter,appearance:{...filter.appearance,hair:'Brown'}}) }}>Brown</button>
                        <button className={`${hair === 'Blonde' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setHair('Blonde');setFilter({...filter,appearance:{...filter.appearance,hair:'Blonde'}}) }}>Blonde</button>
                        <button className={`${hair === 'Red' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setHair('Red');setFilter({...filter,appearance:{...filter.appearance,hair:'Red'}}) }}>Red</button>
                        <button className={`${hair === 'White/Gray' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setHair('White/Gray');setFilter({...filter,appearance:{...filter.appearance,hair:'White/Gray'}}) }}>White/Gray</button>
                    </div>
                </div>
                <div className="mt-3">
                    <span>Eye Color</span>
                    <div className=" ml-flex flex flex-wrap gap-x-5 gap-y-3 mt-3">
                        <button className={`${eye === 'Brown' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setEye('Brown') ; setFilter({...filter,appearance:{...filter.appearance,eye:'Brown'}}) }}>Brown</button>
                        <button className={`${eye === 'Blue' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setEye('Blue') ; setFilter({...filter,appearance:{...filter.appearance,eye:'Blue'}}) }}>Blue</button>
                        <button className={`${eye === 'Hazel' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setEye('Hazel') ; setFilter({...filter,appearance:{...filter.appearance,eye:'Hazel'}}) }}>Hazel</button>
                        <button className={`${eye === 'Amber' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setEye('Amber') ; setFilter({...filter,appearance:{...filter.appearance,eye:'Amber'}}) }}>Amber</button>
                        <button className={`${eye === 'Green' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setEye('Green') ; setFilter({...filter,appearance:{...filter.appearance,eye:'Green'}}) }}>Green</button>
                        <button className={`${eye === 'Grey' ? 'bg-[#F13353] text-white' : 'bg-white'} px-[17px] border rounded-md`} onClick={() => { setEye('Grey') ; setFilter({...filter,appearance:{...filter.appearance,eye:'Grey'}}) }}>Grey</button>
                    </div>
                </div>
                <div className="mt-3">
                    <span>Interested In </span>
                    <fieldset className=" flex flex-wrap gap-y-2  flex-start mt-3">

                        <div className="w-1/2 flex gap-3">
                            <input className='peer checked:bg-[#F13353]' type="radio" name="interest" value={'Male'} id="radio1" />
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio1'> Male </label>
                        </div>

                        <div className="w-1/2 flex gap-3">
                            <input className='peer' type="radio" name="interest" value={'Female'} id="radio2" defaultChecked/>
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio2'> Female </label>
                        </div>

                        <div className="w-1/2 flex gap-3">
                            <input className='peer' type="radio" name="interest" value={'Couple'} id="radio3" /> 
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio3'> Couple </label>
                        </div>

                        <div className="w-1/2 flex gap-3">
                            <input className='peer' type="radio" name="interest" value={'Group'} id="radio4" /> 
                            <label className='peer-checked:text-[#F13353]' htmlFor='radio4'> Group </label>
                        </div>

                    </fieldset>
                </div>
                <div className="mt-3 flex gap-5">
                    <button className='w-[191px] h-[30px] rounded-lg bg-[#F13353] text-white' onClick={()=>{fetchData()}}>Show Result</button>
                    <button>Clear</button>
                </div>
            </div>
        </div>
    )
}


export default Search
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'
import axios from 'axios'
import backendIP from '../../../../backendIP'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import { setMenuSelector } from '../../../../redux/slice/utilSlice'

function VerifyAds() {
  const [verificationPhoto, setVerify] = useState('')
  const { adsTitle, id } = useSelector(state => state.ads)
  const dispatch = useDispatch()
  return (
    <div>
      <Title title={'Verify Ads'} />
      <GroupButton />

      <div className='w-full h-[90%] bg-[#F7F7F7] p-5 pt-10 pl-10 flex flex-col gap-5'>
        <div className="firstline flex">
          <Title title={'Verify Profile'} />
        </div>
        <div className="w-full  border h-96 rounded-2xl border-red-500">
          <div className="title w-full h-12 border-b border-red-500 items-center flex pl-10">
            <span className='text-lg font-semibold'>Adding picture to verify {adsTitle} advert</span>
          </div>
          <div className="content p-5 w-full flex relative">
            <div className="photo  w-80 h-full flex flex-col items-center">
              <div className="photo w-52 h-52 border mb-5">
                {
                  verificationPhoto? <img src={verificationPhoto} alt='' className='w-full h-full' /> : <img src='/image/dashboard/verifyDemo.png' alt='' className='w-full h-full' />
                }
                
              </div>
              <div className="">
                    <ProfilePhoto setVerify={setVerify}/>
              </div>
            </div>
            <Rules adsTitle={adsTitle} />
            <button className='absolute bottom-10 right-10 border h-10  px-6 rounded-full md:text-xl   border-green-600 shadow-md shadow-green-600' onClick={() => {
              axios.post(`${backendIP}ads/verificationRequest`, { id,verificationPhoto }).then(res => {
                if(res.data){
                  window.alert('Your Verification request is proccessing')
                  dispatch(setMenuSelector(1))
                }else window.alert('Something is error')
              })
            }}>Verify</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default VerifyAds


const ProfilePhoto = ({setVerify}) => {
  const {username} =useSelector(state=>state.user)
  // eslint-disable-next-line
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
      accept: {
          'image/*': ['.png', '.jpg', '.jpegs', '.webp'],

      },
      maxFiles: 1,
      onDrop: acceptedFiles => {
          const data = new FormData()
          const name = `${username}${new Date().toISOString()}`
          data.append('name',name)
          data.append('profile',acceptedFiles[0])
          axios.post(`${backendIP}file/profile`,data).then(res=>{window.alert('Verify Photo is Uploaded')}).then(res=>{
              setVerify(`${backendIP}image/${name}.png`)
          })
      }
  });

  return (
          <div className="profilePhoto border h-16 w-64 flex justify-center items-center border-red-500">
              <div {...getRootProps({ className: 'dropzone h-full h-full flex justify-center items-center' })}>
                  <input {...getInputProps()} />
                  <p>Verification Photo</p>
              </div>
          </div>
  )
}




function Rules({ adsTitle }) {
  return (
    <div className="rules ml-6 pr-5">
      <ul className='list-disc text-lg'>
        <li className='tracking-wider'>
          To verify advert <span className='font-bold'> {adsTitle} </span> please upload a picture of person from advert <span className='font-bold'> {adsTitle} </span> holding a piece of paper with current date and text "I love Mike".
        </li>
        <li className='tracking-wider mt-2'>
          We only accept pictures at least <span className='font-bold'> 700 px </span>  on the short side.
        </li>
        <li className='tracking-wider mt-2'>
          You can take the picture with a cell phone. If you don't know how to take a picture of yourself, please use a bathroom mirror.
        </li>
        <li className='tracking-wider mt-2'>
          We don't verify adverts if a person in the verification picture looks different from the one in the advert (is not the same person).
        </li>
        <li className='tracking-wider mt-2'>
          We will not use this picture anywhere on the website.
        </li>
        <li className='tracking-wider mt-2'>
          We  only accept <span className='font-bold' >jpeg, png, gif, jpg</span> images
        </li>
      </ul>
    </div>
  )
}
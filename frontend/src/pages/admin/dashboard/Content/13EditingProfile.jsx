import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'
import backendIP from '../../../../backendIP';
import axios from 'axios';
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { setProfilePhoto } from '../../../../redux/slice/adsSlice';
import { useDropzone } from 'react-dropzone'


function EditingProfile() {
    const { id } = useSelector(state => state.ads)

    const [editing, setEditing] = useState({
        adsTitle: '',
        phoneNo: '',
        region: '',
        profilePhoto: '',
        username: '',
        visibility: true,
        membershipType: ''
    })

    const fetchApi = () => {
        axios.get(`${backendIP}ads/view`, { params: { id } }).then(res => {
            const { adsTitle, phoneNo, region, profilePhoto, username, visibility, membershipType } = res.data

            setEditing({ ...editing, adsTitle, phoneNo, region, profilePhoto, username, visibility, membershipType })
            console.log(editing)
        })
    }

    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line
    }, [])

    const update = () => {
        if (validator.isMobilePhone(editing.phoneNo)) {
            axios.post(`${backendIP}ads/edit`, { editing, id }).then(res => {
                window.alert('Done')
                fetchApi()
            })
        } else window.alert('Please Enter a Valid Number')
    }


    return (
        <div>
            <Title title={'Editing Profile'} />
            <GroupButton />
            <div className="mt-10 bg-white px-5 py-10 flex">
                <div className="left  flex gap-10 flex-wrap relative">

                    <div className="title w-72 ">
                        <label htmlFor="adsTitle">Advertisement Title</label>
                        <input className='h-12 w-64 border mt-5 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder='Ads Title' type="text" id='adsTitle' value={editing.adsTitle} onChange={e => setEditing({ ...editing, adsTitle: e.target.value })} />
                    </div>

                    <div className="phone  w-72 ">
                        <label htmlFor="phoneNo">Phone No</label>
                        <input className='h-12 w-64 border mt-5 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder='Phone No' type="text" id='phoneNo' value={editing.phoneNo} onChange={e => setEditing({ ...editing, phoneNo: e.target.value })} />
                    </div>

                    <div className="nationality  w-72 ">
                        <label htmlFor="region">Region</label>
                        <input className='h-12 w-64 border mt-5 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder='Region' type="text" id='region' value={editing.region} onChange={e => setEditing({ ...editing, region: e.target.value })} />
                    </div>


                    <div className="visible  w-72 ">
                        <label htmlFor="visible">Block and UnBlock</label>
                        <select className='h-12 w-64 border mt-5 focus:outline-[#6d00bc] rounded-lg pl-5' id='visible' value={editing.visibility} onChange={e => setEditing({ ...editing, visibility: e.target.value })} >
                            <option value={true}>Visible</option>
                            <option value={false}>Block</option>
                        </select>
                    </div>

                    <div className="membership  w-72 ">
                        <label htmlFor="membership">Membership Type</label>
                        <select className='h-12 w-64 border mt-5 focus:outline-[#6d00bc] rounded-lg pl-5' id='membership' value={editing.membershipType} onChange={e => setEditing({ ...editing, membershipType: e.target.value })} >
                            <option value="none">none</option>
                            <option value="Diamond">Diamond</option>
                            <option value="Platinum">Platinum</option>
                            <option value="Gold">Gold</option>
                            <option value='Silver'>Silver</option>
                        </select>
                    </div>

                    <button className='px-5 border rounded-lg h-12 absolute right-10 bottom-0 bg-[#6d00bc] text-white flex justify-center items-center gap-2 font-semibold text-lg' onClick={update}>
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                        Save Your Editing
                    </button>
                </div>
                <div className="right   ">
                    <img src={editing.profilePhoto} className='w-80 h-60 mb-5' alt="" />
                    <ProfilePhoto setEditing={setEditing} editing={editing} username={editing.username} />
                </div>

            </div>
        </div>
    )
}

export default EditingProfile



const ProfilePhoto = ({ editing, setEditing, username }) => {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpegs', '.webp'],

        },
        maxFiles: 1,
        onDrop: acceptedFiles => {
            const data = new FormData()
            const name = `${username}${new Date().toISOString()}`
            data.append('name', name)
            data.append('profile', acceptedFiles[0])
            axios.post(`${backendIP}file/profile`, data).then(res => { window.alert('Profile is Uploaded') }).then(res => {
                dispatch(setProfilePhoto(`${backendIP}image/${name}.png`))
                setEditing({ ...editing, profilePhoto: `${backendIP}image/${name}.png` })
            })
        }
    });

    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className="profilePhoto border h-16 w-64 flex justify-center items-center border-red-500">
                <div {...getRootProps({ className: 'dropzone h-full h-full flex justify-center items-center' })}>
                    <input {...getInputProps()} />
                    <p>Profile Photo</p>
                </div>
            </div>
        </div>
    )
}
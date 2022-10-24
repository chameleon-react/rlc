import React from 'react'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'
import { useState, useEffect } from 'react'
import axios from 'axios'
import backendIP from '../../../../backendIP'
import { useSelector, useDispatch } from 'react-redux'
import { setProfilePhoto } from '../../../../redux/slice/adsSlice'
import { useDropzone } from 'react-dropzone'
import { setMenuSelector } from '../../../../redux/slice/utilSlice'

function EditAds() {
    const { id } = useSelector(state => state.ads)
    const [editing, setEditing] = useState({
        adsTitle: '',
        phoneNo: '',
        region: '',
        email: '',
        socialMedia: {
            website: '',
            videoUrl: '',
            instagram: '',
            twitter: '',
            facebook: '',
            tiktok: '',
            telegram: ''
        },
        appearance: {
            height: '',
            weight: '',
            eye: '',
            hair: '',
            age: '',
            measurement: ''
        },
        profilePhoto: '',
        username: '',
        location: '',
        nationality: '',
        language: '',
    })

    const fetchApi = () => {
        axios.get(`${backendIP}ads/view`, { params: { id } }).then(res => {
            const { adsTitle, phoneNo, region, profilePhoto, username, socialMedia, email, location, nationality, language, appearance } = res.data
            setEditing({
                ...editing,
                adsTitle,
                phoneNo,
                region,
                profilePhoto,
                username,
                email,
                location,
                nationality,
                language,
                socialMedia,
                appearance
            })
        })
    }

    useEffect(() => {
        fetchApi()
        // eslint-disable-next-line
    }, [])

    const update = () => {
        axios.post(`${backendIP}ads/edit`, { editing, id }).then(res => {
            window.alert('Done')
            fetchApi()
        })
    }
    const dispatch = useDispatch()
    return (
        <div className=''>
            <Title title={'Edit Ads'} />
            <GroupButton />
            <div className="mx-5 border mt-10 p-5 flex flex-wrap gap-5 ">
                <InputField setEditing={setEditing} editing={editing} htmlFor={'adsTitle'} change={'adsTitle'} label='Ads Title' value={editing.adsTitle} />
                <InputField setEditing={setEditing} editing={editing} htmlFor={'phoneNo'} change={'phoneNo'} label='Phone No' value={editing.phoneNo} />
                <InputField setEditing={setEditing} editing={editing} htmlFor={'region'} change={'region'} label='Region' value={editing.region} />
                <InputField setEditing={setEditing} editing={editing} htmlFor={'email'} change={'email'} label='Email' value={editing.email} />
                <InputField setEditing={setEditing} editing={editing} htmlFor={'location'} change={'location'} label='Location' value={editing.location} />
                <InputField setEditing={setEditing} editing={editing} htmlFor={'nationality'} change={'nationality'} label='Nationality' value={editing.nationality} />
                <InputField setEditing={setEditing} editing={editing} htmlFor={'language'} change={'language'} label='Language' value={editing.language} />

                <SocialMedia socialMedia={editing.socialMedia} setEditing={setEditing} editing={editing} htmlFor={'website'} change={'website'} label='Website' value={editing.socialMedia.website} />
                <SocialMedia socialMedia={editing.socialMedia} setEditing={setEditing} editing={editing} htmlFor={'videoUrl'} change={'videoUrl'} label='Video Url' value={editing.socialMedia.videoUrl} />
                <SocialMedia socialMedia={editing.socialMedia} setEditing={setEditing} editing={editing} htmlFor={'instagram'} change={'instagram'} label='Instagram' value={editing.socialMedia.instagram} />
                <SocialMedia socialMedia={editing.socialMedia} setEditing={setEditing} editing={editing} htmlFor={'twitter'} change={'twitter'} label='Twitter' value={editing.socialMedia.twitter} />
                <SocialMedia socialMedia={editing.socialMedia} setEditing={setEditing} editing={editing} htmlFor={'telegram'} change={'telegram'} label='telegram' value={editing.socialMedia.telegram} />
                <SocialMedia socialMedia={editing.socialMedia} setEditing={setEditing} editing={editing} htmlFor={'facebook'} change={'facebook'} label='Facebook' value={editing.socialMedia.facebook} />
                <SocialMedia socialMedia={editing.socialMedia} setEditing={setEditing} editing={editing} htmlFor={'tiktok'} change={'tiktok'} label='Tik Tok' value={editing.socialMedia.tiktok} />

                <Appearance appearance={editing.appearance} setEditing={setEditing} editing={editing} htmlFor={'height'} change={'height'} label='Height' value={editing.appearance.height} />
                <Appearance appearance={editing.appearance} setEditing={setEditing} editing={editing} htmlFor={'weight'} change={'weight'} label='Weight' value={editing.appearance.weight} />
                <Appearance appearance={editing.appearance} setEditing={setEditing} editing={editing} htmlFor={'eye'} change={'eye'} label='Eyes' value={editing.appearance.eye} />
                <Appearance appearance={editing.appearance} setEditing={setEditing} editing={editing} htmlFor={'age'} change={'age'} label='Your Age' value={editing.appearance.age} />
                <Appearance appearance={editing.appearance} setEditing={setEditing} editing={editing} htmlFor={'measurement'} change={'measurement'} label='Measurements' value={editing.appearance.measurement} />
                <Appearance appearance={editing.appearance} setEditing={setEditing} editing={editing} htmlFor={'hair'} change={'hair'} label='Hairs' value={editing.appearance.hair} />
                <div className="w-72">
                    <label >{'Edit Service'}</label>
                    <button className='h-12 w-64 mt-2 focus:outline-[#6d00bc] rounded-lg pl-5 border border-red-400' onClick={() => dispatch(setMenuSelector(12))}>Edit Services</button>
                </div>


                <div className="right">
                    <img src={editing.profilePhoto} className='w-80 h-60 mb-5' alt="" />
                    <ProfilePhoto setEditing={setEditing} editing={editing} username={editing.username} />
                </div>

            </div>
            <button className='px-5 border rounded-lg h-12 fixed right-10 bottom-5 bg-[#6d00bc] text-white flex justify-center items-center gap-2 font-semibold text-lg' onClick={update}>
                <span className="material-symbols-outlined">
                    settings
                </span>
                Save Your Editing
            </button>
        </div>
    )
}

export default EditAds

const InputField = ({ htmlFor, label, value, change, setEditing, editing }) => {
    return (

        <div className="w-72">
            <label htmlFor={htmlFor}>{label}</label>
            <input className='h-12 w-64 border mt-2 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder={label} type="text" id={htmlFor} value={value} onChange={e => {
                setEditing({ ...editing, [change]: e.target.value })
                console.log(editing)
            }} />
        </div>

    )
}

const SocialMedia = ({ htmlFor, label, value, change, setEditing, editing, socialMedia }) => {
    return (

        <div className="w-72">
            <label htmlFor={htmlFor}>{label}</label>
            <input className='h-12 w-64 border mt-2 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder={label} type="text" id={htmlFor} value={value} onChange={e => {
                setEditing({ ...editing, socialMedia: { ...socialMedia, [change]: e.target.value } })
                console.log(editing)
            }} />
        </div>

    )
}

const Appearance = ({ htmlFor, label, value, change, setEditing, editing, socialMedia, appearance }) => {
    return (

        <div className="w-72">
            <label htmlFor={htmlFor}>{label}</label>
            <input className='h-12 w-64 border mt-2 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder={label} type="text" id={htmlFor} value={value} onChange={e => {
                setEditing({ ...editing, appearance: { ...appearance, [change]: e.target.value } })
            }} />
        </div>

    )
}

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
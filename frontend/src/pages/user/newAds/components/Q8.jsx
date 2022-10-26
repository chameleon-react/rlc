import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSelector, useDispatch } from 'react-redux'
import backendIP from '../../../../backendIP'
import { setProfilePhoto, setGallery } from '../../../../redux/slice/adsSlice'
import { setAllow, setError } from '../../../../redux/slice/utilSlice'

function Q8() {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    const { profilePhoto, gallery } = useSelector(state => state.ads)
    useEffect(() => {
        if (profilePhoto) {
            if (gallery?.length !== 0) {
                dispatch(setAllow())
            }else dispatch(setError('Please Upload Gallery Photo'))
        } else {
            dispatch(setError('Please Upload Profile Photo'))
        }
        // eslint-disable-next-line
    }, [profilePhoto, gallery])
    return (
        <div className="h-full w-full flex flex-col justify-center items-center gap-10">
            <ProfilePhoto />
            <Gallery />
        </div>
    )
}

export default Q8


const ProfilePhoto = () => {
    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)
    const [preview, setPreview] = useState('')
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpegs', '.webp'],

        },
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setPreview(URL.createObjectURL(acceptedFiles[0]))
            const data = new FormData()
            const name = `${username}${new Date().toISOString()}`
            data.append('name', name)
            data.append('profile', acceptedFiles[0])
            axios.post(`${backendIP}file/profile`, data).then(res => { window.alert('Profile is Uploaded') }).then(res => {
                dispatch(setProfilePhoto(`${backendIP}image/${name}.png`))
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
            {
                preview && <img src={preview} className='w-36 h-36' alt="" />
            }
        </div>
    )
}




const Gallery = () => {
    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)
    const [preview, setPreview] = useState([])


    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg', '.jpegs', '.webp'],
        },
        maxFiles: 5,
        onDrop: acceptedFiles => {
            setPreview([])
            const data = new FormData()
            const name = `${username}${new Date().toISOString()}`
            data.append('name', name)
            acceptedFiles.map(e => data.append('photos', e))

            axios.post(`${backendIP}file/gallery`, data).then(res => { window.alert('Gallery images is Uploaded') }).then(res => {

            })
            acceptedFiles.map(e => dispatch(setGallery(`${backendIP}gallery/${name}${e.name.split('.')[0]}.png`)))

        }
    });

    useEffect(() => {
        // eslint-disable-next-line 
        acceptedFiles.map(file => {
            setPreview(prev => [...prev, URL.createObjectURL(file)])
        })


    }, [acceptedFiles])

    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className="profilePhoto border h-16 w-64 flex justify-center items-center border-red-500">
                <div {...getRootProps({ className: 'dropzone h-full h-full flex justify-center items-center' })}>
                    <input {...getInputProps()} />
                    <p>Gallery Upto 5 Photos</p>
                </div>
            </div>
            <div className="gallery flex gap-10 justify-center items-center">
                {
                    preview.map((file, index) => <img key={index} src={file} className='w-36 h-36' alt="" />)
                }
            </div>
        </div>
    )
}
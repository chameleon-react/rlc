import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVideoUrl, setWebsite, setInstagram, setTwitter, setTelegram, setFacebook, setTiktok } from '../../../../redux/slice/adsSlice'
import { setAllow } from '../../../../redux/slice/utilSlice'
function Q6() {
    const dispatch = useDispatch()
    const { videoUrl, website, instagram, twitter, telegram, facebook, tiktok } = useSelector(state => state.ads.socialMedia)

    useEffect(() => {
            dispatch(setAllow())
        //eslint-disable-next-line
    }, [])



    return (
        <>
            <div className=" flex gap-5">
                <div className="video flex flex-col">
                    <input   onChange={e => dispatch(setVideoUrl(e.target.value))} value={videoUrl} id='video' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='Video Url' type="text" />
                </div>
                <div className="website flex flex-col">
                    <input onChange={e => dispatch(setWebsite(e.target.value))} value={website} id='website' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='Website' type="text" />
                </div>
            </div>

            <div className=" flex gap-5">
                <div className="Instargram flex flex-col">
                    <input onChange={e => dispatch(setInstagram(e.target.value))} value={instagram} id='Instargram' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='Instagram' type="text" />
                </div>
                <div className="Twitter flex flex-col">
                    <input onChange={e => dispatch(setTwitter(e.target.value))} value={twitter} id='Twitter' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' placeholder='Twitter' type="text" />
                </div>
            </div>

            <div className=" flex gap-5">
                <div className="Telegram flex flex-col">
                    <input onChange={e => dispatch(setTelegram(e.target.value))} value={telegram} id='Telegram' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" placeholder='Telegram' />
                </div>
                <div className="facebook flex flex-col">
                    <input onChange={e => dispatch(setFacebook(e.target.value))} value={facebook} id='facebook' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" placeholder='Facebook' />
                </div>
            </div>

            <div className="Tik Tok flex flex-col">
                <input onChange={e => dispatch(setTiktok(e.target.value))} value={tiktok} id='Tik Tok' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" placeholder='Tik Tok' />
            </div>
        </>
    )
}

export default Q6
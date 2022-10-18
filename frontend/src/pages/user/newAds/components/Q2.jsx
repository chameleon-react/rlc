import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIntroduction, setDescription } from '../../../../redux/slice/adsSlice'
import { setDisable, setAllow, setError } from '../../../../redux/slice/utilSlice'
import count from 'words-count'
function Q2() {
    const dispatch = useDispatch()
    const { introduction, description } = useSelector(state => state.ads)

    useEffect(() => {
        if (introduction) {
            if (description) {
                if (count(description) >= 300) {
                    dispatch(setAllow())
                } else {
                    dispatch(setError('description must be 300 or more words'))
                    dispatch(setDisable())
                }
            } else {
                dispatch(setError(' Please enter your description '))
                dispatch(setDisable())
            }
        } else {
            dispatch(setError(' Please enter your introduction '))
            dispatch(setDisable())
        }
        // eslint-disable-next-line
    }, [introduction, description])

    const intro = 'I’m Stacy, born on 14 April 1998, brought up and raised in a well-to-do Christian family who is fair and tall. I’ve completed my qualification at the Moscow state university, Russia in interior designing. As I had a keen interest in the modelling career I luckily had received opportunities to endorse various brands and have done various commercials ads as well where I was one amongst to walk on the ramp for Louis Vuitton in 2018.'
    const desc = "As a passionate individual in modeling, I started my career in 2010 when I made my debut as a Calvin Klein exclusive model. Among many other labels, I also received opportunities to walk the ramp for Louis Vuitton, Balmain, Diane von Furstenberg, Marchesa, MaxMara, Rodarte, and Trovata.  I’m 24 years old, with a height of 5 ft 6 inches tall and a weight of 60 Kg. The body measurements like bust size or bra size, waist size, and hip size are 34-28-36 inches where the bra size is 34B, waist is 28 inches, and hip size is 36 inches.  The exceptional features of mine include really fair skin tone & quite larger eyes with a grey lens. I really love cooking and keeping myself fit and working out regularly which are my hobbies. It was a pleasure for me to be featured in editorials in the British, German, French, Spanish, and Italian editions of Vogue as well as on the covers of Vogue Portugal, Vogue Spain, Harper's Bazaar UK, ZOO Magazine, L'Officiel Italy, Marie Claire Italy, Elle Brazil, and Flair Magazine."
    return (
        <>
            <div className="introduction flex flex-col">
                <label htmlFor="introduction">Introduction</label>
                <textarea placeholder={intro} cols="10"  onChange={e => dispatch(setIntroduction(e.target.value))} value={introduction} id='introduction' className='h-36 md:w-64 bg-transparent border-b outline-none' type="text" />
            </div>
            <div className="Description flex flex-col">
                <label htmlFor="Description">Description</label>
                <textarea placeholder={desc} onChange={e => dispatch(setDescription(e.target.value))} value={description} id='Description' className='h-36 w-80 md:w-64 bg-transparent border-b outline-none' type="text" />
                <span>{`${count(description)}/300`}</span>
            </div>

        </>
    )
}

export default Q2
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLocation, setNationality, setLanguage } from '../../../../redux/slice/adsSlice'
import { setError, setDisable, setAllow } from '../../../../redux/slice/utilSlice'
import Nationality from './Nationality'
import Select from 'react-select'
function Q3() {
    const dispatch = useDispatch()
    const { location, nationality, language } = useSelector(state => state.ads)
    const option = [
        { label: 'Afrikaans', value: "Afrikaans" },
        { label: 'Albanian', value: "Albanian" },
        { label: 'Arabic', value: "Arabic" },
        { label: 'Armenian', value: "Armenian" },
        { label: 'Bosnian', value: "Bosnian" },
        { label: 'Bulgarian', value: "Bulgarian" },
        { label: 'Chinese (Cantonese)', value: "Chinese(Cantonese)" },
        { label: 'Chinese (Mandarin)', value: "Chinese(Mandarin)" },
        { label: 'Croatian', value: "Croatian" },
        { label: 'Czech', value: "Czech" },
        { label: 'Danish', value: "Danish" },
        { label: 'Dutch', value: "Dutch" },
        { label: 'English', value: "English" },
        { label: 'Estonian', value: "Estonian" },
        { label: 'Filipino', value: "Filipino" },
        { label: 'Finnish', value: "Finnish" },
        { label: 'French', value: "French" },
        { label: 'Georgian', value: "Georgian" },
        { label: 'German', value: "German" },
        { label: 'Greek', value: "Greek" },
        { label: 'Hebrew', value: "Hebrew" },
        { label: 'Hindi', value: "Hindi" },
        { label: 'Hungarian', value: "Hungarian" },
        { label: 'Indonesian', value: "Indonesian" },
        { label: 'Icelandic', value: "Icelandic" },
        { label: 'Italian', value: "Italian" },
        { label: 'Japanese', value: "Japanese" },
        { label: 'Korean', value: "Korean" },
        { label: 'Lebanese', value: "Lebanese" },
        { label: 'Lithuanian', value: "Lithuanian" },
        { label: 'Latvian', value: "Latvian" },
        { label: 'Malaysian', value: "Malaysian" },
        { label: 'Moldovan', value: "Moldovan" },
        { label: 'Mongolian', value: "Mongolian" },
        { label: 'Moroccan', value: "Moroccan" },
        { label: 'Norwegian', value: "Norwegian" },
        { label: 'Persian', value: "Persian" },
        { label: 'Polish', value: "Polish" },
        { label: 'Portuguese', value: "Portuguese" },
        { label: 'Romanian', value: "Romanian" },
        { label: 'Russian', value: "Russian" },
        { label: 'Serbian', value: "Serbian" },
        { label: 'Slovak', value: "Slovak" },
        { label: 'Slovenian', value: "Slovenian" },
        { label: 'Somali', value: "Somali" },
        { label: 'Southern Sotho', value: "Southern Sotho" },
        { label: 'Spanish', value: "Spanish" },
        { label: 'Swedish', value: "Swedish" },
        { label: 'Taiwanese', value: "Taiwanese" },
        { label: 'Thai', value: "Thai" },
        { label: 'Turkish', value: "Turkish" },
        { label: 'Ukrainian', value: "Ukrainian" },
        { label: 'Urdu', value: "Urdu" },
        { label: 'Vietnamese', value: "Vietnamese" },
        { label: 'Zulu', value: "Zulu" },
    ]


    useEffect(() => {
        if (location) {
            if (nationality) {
                if (language) {
                    dispatch(setAllow())
                } else {
                    dispatch(setError('Please Enter Language'))
                    dispatch(setDisable())
                }
            } else {
                dispatch(setError('Please Enter Nationality'))
                dispatch(setDisable())
            }
        } else {
            dispatch(setError('Please Enter Location'))
            dispatch(setDisable())
        }
        // eslint-disable-next-line
    }, [location, nationality, language])


    return (
        <>
            <div className="Location flex flex-col">
                <label htmlFor="Location">Location</label>
                <input placeholder='Downtown' onChange={e => dispatch(setLocation(e.target.value))} value={location} id='Location' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" />
            </div>
            <div className="Nationality flex flex-col">
                <label htmlFor="Nationality">Nationality</label>
                <select placeholder='UAE' onChange={e => dispatch(setNationality(e.target.value))} value={nationality} id='Nationality' className='h-10 w-80 md:w-64 bg-transparent border-b outline-none' type="text" >
                    <option value="">Please Select Your Nationality</option>
                    <Nationality />
                </select>
            </div>
            <div className="Languages flex flex-col">
                <label htmlFor="Languages">Languages</label>

                <Select
                    className='text-black h-10 w-80 md:w-64 bg-transparent border-b outline-none'
                    onChange={e => {
                        // eslint-disable-next-line
                        const languages = new Array()
                        // eslint-disable-next-line
                        e.map(el => {
                            languages.push(el.value)
                        })
                        dispatch(setLanguage(languages))
                    }}
                    isMulti
                    options={option}
                />
            </div>

        </>
    )
}

export default Q3
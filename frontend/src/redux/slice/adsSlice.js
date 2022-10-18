import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    adsTitle: '',
    phoneNo: '',
    email: '',
    region: '',
    introduction: '',
    description: '',
    location: '',
    nationality: '',
    language: [],
    appearance: {
        height: '',
        weight: '',
        eye: '',
        hair: '',
        age: '',
        measurement: '83-84-70'
    },
    socialMedia: {
        videoUrl: '',
        website: '',
        instagram: '',
        twitter: '',
        telegram: '',
        facebook: '',
        tiktok: '',
    },
    currencyType: {
        inCall: '',
        outCall: ''
    },
    charge: {
        inCall: {
            oneHour: '',
            twoHour: '',
            threeHour: ''
        },
        outCall: {
            oneHour: '',
            twoHour: '',
            threeHour: ''
        }
    },
    profilePhoto: '',
    gallery: [],
    service: {
        all: false,
        select: {
            analSex: false,
            footFetish: false,
            parties: false,
            submissive: false,
            BDSM: false,
            frenchKissing: false,
            reverseOral: false,
            squirting: false,
            CIM_CumInMouth: false,
            GFE: false,
            givingRimming: false,
            tantricMassage: false,
            COB_CumOnBody: false,
            givingHardsports: false,
            rimmingReceiving: false,
            teabagging: false,
            couples: false,
            receivingHardsports: false,
            rolePlay: false,
            tieAndTease: false,
            deepThroat: false,
            lapDancing: false,
            sexToys: false,
            uniforms: false,
            domination: false,
            massage: false,
            spanking: false,
            givingWatersports: false,
            faceSitting: false,
            nuruMassage: false,
            strapon: false,
            receivingWatersports: false,
            fingering: false,
            oralsexBlowJob: false,
            striptease: false,
            webcamSex: false,
            fisting: false,
            OWO_OralWithoutCondom: false,
        },
    },
    serviceCharge: {}
}

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        setRegion: (state, action) => { state.region = action.payload },
        setId: (state, action) => { state.id = action.payload },
        setAdsTitle: (state, action) => { state.adsTitle = action.payload },
        setPhoneNo: (state, action) => { state.phoneNo = action.payload },
        setEmail: (state, action) => { state.email = action.payload },
        setIntroduction: (state, action) => { state.introduction = action.payload },
        setDescription: (state, action) => { state.description = action.payload },
        setLocation: (state, action) => { state.location = action.payload },
        setNationality: (state, action) => { state.nationality = action.payload },
        setLanguage: (state, action) => { state.language = action.payload },
        setHeight: (state, action) => { state.appearance.height = action.payload },
        setWeight: (state, action) => { state.appearance.weight = action.payload },
        setAge: (state, action) => { state.appearance.age = action.payload },
        setEye: (state, action) => { state.appearance.eye = action.payload },
        setHair: (state, action) => { state.appearance.hair = action.payload },
        setMeasurement: (state, action) => { state.appearance.measurement = action.payload },
        setVideoUrl: (state, action) => { state.socialMedia.videoUrl = action.payload },
        setWebsite: (state, action) => { state.socialMedia.website = action.payload },
        setInstagram: (state, action) => { state.socialMedia.instagram = action.payload },
        setTwitter: (state, action) => { state.socialMedia.twitter = action.payload },
        setTelegram: (state, action) => { state.socialMedia.telegram = action.payload },
        setFacebook: (state, action) => { state.socialMedia.facebook = action.payload },
        setTiktok: (state, action) => { state.socialMedia.tiktok = action.payload },
        setProfilePhoto: (state, action) => { state.profilePhoto = action.payload },
        setGallery: (state, action) => { state.gallery = [...state.gallery,action.payload] },
        setIncallCurrencyType: (state, action) => { state.currencyType.inCall = action.payload },
        setOutcallCurrencyType: (state, action) => { state.currencyType.outCall = action.payload },
        setOutcallOneHour: (state, action) => { state.charge.outCall.oneHour = action.payload },
        setOutcallTwoHour: (state, action) => { state.charge.outCall.twoHour = action.payload },
        setOutcallThreeHour: (state, action) => { state.charge.outCall.threeHour = action.payload },
        setIncallOneHour: (state, action) => { state.charge.inCall.oneHour = action.payload },
        setIncallTwoHour: (state, action) => { state.charge.inCall.twoHour = action.payload },
        setIncallThreeHour: (state, action) => { state.charge.inCall.threeHour = action.payload },
        selectAllService: (state, action) => {
            const key = Object.keys(state.service.select)
            if (action.payload) {
                state.service.all = true
                key.forEach(e => {
                    state.service.select[e] = true
                })
            } else {
                state.service.all = false
                key.forEach(e => {
                    state.service.select[e] = false
                })
            }
        },
        selectService: (state, action) => {
            state.service.select[action.payload] ? state.service.select[action.payload] = false : state.service.select[action.payload] = true
            state.service.all = false
        },
        setServiceCharge: (state, action) => {
            const {payload} = action
            state.serviceCharge={...state.serviceCharge,...payload}
        }
    }
});

export const {
    setId,
    setAdsTitle, setPhoneNo, setEmail,
    setIntroduction, setDescription,
    setLocation, setNationality,
    setLanguage, setHeight, setWeight,
    setAge, setEye, setHair, setMeasurement,
    setVideoUrl, setWebsite, setInstagram,
    setTwitter, setTelegram, setFacebook,
    setTiktok, setProfilePhoto, setGallery,
    setIncallCurrencyType, setOutcallCurrencyType,
    setOutcallOneHour, setOutcallTwoHour, setOutcallThreeHour,
    setIncallOneHour, setIncallTwoHour, setIncallThreeHour,
    selectAllService, selectService, setRegion,
    setServiceCharge

} = adsSlice.actions

export default adsSlice.reducer
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllService, selectService } from '../../../../redux/slice/adsSlice'
import { setAllow, setError } from '../../../../redux/slice/utilSlice'

function Q9() {
    const [showModal, setShowModal] = useState(false)
    const { service } = useSelector(state => state.ads)
    const keys = Object.keys(service.select)
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        dispatch(setAllow())
    }, [clicked])
    
    return (
        <div>
            <div className="button flex gap-5 flex-wrap px-6">
                <button onClick={() => { dispatch(selectAllService(!service.all)); setShowModal(true) }} className={`border h-10  px-6  rounded-full  hover:rounded-3xl ${service.all ? 'border-2 border-green-500  shadow-green-500 shadow-inner' : 'hover:border-2'}`}>Select All</button>
                {
                    keys.map((e, index) => <button key={index} onClick={() => {setClicked(true); dispatch(selectService(e)) }} className={`border h-10  px-6  rounded-full  hover:rounded-3xl ${service.select[e] ? 'border-2 border-green-500 shadow-md shadow-green-500' : 'hover:border-2'}`}>{e.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase() + e.replace(/([A-Z])/g, " $1").slice(1)}</button>)
                }
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} />
            }
        </div>
    )
}

export default Q9



const Modal = ({ setShowModal }) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-black">
                                ARE YOU SURE?
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                {
                                    `You have selected that you offer ALL the below services. 
If you show you offer a service which you do not this can lead to bad reviews from customers and confusion.
Please check the services below and make sure they are correct. 
If they are please click proceed.`
                                }
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
import React, { useState } from 'react'

function Modal({ setShowModal, verificationPhoto }) {
    const [rejection, setRejection] = useState(false)
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl ">
                                Profile Verification
                            </h3>
                            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="img flex justify-center">
                                <img src={verificationPhoto} className='w-64' alt="" />
                            </div>
                            <div className="button flex justify-around mt-5 relative">
                                <button className='border-2 rounded-2xl h-10 w-16 border-green-500'>Approve</button>
                                <button className='border-2 rounded-2xl h-10 w-16 border-red-500' onClick={()=>setRejection(true)}>Reject</button>
                                {
                                    rejection && <div className="absolute -bottom-[10rem] -right-[8rem] w-64  border rounded-xl bg-white flex flex-col justify-center gap-5">

                                        <div class="flex items-center">
                                            <input id="notCorrect" type="radio" value="Verification Image is Not Correct" name="reject" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="notCorrect" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verification Image is Not Correct</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input checked id="quality" type="radio" value="Image quality in poor" name="reject" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="quality" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image quality in poor</label>
                                        </div>

                                        <div class="flex items-center">
                                            <input checked id="recognise" type="radio" value="We Can't recognise this you" name="reject" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="recognise" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">We Can't recognise this you</label>
                                        </div>
                                        <div className="button w-full flex justify-center gap-10  mb-5">
                                            <button className='border-2 p-2 rounded-2xl hover:rounded-xl border-[#E328AF]'>Sumbit</button>
                                            <button className='border-2 p-2 rounded-2xl hover:rounded-xl border-[#E328AF]' onClick={()=>setRejection(false)}>Cancel</button>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                                Close
                            </button>
                            <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => { setShowModal(false) }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black">
            </div>
        </>
    )
}

export default Modal
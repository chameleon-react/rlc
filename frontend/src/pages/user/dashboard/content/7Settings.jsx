import React from 'react'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'

function Settings() {
    return (
        <div>
            <Title title={'Settings'} />
            <GroupButton />
            <div className="mx-5 border mt-10 p-5 flex flex-wrap gap-5 ">
                <div className="w-72">
                    <label htmlFor={'Email'}>Email</label>
                    <input className='h-12 w-64 border mt-2 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder={''} type="text" id={'Email'} value={''} onChange={e => { }} />
                </div>
                <div className="w-72">
                    <label htmlFor={'currentPassword'}>Currrent Password</label>
                    <input className='h-12 w-64 border mt-2 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder={''} type="text" id={'currentPassword'} value={''} onChange={e => { }} />
                </div>
                <div className="w-72">
                    <label htmlFor='newPassword'>New Password</label>
                    <input className='h-12 w-64 border mt-2 focus:outline-[#6d00bc] rounded-lg pl-5' placeholder={''} type="text" id='newPassword' value={''} onChange={e => { }} />
                </div>
                <button className='mt-5 border py-3 px-3 rounded-lg'>Submit</button>
            </div>
        </div>
    )
}

export default Settings
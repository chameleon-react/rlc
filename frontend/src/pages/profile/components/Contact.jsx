import React from 'react'

function Contact({data}) {
    return (
        <div className="flex gap-3 h-full items-center">
            <a href={`mailto:${data.email}`} target={'_blank'} rel="noreferrer">
                <img className='cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200' src="/icon/mail.png" alt="contact" />
            </a>
            <a href={`tel:${data?.phoneNo}`} target={'_blank'} rel="noreferrer">
                <img className='cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200' src="/icon/call.png" alt="contact" />
            </a>
            <a href="https://" target={'_blank'} rel="noreferrer">
                <img className='cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200' src="/icon/tele.png" alt="contact" />
            </a>
            <a href={`https://api.whatsapp.com/send?phone=${data.phoneNo}&text=Hi`} target={'_blank'} rel="noreferrer" >
                <img className='cursor-pointer w-8 h-8 hover:w-10 hover:h-10 duration-200' src="/icon/whts.png" alt="contact" />
            </a>
        </div>
    )
}

export default Contact
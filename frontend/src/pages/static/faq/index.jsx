import React from 'react'
import FAQComponents from '../../components/FAQ'
import Footer from '../../common/Footer'
import NavBar from '../../common/NavBar'

function FAQ() {
    return (
        <div className=' text-white relative' style={{ backgroundImage: 'linear-gradient(to top, #ff0000, #c20023, #820327, #420f1d, #000000)' }}>

                <NavBar />

            
            <FAQComponents />
            <div className="footer mt-10">
                <Footer />
            </div>
        </div>
    )
}

export default FAQ
import React from 'react'


function SearchBar({ setShowSearch,setFilter,filter,fetchData }) {
    return (
        <div className="filtermenu w-full h-[57px]  flex justify-center items-center gap-[27px] text-white">
            <select className='bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none' onChange={e=>setFilter({...filter,charge:{outCall:{oneHour:e.target.value}}})}>
                <option value="">Select Price Range</option>
                <option value={800}>500-800</option>
                <option value={900}>801-900</option>
                <option value={1000}>901-1000</option>
                <option value={1100}>1001-1100</option>
                <option value={1200}>1101-1200</option>
                <option value={1300}>1201-1300</option>
                <option value={1400}>1301-1400</option>
                <option value={1500}>1401-1500</option>
                <option value={1600}>1501-1600</option>
                <option value={1700}>1601-1700</option>
            </select>
            <select className='bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none' onChange={e=>setFilter({...filter,nationality:e.target.value})}>
                <option value="">Select Nationality</option>
                <Nationality />
            </select>
            <select className='bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none'>
                <option value="">Select Language</option>
                <Languages />
            </select>
            <select className='bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none' onChange={e=>setFilter({...filter,appearance:{...filter.appearance,age:e.target.value}})}>
                <option value="">Select Age</option>
                <option value={20}>18-20</option>
                <option value={23}>21-23</option>
                <option value={26}>24-26</option>
                <option value={29}>27-29</option>
                <option value={32}>30-32</option>
            </select>
            <select className='bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none' onChange={e=>setFilter({...filter,appearance:{...filter.appearance,eye:e.target.value}})}>
                <option value="">Select Eye</option>
                <option value="Brown">Brown</option>
                <option value="Blue">Blue</option>
                <option value="Hazel">Hazel</option>
                <option value="Amber">Amber</option>
                <option value="Green">Green</option>
                <option value="Gray">Gray</option>
            </select>
            <select className='bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none' onChange={e=>setFilter({...filter,appearance:{...filter.appearance,hair:e.target.value}})}>
                <option value="">Select Hair</option>

                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Blond">Blond</option>
                <option value="White/Gray">White/Gray</option>
                <option value="Red">Red</option>
            </select>
            <button className='bg-[#17191E] w-[27px] h-[27px] rounded-lg' onClick={() => { setShowSearch(true) }}>+</button>
            <button className='bg-[#006EF8] w-[94px] h-[27px] rounded-lg' onClick={()=>fetchData()}>Search</button>
        </div>
    )
}

export default SearchBar



export function Nationality() {
    return (
        <>
            <option value="Afghan">Afghan</option>
            <option value="Albanian">Albanian</option>
            <option value="Algerian">Algerian</option>
            <option value="American">American</option>
            <option value="Argentinean">Argentinean</option>
            <option value="Armenian">Armenian</option>
            <option value="Australian">Australian</option>
            <option value="Austrian">Austrian</option>
            <option value="Azerbaijani">Azerbaijani</option>
            <option value="Bahraini">Bahraini</option>
            <option value="Bangladeshi">Bangladeshi</option>
            <option value="Barbadian">Barbadian</option>
            <option value="Belarusian">Belarusian</option>
            <option value="Belgian">Belgian</option>
            <option value="Belizean">Belizean</option>
            <option value="Beninese">Beninese</option>
            <option value="Bhutanese">Bhutanese</option>
            <option value="Bolivian">Bolivian</option>
            <option value="Bosnian">Bosnian</option>
            <option value="Brazilian">Brazilian</option>
            <option value="British">British</option>
            <option value="Bruneian">Bruneian</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="Cambodian">Cambodian</option>
            <option value="Cameroonian">Cameroonian</option>
            <option value="Canadian">Canadian</option>
            <option value="Cape Verdean">Cape Verdean</option>
            <option value="Central African">Central African</option>
            <option value="Chilean">Chilean</option>
            <option value="Chinese">Chinese</option>
            <option value="Colombian">Colombian</option>
            <option value="Congolese">Congolese</option>
            <option value="Costa Rican">Costa Rican</option>
            <option value="Croatian">Croatian</option>
            <option value="Cuban">Cuban</option>
            <option value="Cypriot">Cypriot</option>
            <option value="Czech">Czech</option>
            <option value="Danish">Danish</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominican">Dominican</option>
            <option value="Dutch">Dutch</option>
            <option value="Ecuadorean">Ecuadorean</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Eritrean">Eritrean</option>
            <option value="Estonian">Estonian</option>
            <option value="Ethiopian">Ethiopian</option>
            <option value="Filipino">Filipino</option>
            <option value="Finnish">Finnish</option>
            <option value="French">French</option>
            <option value="Gambian">Gambian</option>
            <option value="Georgian">Georgian</option>
            <option value="German">German</option>
            <option value="Ghanaian">Ghanaian</option>
            <option value="Greek">Greek</option>
            <option value="Guinean">Guinean</option>
            <option value="Haitian">Haitian</option>
            <option value="Herzegovinian">Herzegovinian</option>
            <option value="Hungarian">Hungarian</option>
            <option value="Icelander">Icelander</option>
            <option value="Indian">Indian</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Iranian">Iranian</option>
            <option value="Iraqi">Iraqi</option>
            <option value="Irish">Irish</option>
            <option value="Israeli">Israeli</option>
            <option value="Italian">Italian</option>
            <option value="Ivorian">Ivorian</option>
            <option value="Jamaican">Jamaican</option>
            <option value="Japanese">Japanese</option>
            <option value="Jordanian">Jordanian</option>
            <option value="Kazakhstani">Kazakhstani</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Kuwaiti">Kuwaiti</option>
            <option value="Latvian">Latvian</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Liberian">Liberian</option>
            <option value="Libyan">Libyan</option>
            <option value="Lithuanian">Lithuanian</option>
            <option value="Macedonian">Macedonian</option>
            <option value="Malawian">Malawian</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Maltese">Maltese</option>
            <option value="Mexican">Mexican</option>
            <option value="Moldovan">Moldovan</option>
            <option value="Monacan">Monacan</option>
            <option value="Mongolian">Mongolian</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Nepalese">Nepalese</option>
            <option value="New Zealander">New Zealander</option>
            <option value="Nicaraguan">Nicaraguan</option>
            <option value="Nigerien">Nigerien</option>
            <option value="North Korean">North Korean</option>
            <option value="Northern Irish">Northern Irish</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Omani">Omani</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Panamanian">Panamanian</option>
            <option value="Papua New Guinean">Papua New Guinean</option>
            <option value="Paraguayan">Paraguayan</option>
            <option value="Peruvian">Peruvian</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Qatari">Qatari</option>
            <option value="Romanian">Romanian</option>
            <option value="Russian">Russian</option>
            <option value="Rwandan">Rwandan</option>
            <option value="San Marinese">San Marinese</option>
            <option value="Saudi">Saudi</option>
            <option value="Scottish">Scottish</option>
            <option value="Senegalese">Senegalese</option>
            <option value="Serbian">Serbian</option>
            <option value="Seychellois">Seychellois</option>
            <option value="Sierra Leonean">Sierra Leonean</option>
            <option value="Singaporean">Singaporean</option>
            <option value="Slovakian">Slovakian</option>
            <option value="Slovenian">Slovenian</option>
            <option value="Somali">Somali</option>
            <option value="South African">South African</option>
            <option value="South Korean">South Korean</option>
            <option value="Spanish">Spanish</option>
            <option value="Sri Lankan">Sri Lankan</option>
            <option value="Sudanese">Sudanese</option>
            <option value="Swedish">Swedish</option>
            <option value="Swiss">Swiss</option>
            <option value="Syrian">Syrian</option>
            <option value="Taiwanese">Taiwanese</option>
            <option value="Tajik">Tajik</option>
            <option value="Tanzanian">Tanzanian</option>
            <option value="Thai">Thai</option>
            <option value="Tunisian">Tunisian</option>
            <option value="Turkish">Turkish</option>
            <option value="Tuvaluan">Tuvaluan</option>
            <option value="Ugandan">Ugandan</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Uruguayan">Uruguayan</option>
            <option value="Uzbekistani">Uzbekistani</option>
            <option value="Venezuelan">Venezuelan</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Welsh">Welsh</option>
            <option value="Zambian">Zambian</option>
            <option value="Zimbabwean">Zimbabwean</option>
        </>
    )
}



export function Languages() {
    return (
        <>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Albanian">Albanian</option>
            <option value="Arabic">Arabic</option>
            <option value="Armenian">Armenian</option>
            <option value="Bosnian">Bosnian</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
            <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
            <option value="Croatian">Croatian</option>
            <option value="Czech">Czech</option>
            <option value="Danish">Danish</option>
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
            <option value="Estonian">Estonian</option>
            <option value="Filipino">Filipino</option>
            <option value="Finnish">Finnish</option>
            <option value="French">French</option>
            <option value="Georgian">Georgian</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Hindi">Hindi</option>
            <option value="Hungarian">Hungarian</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Icelandic">Icelandic</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Lithuanian">Lithuanian</option>
            <option value="Latvian">Latvian</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Moldovan">Moldovan</option>
            <option value="Mongolian">Mongolian</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Persian">Persian</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Romanian">Romanian</option>
            <option value="Russian">Russian</option>
            <option value="Serbian">Serbian</option>
            <option value="Slovak">Slovak</option>
            <option value="Slovenian">Slovenian</option>
            <option value="Somali">Somali</option>
            <option value="Southern Sotho">Southern Sotho</option>
            <option value="Spanish">Spanish</option>
            <option value="Swedish">Swedish</option>
            <option value="Taiwanese">Taiwanese</option>
            <option value="Thai">Thai</option>
            <option value="Turkish">Turkish</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Urdu">Urdu</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Zulu">Zulu</option>
        </>
    )
}

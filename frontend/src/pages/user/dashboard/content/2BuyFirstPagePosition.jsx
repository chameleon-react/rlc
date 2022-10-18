import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import backendIP from '../../../../backendIP'
import Title from '../components/Title'

import GoldCard from './components/BuyFirstPage/Gold'
import PlatinumCard from './components/BuyFirstPage/Platinum'
import SilverCard from './components/BuyFirstPage/Silver'
import GroupButton from './components/GroupButton'

function BuyFirstPagePosition() {
    return (
        <div className=''>
            <Title title={'Buy First Page Position'} />
            <GroupButton />
            <div className="mt-10">
                <Title title={'Platinum'} />
            </div>
            <div className="flex flex-wrap gap-10 mt-5 Platinum">
                <PlatinumCard index={1} />
                <PlatinumCard index={2} />
                <PlatinumCard index={3} />
                <PlatinumCard index={4} />
                <PlatinumCard index={5} />
                <PlatinumCard index={6} />
                <PlatinumCard index={7} />
                <PlatinumCard index={8} />
                <PlatinumCard index={9} />
                <PlatinumCard index={10} />
            </div>
            <div className="mt-10">
                <Title title={'Gold'} />
            </div>
            <div className="flex flex-wrap gap-10 mt-5 Gold">
                <GoldCard index={1} />
                <GoldCard index={2} />
                <GoldCard index={3} />
                <GoldCard index={4} />
                <GoldCard index={5} />
                <GoldCard index={6} />
                <GoldCard index={7} />
                <GoldCard index={8} />
                <GoldCard index={9} />
                <GoldCard index={10} />
            </div>
            <div className="mt-10">
                <Title title={'Silver'} />
            </div>
            <div className="flex flex-wrap gap-10 mt-5 Silver">
                <SilverCard index={1} />
                <SilverCard index={2} />
                <SilverCard index={3} />
                <SilverCard index={4} />
                <SilverCard index={5} />
                <SilverCard index={6} />
                <SilverCard index={7} />
                <SilverCard index={8} />
                <SilverCard index={9} />
                <SilverCard index={10} />
            </div>
        </div>
    )
}

export default BuyFirstPagePosition

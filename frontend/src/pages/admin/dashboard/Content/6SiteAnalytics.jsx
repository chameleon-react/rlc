import React, { useState } from 'react'
import Title from '../components/Title'
import GroupButton from './components/GroupButton'
import { Line,Doughnut } from 'react-chartjs-2'
import { useEffect } from 'react'
import backendIP from '../../../../backendIP'
import axios from 'axios'
// eslint-disable-next-line
import Chart from 'chart.js/auto';

function SiteAnalytics() {
  const [selection, setSelection] = useState(1)
  const [data, setData] = useState([])
  const [labels, setLabels] = useState([])
  const device =  {
    labels: [
      'Mobile',
      'Desktop',
      
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [30, 50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderColor:'#fff',
      hoverOffset: 4
    }],
    
  };

const apiFetch = () =>{
  if (selection === 1) {
    axios.get(`${backendIP}analatics/report/weekly`).then(res => {
      setData([])
      setLabels([])
      // eslint-disable-next-line
      res.data.reverse().map(e=>{
        setData(pre=>[...pre,e.view])
        setLabels(pre=>[...pre,e.date])
      })
    })
  }

  if (selection === 2) {
    axios.get(`${backendIP}analatics/report/monthly`).then(res => {
      setData([])
      setLabels([])
      // eslint-disable-next-line
      res.data.reverse().map(e=>{
        setData(pre=>[...pre,e.view])
        setLabels(pre=>[...pre,e.date])
      })
    })
  }


  if (selection === 3) {
    axios.get(`${backendIP}analatics/report/yearly`).then(res => {
      setData([])
      setLabels([])
      // eslint-disable-next-line
      res.data.reverse().map(e=>{
        setData(pre=>[...pre,e.view])
        setLabels(pre=>[...pre,e.date])
      })
    })
  }

  if (selection === 4) {
    axios.get(`${backendIP}analatics/report/yearly`).then(res => {
      setData([])
      setLabels([])
      // eslint-disable-next-line
      res.data.reverse().map(e=>{
        setData(pre=>[...pre,e.view])
        setLabels(pre=>[...pre,e.date])
      })
    })
  }
}

  useEffect(() => {
      apiFetch()
      // eslint-disable-next-line
  }, [selection])

  const datas = {
    labels: labels,
    datasets: [{
      label: 'views',
      data: data,
      pointRadius: 5,
      pointHoverRadius: 10,
      borderColor: '#1A73E8',
      tension: 0.3
    }]

  }
  return (
    <div className="">
      <Title title={'Site Analytics'} />
      <GroupButton />
      <div className="div flex justify-center md:justify-start  w-full border-b gap-10  text-lg font-assistant mt-10">
        <button className={`${selection === 1 && 'border-b-[3px]'} border-green-500`} onClick={() => setSelection(1)}>Weekly</button>
        <button className={`${selection === 2 && 'border-b-[3px]'} border-[#5ecfff]`} onClick={() => setSelection(2)}>Monthly</button>
        <button className={`${selection === 3 && 'border-b-[3px]'} border-[#e328af]`} onClick={() => setSelection(3)}>Yearly</button>
        <button className={`${selection === 4 && 'border-b-[3px]'} border-[#6426c3]`} onClick={() => setSelection(4)}>All</button>
      </div>
      <div className="flex mt-5 pr-10 gap-5">
        <div className="w-[750px] h-[27rem] border">
          <Line data={datas} />
        </div>

        <div className="w-[300px] h-[27rem] border">
          <div className="mt-10 pl-10 border-b border-dashed">
              <h3>Real Time Users</h3>
              <h1 className='text-[36px]'>0</h1>
          </div>
          <div className="">
              <Doughnut width={100} height={100} data={device} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteAnalytics
import React from 'react'
import './DashboardPage.scss'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

import { axisClasses } from '@mui/x-charts';
export default function DashboardPage() {

  
  const data = [
    { label: 'Restaurants', value: 400 , color: '#60009b'},
    { label: 'Hotels', value: 300 ,color: '#2731c8'},
    { label: 'Activities', value: 300,color: '#b800d8' },
  ];
  
 
  const chartSetting = {

    width: 700,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'rotate(-90deg) translate(0px, -20px)',
      },
    },
  };
  const dataset = [
    {
      Reels: 59,
      Comments: 57,
      bookings: 86,
      Visitors: 21,
      month: 'Jan',
    },
    {
      Reels: 50,
      Comments: 52,
      bookings: 78,
      Visitors: 28,
      month: 'Fev',
    },
    {
      Reels: 47,
      Comments: 53,
      bookings: 106,
      Visitors: 41,
      month: 'Mar',
    },
    {
      Reels: 54,
      Comments: 56,
      bookings: 92,
      Visitors: 73,
      month: 'Apr',
    },
    {
      Reels: 57,
      Comments: 69,
      bookings: 92,
      Visitors: 99,
      month: 'May',
    },
    {
      Reels: 60,
      Comments: 63,
      bookings: 103,
      Visitors: 144,
      month: 'June',
    },
    {
      Reels: 59,
      Comments: 60,
      bookings: 105,
      Visitors: 319,
      month: 'July',
    },
    {
      Reels: 65,
      Comments: 60,
      bookings: 106,
      Visitors: 249,
      month: 'Aug',
    },
    {
      Reels: 51,
      Comments: 51,
      bookings: 95,
      Visitors: 131,
      month: 'Sept',
    },
    {
      Reels: 60,
      Comments: 65,
      bookings: 97,
      Visitors: 55,
      month: 'Oct',
    },
    {
      Reels: 67,
      Comments: 64,
      bookings: 76,
      Visitors: 48,
      month: 'Nov',
    },
    {
      Reels: 61,
      Comments: 70,
      bookings: 103,
      Visitors: 25,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value}mm`;
  
 
  return (
    <div className='admin-dashboard'>
 <div className="app-main">
      <div className="main-header-line">
        <section>
           <h1>Admin Dashboard</h1>
        <p>Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard Admin Dashboard </p>
        </section>
        <div className="action-buttons">
        </div>
      </div>
      <div className="chart-row three">
        <div className="chart-container-wrapper">
          <div className="chart-container">
            <div className="chart-info-wrapper">
              <h2>Applications</h2>
              <span>20.5 K</span>
            </div>
            <div className="chart-svg">
              <svg viewBox="0 0 36 36" className="circular-chart pink">
                <path className="circle-bg" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="30, 100" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x={18} y="20.35" className="percentage">30%</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="chart-container-wrapper">
          <div className="chart-container">
            <div className="chart-info-wrapper">
              <h2>Shortlisted</h2>
              <span>5.5 K</span>
            </div>
            <div className="chart-svg">
              <svg viewBox="0 0 36 36" className="circular-chart blue">
                <path className="circle-bg" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="60, 100" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x={18} y="20.35" className="percentage">60%</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="chart-container-wrapper">
          <div className="chart-container">
            <div className="chart-info-wrapper">
              <h2>On-hold</h2>
              <span>10.5 K</span>
            </div>
            <div className="chart-svg">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path className="circle-bg" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle" strokeDasharray="90, 100" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x={18} y="20.35" className="percentage">90%</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
<section className='charts'>
  <section className='pieChart'>
 <PieChart
        series={[
          {
            innerRadius: 86,
            outerRadius: 120,
            paddingAngle: 4,
            cornerRadius: 10,
            startAngle: -89,
            endAngle: 270,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={300}
        height={310}
        legend={{ hidden: false }}
      ></PieChart>

{/* <PieChart
  series={[
    {
      data,
      innerRadius: 65,
      outerRadius: 100,
      paddingAngle: 2,
      cornerRadius: 8,
      startAngle: -99,
      endAngle: 272,
      cx: 150,
      cy: 150,
    }]}
/> */}


  <span>Total</span>
      </section>
     
     <section className='barChart'>
     <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'Reels', label: 'Reels', valueFormatter,color:'#fff'  },
        { dataKey: 'Comments', label: 'Comnts', valueFormatter, color:'#b100d0' },
        { dataKey: 'bookings', label: 'Bookings', valueFormatter, color:'#2731c8' },
        { dataKey: 'Visitors', label: 'Visitors', valueFormatter ,color:'#02b2af'},
      ]}
      {...chartSetting}
    />
     </section>

     

</section>
    
    </div>
   

    </div>
  )
}

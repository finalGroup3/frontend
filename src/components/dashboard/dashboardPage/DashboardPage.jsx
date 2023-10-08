import React from 'react'
import './DashboardPage.scss'

export default function DashboardPage() {
  return (
    <div className='nnnnnnn'>
 <div className="app-main">
      <div className="main-header-line">
        <h1>Applications Dashboard</h1>
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
    </div>


    </div>
  )
}

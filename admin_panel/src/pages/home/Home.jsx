import React from 'react'
import "./home.css"
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import Chart from '../../components/chart/Chart'

export default function Home() {
  return (
    <div className='home'>
      <FeatureInfo/>
      <Chart/>
      </div>
  )
}

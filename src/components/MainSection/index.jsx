import React from 'react'
import { MainCarousel } from './MainCarousel'
import { mainSectionData } from '../../mock/mainSectionData'

export const MainSection = () => {
  return (
    <div className='w-full -z-50'>
      <MainCarousel data={mainSectionData}  />
    </div>
  )
}

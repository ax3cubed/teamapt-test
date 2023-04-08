import React from 'react'
import TopBar from '../../components/TopBar'
import { MainSection } from '../../components/MainSection'
import { Products } from '../../components/Products'
import { BottomNavigation } from '../../components/BottomNavigation'

export const Home = () => {
  return (
    <>
        <TopBar/>
        <MainSection/>
        <Products/>
        <BottomNavigation/>
    </>
  )
}

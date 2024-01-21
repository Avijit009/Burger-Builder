import React from 'react'
import BurgerBuilder from './burgerBuilder/BurgerBuilder'
import Header from './header/Header'

const MainComponent = () => {
  return (
    <div>
        <Header/>
        <BurgerBuilder/>
    </div>
  )
}

export default MainComponent
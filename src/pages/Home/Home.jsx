import React from 'react'
import './Home.css'

import TopLayout from '../../components/TopLayout/TopLayout'
import ExpenseList from '../../components/ExpenseList/ExpenseList'


const Home = () => {
  return (
    <div className='home'>
        <TopLayout />
        <ExpenseList />
    </div>
  )
}

export default Home
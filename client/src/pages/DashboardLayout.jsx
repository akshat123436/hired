import React from 'react'
import { BigSideBar, SmallSideBar, Navbar } from '../components'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
function DashboardLayout() {
  return (
    <Wrapper>
    <main className="dashboard">
      <SmallSideBar></SmallSideBar>
      <BigSideBar></BigSideBar>
      <div>
        <Navbar>

        <div className='dashboard-page'><Outlet/></div>
        </Navbar>
      </div>
    </main>
    </Wrapper>
  )
}

export default DashboardLayout
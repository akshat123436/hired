import React, { createContext, useContext, useState } from 'react'
import { BigSideBar, SmallSideBar, Navbar } from '../components'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
const DashboardContext = createContext();
function DashboardLayout() {
  const user = {name : "akshat"};
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setisDarkTheme] = useState(false);

  const toggleDarkTheme = ()=>{
    console.log("toggle");
  }
  const toggleSideBar = ()=>{
    setShowSidebar(!showSidebar);
  }
  const logoutUser = ()=>{
    console.log("logout");
  }

  return (
    <DashboardContext.Provider
      value = {
        {
          user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSideBar, logoutUser
        }
      }
    >
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
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = ()=> useContext(DashboardContext);
export default DashboardLayout
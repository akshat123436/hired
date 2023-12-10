import React, { createContext, useContext, useState } from 'react'
import { BigSidebar, SmallSidebar, Navbar } from '../components'
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
  const toggleSidebar = ()=>{
    setShowSidebar(!showSidebar);
  }
  const logoutUser = ()=>{
    console.log("logout");
  }

  return (
    <DashboardContext.Provider
      value = {
        {
          user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser
        }
      }
    >
    <Wrapper>
    <main className="dashboard">
      <SmallSidebar></SmallSidebar>
      <BigSidebar></BigSidebar>
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
import React from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'

function SmallSideBar() {
    const data = useDashboardContext();
    console.log(data);
  return (
    
    <div>SmallSideBar</div>
  )
}

export default SmallSideBar
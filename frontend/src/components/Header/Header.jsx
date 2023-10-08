import React from 'react'
import logo from "../../assets/images/logo1.png"

const Header = () => {
  return (
  <header>
    <div className="container">
      <div className="flex items-center justify-between">
        {/* =========Logo======== */}
        <div>
            <img src={logo} alt=''/>
        </div>
      </div>
    </div>
  </header>
  ) 
}

export default Header
import Logo from './logo'
import Socials from './socials'
import Navigation from './navigation'

import { Link } from 'react-scroll'

import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="header">
        <Logo />
        <div className="web-menu">
          <Navigation />
        </div>
        <div className="mob-menu" onClick={() => setOpen(!open)}>
          <img src="/assets/img/icons/menu.svg" />
          {open && <div className="menu-mask" onClick={() => setOpen(!open)}></div>}
          {open && (
            <div className="open-menu">
              <div>
                <img src="/assets/img/icons/cross.svg" />
              </div>
              <Navigation />
            </div>
          )}
        </div>
        {/* <Socials /> */}
      </div>
    </div>
  )
}

export default Header

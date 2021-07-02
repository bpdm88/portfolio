import Navigation from './navigation'

import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="header">
        <img src="/assets/img/icons/bm-logo-green.svg" />
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
      </div>
    </div>
  )
}

export default Header

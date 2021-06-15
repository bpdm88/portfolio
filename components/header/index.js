import Logo from './logo'
import Socials from './socials'
import Navigation from './navigation'

const Header = () => {
  return (
    <div>
      <div className="header">
        <Logo />
        {/* <Navigation /> */}
        <Socials />
      </div>
    </div>
  )
}

export default Header

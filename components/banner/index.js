import { Link } from 'react-scroll'
import Button from '../button'

const Banner = () => {
  return (
    <div className="banner">
      <div className="welcome-container">
        <div className="welcome-title">
          <h1 className="heading--alpha slide-in-title">Hello I'm Ben.</h1>
        </div>
        <div className="welcome-subsection">
          <p className="slide-in-subtitle heading--bravo">
            I'm a software developer from Bristol who enjoys building great user experiences with
            clean and efficent code.
          </p>
          <Link to="about" spy={true} smooth={true}>
            <div className="slide-in-btn">
              <Button type="primary">Learn More</Button>
            </div>
          </Link>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" className="wave">
        <path
          fill="#fbfeff"
          fill-opacity="1"
          d="M0,320L60,288C120,256,240,192,360,186.7C480,181,600,235,720,245.3C840,256,960,224,1080,181.3C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default Banner

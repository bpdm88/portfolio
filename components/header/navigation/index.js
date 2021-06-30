import { Link } from 'react-scroll'

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="nav">
          <Link to="about" spy={true} smooth={true}>
            <li>About</li>
          </Link>
          <Link to="projects" spy={true} smooth={true}>
            <li>Projects</li>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation

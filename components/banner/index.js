import Button from '../button/primary'

const Banner = () => {
  return (
    <div className="banner">
      <div className="welcome-container">
        <div className="welcome-title">
          <h1 className="heading--alpha slide-in-title">Hello I'm Ben</h1>
        </div>
        <div className="welcome-subsection">
          <p className="slide-in-subtitle heading--bravo">
            I'm a software developer from Bristol who enjoys building great user experiences with
            clean and efficent code.
          </p>
          <div className="slide-in-btn">
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
      <div>
        <div className="cog-1 rotate">
          <img src="/assets/img/cogs/cog1.svg" />
        </div>
        <div className="cog-2 reverse">
          <img src="/assets/img/cogs/cog2.svg" />
        </div>
        <div className="cog-3 rotate">
          <img src="/assets/img/cogs/cog3.svg" />
        </div>
      </div>
    </div>
  )
}

export default Banner

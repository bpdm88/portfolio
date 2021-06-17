const About = () => {
  return (
    <section className="about">
      <h3 className="heading--charlie">About</h3>
      <div className="about-content">
        <div className="about-me">
          <div className="profile">
            <img src="/assets/img/profile.jpg" className="profile-photo" />
            <div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>
          </div>
          <div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
            </p>
          </div>
        </div>
        <div className="about-skills">
          <img src="/assets/img/icons/js.svg" className="logo" />
          <img src="/assets/img/icons/react.svg" className="logo" />
          <img src="/assets/img/icons/redux.svg" className="logo" />
          <img src="/assets/img/icons/next.svg" className="logo" />
          <img src="/assets/img/icons/html.svg" className="logo" />
          <img src="/assets/img/icons/css.svg" className="logo" />
          <img src="/assets/img/icons/tailwind.svg" className="logo" />
          <img src="/assets/img/icons/node.svg" className="logo" />
          <img src="/assets/img/icons/vscode.svg" className="logo" />
          <img src="/assets/img/icons/git.svg" className="logo" />
          <img src="/assets/img/icons/npm.svg" className="logo" />
          <img src="/assets/img/icons/mongo.svg" className="logo" />
        </div>
      </div>
    </section>
  )
}

export default About

const About = () => {
  return (
    <section className="about wrapper" id="about">
      <div className="title">
        <img src="/assets/img/icons/title.svg" className="title-logo" />
        <h3 className="heading--charlie">Here's A Little Bit About Me</h3>
      </div>
      <div className="about-content">
        <div className="about-me">
          <div className="profile">
            <img src="/assets/img/photos/profile.jpg" className="profile-photo" />
            <div>
              <p>
                After working in financial services for a number of years I transitioned into
                working in tech as a software developer after attending the Develop Me tech
                accelerator course. I’m currently employed as a front-end developer working with
                JavaScipt technologies primarily React.
              </p>
            </div>
          </div>
          <div>
            <p>
              I became interested into learning the skills required to be a software developer after
              experiences within the development process. Initially as an end user for a web app
              which was built for the team I was a part of and then working as a business analyst
              for a savings platform. I love learning about new technologies and have focused my
              efforts on JavaScript since becoming a developer, additionally I enjoy trying to
              improve my understanding and application of design.
            </p>
          </div>
        </div>
        <div className="about-skills">
          <div className="skill-card arrow">
            <img src="/assets/img/icons/js.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/react.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/redux.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/next.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/html.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/css.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/tailwind.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/node.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/vscode.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/git.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/npm.svg" className="logo" />
          </div>
          <div className="skill-card arrow">
            <img src="/assets/img/icons/mongo.svg" className="logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import Card from './card'

const Projects = () => {
  return (
    <section className="projects wrapper" id="projects">
      <div className="title">
        <img src="/assets/img/icons/title.svg" className="title-logo" />
        <h3 className="heading--charlie">Check Out Some Of My Work</h3>
      </div>
      <div className="projects-container">
        <Card
          icon="shelf"
          title="Shelf - Link Manager"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
          link="https://shelf-link-manager.netlify.app/"
          code="https://shelf-link-manager.netlify.app/"
        />
        <Card
          icon="football"
          title="Futbol 5-Aside"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
          link="https://shelf-link-manager.netlify.app/"
          code="https://shelf-link-manager.netlify.app/"
        />
        <Card
          icon="currency"
          title="FX Converter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
          link="https://shelf-link-manager.netlify.app/"
          code="https://shelf-link-manager.netlify.app/"
        />
      </div>
    </section>
  )
}

export default Projects

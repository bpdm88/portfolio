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
          description="Shelf is a full stack app built using the MERN stack with react hooks. The app allows a user to sign up to there own account and manage there links in one place. It's possible for users to  add, edit, filter and delete entries. The app was deployed on Heroku and Netifly."
          link="https://shelf-link-manager.netlify.app/"
          code="https://github.com/bpdm88/link-manager"
        />
        <Card
          icon="football"
          title="Futbol 5-Aside"
          description="This project was an technical challenge over two weeks after completinig the DevelopMe course. A React / Redux app using class based components that allows users to create and customise two randomly selected five a side teams and return match conditions plus a result."
          link="https://bpdm88.github.io/football-picker/"
          code="https://github.com/bpdm88/football-picker"
        />
        <Card
          icon="currency"
          title="FX Converter"
          description="A React app built with hooks that allows users to see the latest exchange rates against pound sterling and use the converter to get an exchange rate for a pair of currencies with up to 20 currencies available. The app uses a third party API to make two seperate GET requests."
          link="https://bpdm88.github.io/currency/"
          code="https://github.com/bpdm88/currency"
        />
      </div>
    </section>
  )
}

export default Projects

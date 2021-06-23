import Button from '../button/primary'

const Contact = () => {
  return (
    <section className="contact wrapper">
      <div className="title">
        <img src="/assets/img/icons/title.svg" className="title-logo" />
        <h3 className="heading--charlie">Getting In Touch With Me</h3>
      </div>
      <div className="contact-container">
        <div className="contact-details">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
        </div>
        <div className="contact-btns">
          <div className="contact-btn-container">
            <div className="contact-btn-icon">
              <img src="/assets/img/icons/cv.svg" />
              <p>Download my Curriculum Vitae here:</p>
            </div>
            <Button type="tertiary">Download</Button>
          </div>
          <div className="contact-btn-container">
            <div className="contact-btn-icon">
              <img src="/assets/img/icons/mail.svg" />
              <p>You can email me here:</p>
            </div>
            <Button type="tertiary">Email</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

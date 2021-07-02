import Button from '../button'

const Contact = () => {
  return (
    <section className="contact wrapper" id="contact">
      <div className="title">
        <img src="/assets/img/icons/title.svg" className="title-logo" />
        <h3 className="heading--charlie">Getting In Touch With Me</h3>
      </div>
      <div className="contact-container">
        <div className="contact-details">
          <p>
            If you want to get in touch about any possible opportunities you're able to email me
            using the contact button. Alternatively, you can contact me though my LinkedIn page. You
            can download my most recent curriculum vitae in this section for further information on
            me.
          </p>
        </div>
        <div className="contact-btns">
          <div className="contact-btn-container">
            <div className="contact-btn-icon">
              <img src="/assets/img/icons/cv.svg" />
              <p>Download my Curriculum Vitae here:</p>
            </div>
            <a href="assets/docs/Curriculum_Vitae_-_Benjamin_Main_2021.docx" download>
              <Button type="tertiary">Download</Button>
            </a>
          </div>
          <div className="contact-btn-container">
            <div className="contact-btn-icon">
              <img src="/assets/img/icons/mail.svg" />
              <p>You can email me here:</p>
            </div>
            <a href="mailto:benjamin.main88@gmail.com" target="_blank">
              <Button type="tertiary">Email</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

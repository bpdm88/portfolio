import Button from '../../button/primary'

const Card = ({ icon, title, description, link, code }) => {
  return (
    <div className="card">
      <div className="card-title">
        <img src={`/assets/img/logos/${icon}.svg`} />
        <h3 className="heading--delta">{title}</h3>
      </div>
      <div className="card-description">
        <div className="chat">
          <img src="/assets/img/icons/chat.svg" />
        </div>
        <p>{description}</p>
      </div>
      <div className="card-btns">
        <a href={link} target="_blank">
          <Button primary={false}>Live</Button>
        </a>
        <a href={code} target="_blank">
          <Button primary={false}>Code</Button>
        </a>
      </div>
    </div>
  )
}

export default Card

const Button = ({ children, primary }) => {
  return <button className={primary ? 'btn-primary' : 'btn-secondary'}>{children}</button>
}

export default Button

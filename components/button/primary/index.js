const Button = ({ children, type }) => {
  return (
    <button
      className={
        type === 'primary'
          ? 'btn-primary'
          : type === 'secondary'
          ? 'btn-secondary'
          : type === 'tertiary'
          ? 'btn-tertiary'
          : null
      }
    >
      {children}
    </button>
  )
}

export default Button

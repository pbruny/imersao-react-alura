import React from 'react' 

const Button = ({ link, label, className }) => {
  return (
    <a className={className} href={link}>
      {label}
    </a>
  )
}

export default Button
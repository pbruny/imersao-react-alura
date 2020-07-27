import React from 'react' 

const Button = ({ link, children, className }) => {
  return (
    <a className={className} href={link}>
      {children}
    </a>
  )
}

export default Button
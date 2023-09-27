import React from 'react'
import clsx from 'clsx';

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: string
}

const Button = ({className, children, ...rest}: OwnProps) => {
  return (
    <button className={clsx("p-2 px-4 bg-blue-600 rounded text-white", className)} {...rest}>{children}</button>
  )
}

export default Button
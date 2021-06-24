import React, { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLButtonElement> & {}

export const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button
      className={`p-2 bg-green-500 rounded text-white hover:bg-green-600 ${className}`}
    >
      {children}
    </button>
  )
}

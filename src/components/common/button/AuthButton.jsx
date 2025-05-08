import React from 'react'

const AuthButton = ({color,hover,text,disabled}) => {
  return (
    <button disabled={disabled} type='submit' className={`py-2 shadow-sm px-6 rounded-full w-full duration-300 ease-linear ${color} ${hover} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {text}
    </button>
  )
}

export default AuthButton

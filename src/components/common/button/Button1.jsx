import React from 'react'

const Button1 = ({text,color,hover}) => {
  return (
    <button className={`py-2 px-6 cursor-pointer  rounded-full w-full duration-300 ease-linear ${color} ${hover}`} >
        {text}
    </button>
  )
}

export default Button1
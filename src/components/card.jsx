import React from 'react'

const card = ( { bg= "bg-gray-100", children}) => {
  return (
    <div>
        <div>
        <div className={`${bg} inline-block mx-10 p-5 leading-8 rounded-3xl shadow-2xl`}>
            {children}
        </div>
        </div>

    </div>
  )
}

export default card
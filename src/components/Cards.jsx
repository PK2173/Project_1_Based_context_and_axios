import React from 'react'

const Cards = (props) => {
    
  return (
    
        <div className="max-w-sm w-fit rounded overflow-hidden shadow-lg">
            <img className="w-full" src={props.recip.image} alt={props.recip.title} />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.recip.title}</div>
            <p className="text-gray-700 text-base">
                {props.recip.description}
            </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${props.recip.price}</span>
            </div>
        </div>
    
  )
}

export default Cards
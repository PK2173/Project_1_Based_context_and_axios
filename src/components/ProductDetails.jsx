import React from 'react'

function ProductDetails(props) {
    console.log('ProductDetails props:', props.recip);
    
  return (
    <div className="fixed inset-0 w-screen bg-transparent bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
  <div className="bg-white rounded-2xl shadow-2xl  w-[70%] p-10 object-contain flex flex-col md:flex-row overflow-hidden">
    
    {/* Image Section */}
    <div className="md:w-1/2">
      <img src={props.recip.image} alt={props.recip.title} className="object-cover max-w-[70%]" />
    </div>

    {/* Details Section */}
    <div className="md:w-1/2 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{props.recip.title}</h2>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Category:</span> {props.recip.category}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Description:</span> {props.recip.description}</p>
        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Rating:</span> {props.recip.rate} ⭐</p>
        <p className="text-sm text-gray-600 mb-4"><span className="font-medium">In Stock:</span> {props.recip.count}</p>
      </div>

      <button 
        onClick={() => props.setproductInfo(-1)} 
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </div>
</div>

  )
}

export default ProductDetails
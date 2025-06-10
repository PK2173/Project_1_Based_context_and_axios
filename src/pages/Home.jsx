import React, { useContext, useEffect, useState } from 'react'
import { recipecontext } from '../context/RecipeContext';
import Cards from '../components/Cards';
import ProductDetails from '../components/ProductDetails';

const Home = () => {
  const {data, fetchData} = useContext(recipecontext);

  useEffect(() => {
    (async () => {
      try {
        await fetchData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [])

  const [productInfo, setproductInfo] = useState(-1)
  console.log(data);
  
  return (
    <div>
      {productInfo > -1 ? <ProductDetails recip={data[productInfo]} setproductInfo={setproductInfo} /> : null}
    <div className="flex flex-wrap justify-around items-center w-screen h-screen bg-gray-100">
      {data.map((recip)=>{
        return (
          <div key={recip.id} className="mb-4 w-fit wrap-normal flex justify-around items-center" onClick={(e)=>{setproductInfo(recip.id - 1)}}>
              <Cards recip={recip}/>
            </div>
        )
      })}
    </div>
    </div>
  )
}

export default Home
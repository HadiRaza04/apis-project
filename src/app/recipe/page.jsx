'use client'
import React, { useState } from 'react'

const page = () => {
    const [data, setData] = useState({});
    const [dishName, setDishName] = useState("");


    const getData =  async (dish) => {
        let url = "https://themealdb.com/api/json/v1/1/search.php?s="
      fetch(url + dish)
      // let response = await res.json();
      // setData(res.meals[0])
      .then((res) => res.json())
      .then((item) => setData(item.meals[0]))
      console.log(data);
        // console.log(dishName);
    }
  return (
    <div className='flex flex-col p-5 justify-between items-center'>
      <input type="text" className='p-3 m-4 rounded-md bg-blue-100 outline-none' placeholder='biryani, roti, big mac' onChange={(e) => setDishName(e.target.value)} />
      <button className='px-5 py-3 bg-blue-300 rounded-md hover:bg-blue-400' onClick={() => getData(dishName)}>Search</button>
      {
        data ? (
          <div className='flex m-5 p-4 flex-col w-[80%] overflow-scroll h-[400px] rounded-lg bg-gray-300'>
            <h1 className='text-4xl m-4'>Recipee</h1>
            <p><span className='font-bold'>IdMeal:</span> {data.idMeal}</p>
            <p><span className='font-bold'>Street Area:</span> {data.strArea}</p>
            <p><span className='font-bold'>Instructions:</span> {data.strInstructions}</p>
          </div>
        ) : <p className='text-black'>Data not found</p>
      }
    </div>
  )
}

export default page
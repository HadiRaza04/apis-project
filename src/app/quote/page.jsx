'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';

const page = () => {
  const [quote, setQuote] = useState({})
    const getQuote =  () => {
      fetch("https://api.quotable.io/random")
      .then((data) => data.json())
      .then((item) => setQuote(item))
      console.log(quote.content);
    }
  
  return (
    <div className='flex flex-col justify-center  h-screen items-center'>
      <button className='bg-blue-400 hover:bg-blue-500  p-4 rounded-md' onClick={getQuote}>Get Quote</button>
      {
        !quote.content ? <p>Qoute not found!</p> : (
          <div className='text-black p-4 rounded-lg bg-slate-300 mt-4 lg:w-[50%] w-[80%]'>
            {quote.content}
            <span className='bg-black text-white p-1'>Author: {quote.author}</span>
          </div>
        )
      }
    </div>
  )
}

export default page
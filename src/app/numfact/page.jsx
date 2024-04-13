'use client'
import React, { useState } from 'react'

const page = () => {
    const [data, setData] = useState("");
    const [num, setNum] = useState("");
    const [err, setErr] = useState(false);
    const getFact = (number) => {
        const url = "http://numbersapi.com/"
        fetch(url + number)
        .then((res) => res.text())
        .then((item) => setData(item))
        console.log(data);
    }
  return (
    <div className='flex flex-col justify-center items-center m-auto w-[50%]'>
        <input className='outline-none p-3 w-[500px] m-3 bg-blue-200' type="number" required placeholder='Type any number between 0 t0 300' onChange={(e) => setNum(e.target.value)} />
        {
            err && <p className='text-red-500'>Enter number between 0 to 300</p> 
        }
        <button 
            className='px-3 py-3 m-2 bg-blue-300 rounded-md' 
            onClick={() => {
                if(num<=300 ) {
                    if(num >= 0) {
                        getFact(num)
                        setNum("");
                        setErr(false);
                    }
                    else {
                        setErr(true)
                    }
                }else {
                    setErr(true)
                }
            }}
        >Get Fact</button>
        {
            data && (
                <p className='bg-gray-200 p-4'>{data}</p>
            ) 
        }
    </div>
  )
}

export default page
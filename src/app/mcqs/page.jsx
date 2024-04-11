'use client'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://opentdb.com/api.php?amount=1')
    //     .then(res => res.json())
    //     // .then(data => JSON.parse(data))
    //     .then(data => setData(data.results))

    // }, [])
   
    
  // useEffect(() => {
    
  //   async function getData() {
  //     const res = await fetch('https://opentdb.com/api.php?amount=5');
      

  //     setData(res);
  //     console.log(res);
  //   }
  //   getData();
  
    
  // }, [])
  



  return (
    <div>
        {/* {data[0].correct_answer} */}
        <button className='bg-blue-500 p-2 m-3' >Get Mcqs</button>
        hello from mcqs
    </div>
  )
}

export default page
'use client'
import  {useState}  from 'react'

const page = () => {
    const [username, setUsername] = useState("");
    const [data, setData] = useState("");

    async function searchResult() {
        const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${username}`);
        setData(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${username}`);
        // console.log(res);
    }
  return (
    <div>
        <input type="text" className='text-black m-4 p-2 bg-gray-300 border-none outline-none hover:outline-none' placeholder='Enter url' onChange={(e) => setUsername(e.target.value)} />
        <button className='bg-blue-500 p-2 hover:bg-blue-400' onClick={searchResult}>Create QR code</button>
        {
            data ? (
                <>
                 <img className='m-4' src={data} alt='qr-code' /> 
                 <a className='text-blue-400 m-4' href={username} target='_blank'>{username}</a>
                </>
                ):  <p className='block'>"data not found"</p>
        }
    </div>
  )
}
export default page
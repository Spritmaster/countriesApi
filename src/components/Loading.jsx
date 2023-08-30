import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#eeeeee] absolute left-0 top-0 flex items-center justify-center'>
        <AiOutlineLoading3Quarters className='w-[100px] h-[100px] animate-spin'/>
    </div>
  )
}

export default Loading
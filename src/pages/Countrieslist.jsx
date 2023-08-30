import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { NavLink } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
import Loading from '../components/Loading'
const Countrieslist = () => {

  const [api,setApi] = useState(`https://countries-api-v7sn.onrender.com/countries?limit=250`)
  const all ='https://countries-api-v7sn.onrender.com/countries?limit=250'

  const { data, loading, error} =useFetch(api)

  {data && console.log(data)}

const handleSearch=(e)=>{ 
  e.preventDefault()
  setApi(`https://countries-api-v7sn.onrender.com/countries?search=${e.target.value}`)
  }
const selectRegion=(e)=>{
  if(e.target.value==="All"){
    setApi('https://countries-api-v7sn.onrender.com/countries?limit=250')
  }
  else{
    setApi(`https://countries-api-v7sn.onrender.com/countries?region=${e.target.value}`)
  }
}
  return (
    <div className=' max-w-[1400px] mx-[auto] px-[1.4rem] lg:px-[8rem] pt-[4.8rem] '>
      <div className='flex flex-col md:flex-row justify-between mb-[5rem]'>
      <span className='relative'>
      <ImSearch className='absolute left-[3rem] top-[1.3rem]'/>
      <input
      className='w-[380px] lg:w-[480px] pl-[7.4rem] py-[1rem] rounded-[5px]] outline-none border-none input-shadow rounded-[5px]' 
      type="text"  
      onChange={handleSearch}
      placeholder='Search for a country'/>
      </span>
      
      <select   onChange={selectRegion}  className='input-shadow w-[200px] px-[2rem] border-none outline-none'>
        <option value="All" >All</option>
        <option value="Africa" >Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
</select>
      </div>
     
     <div className=' h-[100vh] grid  dark:bg-[#000]   grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[2rem] pl-[2rem]'   >
      {data && data.data.map((countrie)=>{
        return(
          <NavLink to={`countrie/${countrie.name.common}`} key={countrie._id}>
        <div className='inline-block w-[26.4rem] h-[336px] bg-[#fafafa]  rounded-[5px] shadow-[0px 0px 7px 2px rgba(0, 0, 0, 0.03)] overflow-hidden list-shadow' >
          <img className='w-[264px] h-[160px]' src={countrie.flags.png} alt=""  />
          <div className='ml-[2.4rem]'>
          <h1 className='mt-[2.4rem] text-[1.8rem] text-[#111517] font-extrabold leading-[1.4]'>{countrie.name.common}</h1>

          <p className='taxt-[1.4rem] font-semibold mt-[1.6rem]'>Population: <span  className='font-[300]'>{countrie.population}</span></p>
          <p className='taxt-[1.4rem] font-semibold mt-[0.8rem]'>Region: <span className='font-[300]'>{countrie.region}</span></p>
          <p className='taxt-[1.4rem] font-semibold mt-[0.8rem]'>Capital: <span className='font-[300]'>{countrie.capital[0]}</span></p>
          </div>
        </div>
        </NavLink>
        )
      })}
      {loading && <Loading/>}
      {error && <div className='w-[100vw] h-[100vh] bg-[#eeeeee] absolute left-0 top-0 flex items-center justify-center'>
        <h1 className='text-[3rem]'>{error}</h1>
    </div>}
    </div>
     
    </div>
  )
}
  
 


export default Countrieslist
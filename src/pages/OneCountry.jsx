import React, { useState, useEffect } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { BsArrowLeft } from 'react-icons/bs';
import '../App.css'
import Loading from '../components/Loading';

const OneCountry = () => {
  const { id } = useParams();
  const [bordeerCountrie,setborderCountrie] =useState(id)
  const url = `https://countries-api-v7sn.onrender.com/countries?limit=250`;
  const { data, loading, error } = useFetch(url);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (data) {
      const country = data.data.find((coun) => coun.name.common === bordeerCountrie);
      setItem(country);
    }
  }, [data, bordeerCountrie]);

  const navigate =useNavigate()

  const backHome =(()=>{
    navigate("/")
    console.log("salom");
  })

  const changeName = (borderC)=>{
    setborderCountrie(borderC)
  }

  return (
    <div className='max-w-[1400px] mx-[auto] px-[1.3rem] lg:px-[8rem] '>
      <span className='flex gap-4 items-center cursor-pointer font-light py-[1rem] w-[13.6rem] justify-center rounded-[6px] mt-[5rem] dark:bg-[#2B3844] dark:text-[#fff]' onClick={()=>backHome()}>
        <BsArrowLeft className='dark:text-[#fff]'/> Back
      </span>
      <span className='w-[100vw] h-[100vh] dark:bg-[#202C36;] absolute left-0 top-0 z-[-1]'></span>
      {item && 
      <div className='flex gap-[10rem] items-center mt-[8rem] flex-col lg:flex-row'>
        {console.log(item)}

        <img className='xl:w-[560px] xl:h-[401px] sm:w-[365px] sm:h-[230px] md:w-[460px] md:h-[300px] object-cover rounded-[1rem] shadow-[ 0px 0px 14px 4px rgba(0, 0, 0, 0.03)] list-shadow' src={item.flags.svg} alt="" />

        <div>

        <h1 className='text-[3.2rem] font-extrabold mb-[2.3rem] dark:text-[#fff]'>{item.name.common ? item.name.common: "No information"}</h1> 

        <div className='flex gap-[3rem] flex-col md:flex-row'>
           <div className='max-w-[300px]'>
            

            <p className='font-semibold dark:text-[#fff]'>Native Name: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.name.nativeName ? item.name.nativeName: "No information"}</span></p>
            <p className='font-semibold dark:text-[#fff]'>Population: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.population ? item.population: "No information"}</span></p>
            <p className='font-semibold dark:text-[#fff]'>Region: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.region ? item.region: "No information"}</span></p>
            <p className='font-semibold dark:text-[#fff]'>Sub Region: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.subregion ? item.subregion: "No information"}</span></p>
            <p className='font-semibold dark:text-[#fff]'>Capital: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.capital[0] ? item.capital[0]: "No information"}</span></p>
           </div>
           <div>
           <p className='font-semibold dark:text-[#fff]'>Top Level Domain: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.cca3 ? item.cca3: "No information"}</span></p>
            <p className='font-semibold dark:text-[#fff]'>Currencies: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.currencies[0] ? item.currencies[0]: "No information"}</span></p>
            <p className='font-semibold dark:text-[#fff]'>Languages: <span className='font-light dark:text-[#fff] opacity-[0.7]'>{item.languages[0] ? item.languages[0]: "No information"}</span></p>
          
           </div>

        
        </div>

        <h1 className='mt-[3.4rem] lg:mt-[7rem] dark:text-[#fff]'>Border Countries :   {item.borders ? item.borders.map((border)=>{
            return (
              <div className=" py-[6px] inline-block font-light text-[#000] rounded-[3px] mb-[2rem] mr-[1rem] px-[1rem]    bg-[#fff] borders-shadow dark:text-[#fff] dark:bg-[#2B3844]" onClick={()=>{changeName(border.common)}} key={border._id}>
                {border.common}
              </div>
            )
            
           }):"..."}</h1>
        </div>
      </div>}
    {loading && <Loading/>}
    {error && <div className='w-[100vw] h-[100vh] bg-[#eeeeee] absolute left-0 top-0 flex items-center justify-center'>
        <h1 className='text-[3rem]'>{error}</h1></div>}

    </div>
  );
};

export default OneCountry;
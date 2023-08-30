import React, { useEffect, useState } from 'react'
import Moon from '../icons/moondark.svg'
import '../index.css'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    setDarkMode(isDarkModeEnabled);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkModeEnabled', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className='bg-[#fff] header-shadow dark:bg-[#2B3844]'>
      <div className='flex justify-between max-w-[1400px] px-[1.4rem] lg:px-[8rem] py-[2.3rem]  mx-[auto]'>
        <h1 className='text-[1.4rem] sm:text-[1.9rem] lg:text-[2.4rem] font-extrabold dark:text-[#fff]'>Where in the world?</h1>


        <div className='flex items-center gap-[8px] cursor-pointer' onClick={toggleDarkMode}>
            <img src={Moon} alt=""  width={20} height={20}/>
            <span className='text-[#111517] text-[1.3rem] sm:text-[1.6rem] dark:text-[#fff]'>Dark Mode</span>
        </div>
    </div>
    </div>
  )
}

export default Header
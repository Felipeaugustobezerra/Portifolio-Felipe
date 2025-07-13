import './darkmode.css';
import { useState } from 'react';

import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMoonOutline } from 'react-icons/io5';

const DarkMode = () => {
  // eslint-disable-next-line no-unused-vars
  const [darkMode, setDarkMode] = useState();
  const [icons, setIcons] = useState();

  const handleToggleMode = () => {
    const dayNight = document.querySelector('.day-night');
    document.body.classList.toggle('dark');

    setDarkMode(dayNight);
    setIcons(prevMode => !prevMode);
  };

  // eslint-disable-next-line no-unused-vars
  const toggleIcons = () => {};
  return (
    <div className='style-switcher-darkmode '>
      <div className='day-night s-icon-darkmode '>
        <i onClick={handleToggleMode}>
          {icons ? (
            <MdOutlineWbSunny className='light-color' />
          ) : (
            <IoMoonOutline className='dark-color' />
          )}
        </i>
      </div>
    </div>
  );
};
export default DarkMode;

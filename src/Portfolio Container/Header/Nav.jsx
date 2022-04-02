import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

import Button from '../../Utility/Button'
import classes from './Nav.module.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.nav}>
        <div className={classes.logo} id="logo">Afolabi.Olajide</div>
        <div onClick={toggleHandler} className={classes.ham}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${classes.navigation} ${isOpen && classes.active}`}>
          <div className={classes.items}>
              <div className={classes.menu}>
                  <a href="#home"><span>Home</span></a>
                  <a href="#about"><span>About Me</span></a>
                  <a href="#services"><span>Services</span></a>
              </div>
              <div className={classes.cta}>
                  <Button className={classes.btn}>Contact Me</Button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Nav
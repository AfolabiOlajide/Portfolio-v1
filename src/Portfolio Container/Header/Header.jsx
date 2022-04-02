import React from 'react';

import Nav from './Nav'
import HeaderBody from './HeaderBody';
import classes from './Header.module.css';

const Profile = () => {
  return (
    <div className={classes.head}>
      <div className={classes.header}>
          <Nav />
          <HeaderBody />
      </div>
      <div className={classes.design}>
        <div className={classes.circle1}></div>
        <div className={classes.circle2}></div>
        <div className={classes.circle3}></div>
      </div>
    </div>
  )
}

export default Profile
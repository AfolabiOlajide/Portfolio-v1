import React from 'react'
import Button from '../../Utility/Button'

import classes from "./HeaderBody.module.css"

const HeaderBody = () => {
  return (
    <div className={classes.headerBody}>
        <div className={classes.details}>
            <div className={classes.detailsbox}>
                <div className={classes.me}>
                    <span className={classes.greeting}>Hi I'm</span>
                    <span className={classes.name}>Afolabi Olajide Samuel</span>
                </div>
                <div className={classes.description}>
                    <p>I am a proficient web/React developer.</p>
                    <p>I can fufuil your dream of having a great and Excellent website.</p>
                    <p>Feeling persuaded?</p>
                </div>
            </div>
            <div className={classes.cta}>
                <Button className={classes.btn}>Hire Me</Button>
            </div>
        </div>
        <div className={classes.img}>
            <img src="main2.png" alt="" />
        </div>
    </div>
  )
}

export default HeaderBody
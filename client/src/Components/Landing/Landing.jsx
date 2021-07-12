import React from 'react';
import {Link} from 'react-router-dom';
import style from './Landing.module.css'

export default function LandingPage() {
    return (
      <div className={style.landingpage}>
        <div className={style.container}>
          <Link to='/home'>
            <button className={style.button} type='submit'>Time to Play!</button>
          </Link>
        </div>
      </div>
    );
}
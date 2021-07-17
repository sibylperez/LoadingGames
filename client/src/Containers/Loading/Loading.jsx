import React from 'react';
import style from './Loading.module.css'
import loading_gif from '../../Resourses/load.gif'

export default function Loading() {
    return (
        <div className={style.loading}>
            <div className={style.image}>
            <img src={loading_gif} alt="Loading..."></img>
            </div>
        </div>
)}
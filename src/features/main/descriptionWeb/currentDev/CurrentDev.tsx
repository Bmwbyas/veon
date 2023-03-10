import React from 'react';
import s from './CurrentDev.module.scss'
import {DevDataType} from "../data";

type CurrentDevType={
    D:DevDataType
}
export const CurrentDev:React.FC<CurrentDevType> = ({D}) => {
    return (
        <div className={s.container}>
            <div className={s.img} style={D.img}></div>
            <h2>{D.header}</h2>
            <p>{D.desc}</p>
        </div>
    );
};


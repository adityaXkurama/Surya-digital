import {useState,useEffect} from 'react'

export const second=()=>{
    const [sdata,setSdata]=useState()
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-forecast.txt`)
        .then((res)=>res.text())
        .then((res)=>setSdata(res))
    },[])
    // console.log(sdata);
    return sdata;
}
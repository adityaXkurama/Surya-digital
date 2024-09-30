import {useState,useEffect} from 'react'

export const first=()=>{
    const [fdata,setFdata]=useState()
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-current-weather.txt`)
        .then((res)=>res.text())
        .then((res)=>setFdata(res))
    },[])
    // console.log(fdata);
    return fdata;
}
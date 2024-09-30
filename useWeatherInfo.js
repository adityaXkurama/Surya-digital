import {useState,useEffect} from 'react'

export const useWeatherInfo=()=>{
    const [data,setData]=useState()
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-climate-details.txt`)
        .then((res)=>res.text())
        .then((res)=>setData(res))
    },[])
    
    return data;
}
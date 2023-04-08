import React,{useState,useEffect} from 'react'
import '../assets/Weather.css'
import Display from './Display'
export default function Weather() {
    
    const[location,setLocation]=useState("Kolkata")
    const[data,setData]=useState({})
    useEffect(()=>{
      fetchapi()
    },[])
      function fetchapi()
     {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=00fac35e2c4493abb0a76f1840fba6bf`).then((res)=>res.json()).then((data)=>setData(data))
    } 
     
    function handleChange(e){
      setLocation(e.target.value);
  }

    function handleSubmit(e){
      e.preventDefault();
      fetchapi();
  }          
     

    
  
  return (
    <div className="wrapper">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
       
          <input
            type="text"
            placeholder="Enter a city name"
            id="city"
            value={location}
            onChange={handleChange}
          />
          <button id="search-btn" type='submit'>Search</button>
        
        </div>
        </form>
        <div id="result">
        <Display mintemp={data?.main?.temp_min} maxtemp={data?.main?.temp_max} icon={`https://openweathermap.org/img/w/${data.weather===undefined?data.weather?.icon:data.weather[0]?.icon}.png`} temp={data?.main?.temp} desc={data?.weather?.description} weather={data?.weather?.main} name={data.name}/>
        </div>
      </div>
    </div>
  )
}

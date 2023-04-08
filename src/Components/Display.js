import React from 'react'
import '../assets/Weather.css'
export default function Display({name,mintemp,maxtemp,weather,desc,icon,temp}) {
  return (
    <>
    <h2>{name}</h2>
        <h4 class="weather">{weather}</h4>
        <h4 class="desc">{desc}</h4>
        <img src={icon}/>
        <h1>{temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp"> {mintemp} &#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">{maxtemp}&#176;</h4>
            </div>
        </div>
      </>
    
  )
}

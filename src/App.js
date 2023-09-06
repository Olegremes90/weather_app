import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import moment from 'moment';
import "./App.css"
import WeatherToday from "./components/WeatherToday";

const API_KEY = 'ea106812a582c323403c1e764e5795fb'
function App() {

      const [state, setState] = useState({
              city: undefined,
              temp: undefined,
              country: undefined,
              sunrise: undefined,
              sunset: undefined,
              error: ''
          }
      )
     const [result, setResult] = useState([])
    const getWeather =  async (e) => {
          e.preventDefault()
          const city = e.target.elements.city.value
        if(city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json()
            console.log(data)
            setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                error: ''

            })
            console.log(state)
        }


    }
    const Weather5Days = async(e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        if (city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await api_url.json()
            setResult([data])
            console.log(result)
        }
    }




   return (
       <div className='App'>
          <h3>Узнайте прогноз погоды</h3>
           <div className='block-1'>
           <form  onSubmit={Weather5Days}>
           <input type='text' name='city' placeholder='Город'/>
           <button>Узнать погоду на 5 дней</button>
       </form>

           <div>
               {result.length === 1
                   ?
                   <div className='prokrutka'>
                       <h3>{moment().format('dddd')}, <span>{moment().format('LL')}</span></h3>
                       <h3>Местоположение: {result[0].city.name}, {result[0].city.country}</h3>
                       {result[0].list.map (res => {
                           return (

                               <ul key={res.dt}>
                                   <h3>Дата: {res.dt_txt}</h3>
                                   <li>Температура: {res.main.temp} &deg;C</li>
                                   <li>Давление: {res.main.pressure} </li>
                                   <li>Описание: {res.weather[0].description} </li>
                                   <li>Скорость ветра: {res.wind.speed} м/с</li>
                               </ul>

                           )
                       })}
                   </div>
                   : <div></div>
               }
           </div>
           </div>
           <div className='block-2'>
           <WeatherToday getWeather={getWeather} state={state}/>
       </div>
        </div>


    );
}
export default App;

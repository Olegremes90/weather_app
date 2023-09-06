import React from 'react';
import moment from "moment/moment";
import "../App.css"

const WeatherToday = ({getWeather, state}) => {
    return (
        <div>
            <form onSubmit={getWeather}>
                <input type='text' name='city' placeholder='Город'/>
                <button>Узнать погоду на сегодня</button>
            </form>
            <div>
                {state.city
                    ?
                    <div className='weather-today'>
                        <h3>{moment().format('dddd')}, <span>{moment().format('LL')}</span></h3>
                        <h3>Местоположение: {state.city}, {state.country} </h3>
                        <ul>
                        <li>Температура: {state.temp} &deg;C</li>
                        <li>Восход солнца: {new Date(state.sunrise * 1000).toLocaleTimeString('en-IN')}</li>
                        <li>Заход солнца: {new Date(state.sunset * 1000).toLocaleTimeString('en-IN')}</li>
                        </ul>
                    </div>
                    : <div></div>
                }
            </div>

        </div>
    );
};

export default WeatherToday;
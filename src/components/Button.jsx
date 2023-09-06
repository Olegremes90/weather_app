import React from 'react';

const Button = ({listing}) => {
    return (
        <div>
            {listing.map(res =>
                <ul key={res.dt}>
                    <h3>Дата: {res.dt_txt}</h3>
                    <li>Температура: {res.main.temp} &deg;C</li>
                    <li>Давление: {res.main.pressure} </li>
                    <li>Описание: {res.weather[0].description} </li>
                    <li>Скорость ветра:{res.wind.speed} м/с</li>
                </ul>
            )}
        </div>
    );
};

export default Button;
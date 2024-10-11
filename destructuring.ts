const todaysWeather= {
    date: new Date(),
    weather: 'sunny'
};

// Without destructuring
const logWeather = (forecast: { date: Date, weather:string }): void =>{
    console.log(forecast.date);
    console.log(forecast.weather);
}

// With destructuring
const logWeather2 = ({date, weather}: { date: Date, weather:string }): void =>{
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather)
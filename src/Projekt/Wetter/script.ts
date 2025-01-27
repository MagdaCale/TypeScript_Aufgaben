import { WeatherResponse } from "./weaterType";
import ky from "ky";

const weatherOutputElement = document.querySelector<HTMLParagraphElement>('#output');

const apiKey = '6d4f000fbe3eac0f00ebad4de2274c88';
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=52.518611&lon=13.408333&appid=${apiKey}`


type City = {
    name: string,
    coords: [number, number]
}

const cities: City[] = [{
    name: "Hamburg",
    coords: [53.550556, 9.993333],
}, {
    name: "Freiburg",
    coords: [47.994828, 7.849881],
},{
    name: "Baden Baden",
    coords: [48.761944, 8.240833],
}];

async function getWeatherForCoords(coords: [number, number], name: string): Promise<WeatherResponse> {
    const weatherData = await ky
        .get("https://api.openweathermap.org/data/2.5/weather", {
            searchParams: {
                lat: coords[0],
                lon: coords[1],
                appid: apiKey,
            },
        })
        .json<WeatherResponse>();

    console.log(`Temperature in ${name} is ${weatherData.main!.temp - 273.15}C`);
    return weatherData;
}

if (weatherOutputElement) {
    
    Promise.all(cities.map(city => getWeatherForCoords(city.coords, city.name)))
        .then(results => {
            weatherOutputElement.textContent = ''; 
            
            results.forEach(data => {
                const cityDiv = document.createElement('div');
                
                const icon = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
                const iconImg = document.createElement('img');
                iconImg.src = iconUrl;
                
                const tempText = document.createElement('span');
                tempText.textContent = `${data.name}: ${(data.main!.temp - 273.15).toFixed(1)}°C`;
                
                cityDiv.appendChild(iconImg);
                cityDiv.appendChild(tempText);
                weatherOutputElement.appendChild(cityDiv);
            });
        })
        .catch(err => {
            console.log("Error fetching data:", err);
            weatherOutputElement.textContent = "Error loading weather data";
        });
}







// 
// const lat = 51.5074;
// const lon = -0.1278;
// const city = 'Hamburg';
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

// 
// 



// if(output) {   
//     // output.textContent = 'Loading...' 
//     fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         const temperature = data.main.temp;
//         output.textContent = `Die Temperatur in ${city} ist ${temperature}°C`
//     })
//     .catch(error => {
//         console.error('Fehler beim Laden der Wetterdaten:', error);
//     });
// }else{
//     console.log("not found");
// }












// if(output) {   

//     try{
//         cities.forEach(async (city) => {
//             getWeatherCords(city.coords, city.name)
//         })

//         // const response = await fetch(url);
//         // const data: WeatherResponse = await response.json();
//         // console.log(data);
//         // const temperature = data.main.temp;
//         // output.textContent = `Die Temperatur in ${city} ist ${temperature}°C`

//         // Wetter-Icon anzeigen
//         // const icon = data.weather[0].icon;
//         // const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
//         // const iconElement = document.createElement('img');
//         // iconElement.src = iconUrl;
//         // output.appendChild(iconElement);
//     }
//     catch(error){
//         console.error('Fehler beim Laden der Wetterdaten:', error);
//     }

// }else{
//     console.log("not found");
// }
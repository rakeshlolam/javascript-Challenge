const apiKey="5a3ff175564d1a2fccea0fedbf3a68a7"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric"

const searchBox=document.querySelector(".search input");
const searchbutton=document.querySelector(".searchBtn");
const weatherIcon=document.querySelector(".weatherIcon");

async function weatherCheck(city){
    
    const response=await fetch(apiUrl +`&appid=${apiKey}&q=${city}`);
    let data=await response.json();
    
    console.log(data)

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity +"%";
    document.querySelector('.windSpeed').innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="clouds"){
        weatherIcon.src="images/cloud.png"
    }
    else if (data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }

    document.querySelector(".detail").style.display="block"
}

searchbutton.addEventListener("click",()=>{
    weatherCheck(searchBox.value);
})
 
// weatherCheck(mumbai);
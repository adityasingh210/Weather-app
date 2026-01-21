const key ="8bfd155c762bd9abf8e5947e2dfdb18f"
async function getData(city){
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${key}&units=metric`;
    try{
         const response=await fetch(url);
         if(!response.ok){
            throw new Error("unable to get data ");
         }
         const data= await response.json();
         return data;
    }
    catch(e){
        console.log(e);
    }
}
let temperature=document.getElementById("temperature");
let temperatureVal=document.getElementById("temp-value");
let type=document.getElementById("temp-type");
let locationcity=document.getElementsByClassName("location");
let windspeed=document.getElementById("wind-value");
let humidity=document.getElementById("humid-value");
let visibility=document.getElementById("visibility-value");
let icon=document.getElementById("icon");
                         
 async function handleClick(){
    const city = document.querySelector("input").value;
    const data = await getData(city)
    const iconCode = data.weather[0].icon;   // e.g. "50n"
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    temperature.innerText=data.main.temp+"°C";
    type.innerText=data.weather[0].main;
    locationcity[0].innerText=data.name+","+ data.sys.country;
    visibility.innerText=data.visibility +" m";
    windspeed.innerText=data.wind.speed + " km/h";
    humidity.innerText=data.main.humidity +" %";
    temperatureVal.innerText=data.main.temp + "°C (feels Like";
    icon.innerHTML= `<img src="${iconUrl}" width="100" height="100" />`;
}
const button=document.getElementById("search-btn");
button.addEventListener("click",handleClick);
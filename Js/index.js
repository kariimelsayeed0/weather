const form = document.getElementById('form')
const search = document.getElementById('search')
const btn = document.getElementById('btn')
const city = document.getElementById('city')
const temp = document.getElementById('temp')
const state = document.getElementById('state')
const ump = document.getElementById('ump')
const wind = document.getElementById('wind')
const comp = document.getElementById('comp')
const icon = document.getElementById('icon-2')
const temp2 = document.getElementById('temp-2')
const temp3 = document.getElementById('temp-3')
const state2 = document.getElementById('state-2')
const date = document.getElementById('date')
const date2 = document.getElementById('date-2')
const icon2 = document.getElementById('icon-3')
const temp4 = document.getElementById('temp-4')
const temp5 = document.getElementById('temp-5')
const state3 = document.getElementById('state-3')


form.addEventListener('submit',(e)=>{
e.preventDefault()
dataInp(search.value)

})

async function dataInp(city){
    try {
        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d8baecf888f14d138fd113859242706&q=${city}&days=7`)
        let data = await response.json()
    console.log(data)
    document.querySelector('.seif').innerHTML=data.location.name
    temp.innerHTML = Math.round(data.current.temp_c)+"oC"
    wind.innerHTML = `<i class="fa-solid fa-wind"></i>`+ data.current.wind_kph + "kmh"
    if(data.current.temp_c <= 20){
        state.innerHTML = `<i class="fa-solid fa-cloud"></i>` 
    }else if(data.current.temp_c <= 25){
       state.innerHTML = `  <i class="fa-solid fa-sun fa-bounce display-6" style="color: #FFD43B;"></i>`
    }else if(data.current.temp_c <= 15){
        state.innerHTML = `<i class="fa-solid fa-cloud"></i>`
    
    }else if(data.current.temp_c <= 10){
        state.innerHTML =  `<i class="fa-solid fa-cloud-rain"></i>`
    }else if(data.current.temp_c <= 50){
        state.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }
    temp2.innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c)
    temp3.innerHTML = Math.round(data.forecast.forecastday[1].day.mintemp_c)
    date.innerHTML = data.forecast.forecastday[1].date
    temp4.innerHTML = Math.round(data.forecast.forecastday[2].day.maxtemp_c)
    temp5.innerHTML = Math.round(data.forecast.forecastday[2].day.mintemp_c)
    date2.innerHTML = data.forecast.forecastday[2].date
    
    
    } catch (error) {
        console.log('error')
    }
  
}

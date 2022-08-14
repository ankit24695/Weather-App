const api_key ="26088b1b8697603530011ff3872aac01";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let form = document.querySelector('#form');
form.addEventListener("submit",myfunction)

function myfunction(){
    event.preventDefault();

let city = form.city.value;
console.log(city)

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

async function gettemp(){
try{
    let res = await fetch(url)
   let user = await res.json();
   console.log(user)
  display(user.main)
   
}
catch(err){
    console.log(err);
}
   
}

gettemp();

let parent = document.querySelector('#display');


function display(obj){
    parent.innerHTML="";
let h2 = document.createElement('h2');
h2.innerText = city;

let curtemp = Math.floor(obj.temp/10)

let h1 = document.createElement('h1');
h1.innerText = `Current Temperature: ${curtemp} C`

let maxtemp = Math.floor(obj.temp_max/10)

let h3 = document.createElement('h3');
h3.innerText =`Max Temperature: ${maxtemp} C`

let mintemp = Math.floor(obj.temp_min/10)

let h4 = document.createElement('h3');
h4.innerText =`Min Temperature: ${mintemp} C`


parent.append(h2,h1,h3,h4)


let iframe = document.getElementById("gmap_canvas")
iframe.src = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

}


async function gettemp(lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    
    try{
        let res = await fetch(url)
       let user = await res.json();
       console.log(user)
      display(user.main)
       
    }
    catch(err){
        console.log(err);
    }
       
    }
    

//src="https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed"


//based on current location


function currentloc(){
    function getLocationWeather() {
        navigator.geolocation.getCurrentPosition(success);
        function success(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          gettemp(latitude,longitude)
          console.log(latitude);
          console.log(longitude);
        }
      }
    
    getLocationWeather();
    
    async function gettemp(lat,lon){
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
        
        try{
            let res = await fetch(url)
           let user = await res.json();
           console.log(user)
          display(user)
           
        }
        catch(err){
            console.log(err);
        }
           
        }
    
    
        let parent = document.querySelector('#display');
    
        function display(obj){
            parent.innerHTML="";
        let h2 = document.createElement('h2');
        h2.innerText = obj.name;
        
        let curtemp = Math.floor(obj.main.temp/10)
        
        let h1 = document.createElement('h1');
        h1.innerText = `Current Temperature: ${curtemp} C`
        
        let maxtemp = Math.floor(obj.main.temp_max/10)
        
        let h3 = document.createElement('h3');
        h3.innerText =`Max Temperature: ${maxtemp} C`
        
        let mintemp = Math.floor(obj.main.temp_min/10)
        
        let h4 = document.createElement('h3');
        h4.innerText =`Min Temperature: ${mintemp} C`
        
        
        parent.append(h2,h1,h3,h4)
        
        
        let iframe = document.getElementById("gmap_canvas")
        iframe.src = `https://maps.google.com/maps?q=${obj.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        }

}
    






